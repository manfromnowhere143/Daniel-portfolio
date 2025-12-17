"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import FadeImage from "@/components/FadeImage";
import Trade69Architecture from "@/components/Trade69Architecture";

// ═══════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - TRADE69 PAGE
// Premium iOS-style gallery with sphere proportions and compact layout
// ═══════════════════════════════════════════════════════════════════════════════

const galleryImages = [
  { src: "/images/t69hero4.png" },
  { src: "/images/t69dash1.png" },
  { src: "/images/t69dash2.png" },
  { src: "/images/t69dash3.png" },
  { src: "/images/t69dash4.png" },
  { src: "/images/tphoto2.png" },
  { src: "/images/tphoto3.png" },
];

const dataSourcesData = [
  { source: "StockTwits", data: "Trending tickers, sentiment ratios, message volume" },
  { source: "Reddit", data: "WSB, stocks, options subreddits with sentiment analysis" },
  { source: "Alpha Vantage", data: "News articles with ticker-specific sentiment scores" },
  { source: "Alpaca Markets", data: "Real-time quotes, OHLCV data, options chains" },
  { source: "Dark Pool", data: "Block trades, institutional accumulation patterns" },
  { source: "SEC EDGAR", data: "8-K filings, Form 4 insider transactions" },
  { source: "Yahoo Finance", data: "VIX levels, sector ETF performance" },
  { source: "FRED", data: "Put/Call ratio, credit spreads, yield curve" },
  { source: "Finviz", data: "Technical screener, momentum indicators" },
];

const intelligenceSteps = [
  { num: "01", title: "Signal Detection", desc: "Composite scoring combining sentiment, options flow, dark pool activity, and technical indicators" },
  { num: "02", title: "Regime Detection", desc: "Hidden Markov Model identifying BULL, BEAR, NEUTRAL states for adaptive strategy" },
  { num: "03", title: "Machine Learning", desc: "Random Forest with 25 features: signal metrics, Greeks, liquidity, regime state" },
  { num: "04", title: "Risk Management", desc: "Kelly Criterion sizing with sector limits and correlation tracking" }
];

type AnimationState = 'idle' | 'entering' | 'active' | 'exiting';

// ═══════════════════════════════════════════════════════════════════════════════
// GLOBAL CLEANUP FUNCTION
// ═══════════════════════════════════════════════════════════════════════════════
const restoreScroll = () => {
  const savedScrollY = (window as any).__t69ScrollY || 0;
  document.body.style.paddingRight = '';
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.height = '';
  document.body.style.width = '';
  document.documentElement.style.overflow = '';

  if ((window as any).__t69Cleanup) {
    (window as any).__t69Cleanup();
    delete (window as any).__t69Cleanup;
  }

  if ((window as any).__t69ScrollY !== undefined) {
    window.scrollTo(0, savedScrollY);
    delete (window as any).__t69ScrollY;
    delete (window as any).__t69ScrollbarWidth;
  }
};

export default function Trade69() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Video states
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [videoAnimState, setVideoAnimState] = useState<AnimationState>('idle');
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Gallery folder states
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryAnimState, setGalleryAnimState] = useState<AnimationState>('idle');

  // Architecture expanded state
  const [archOpen, setArchOpen] = useState(false);
  const [archAnimState, setArchAnimState] = useState<AnimationState>('idle');

  // 3D Mermaid expanded state
  const [mermaidOpen, setMermaidOpen] = useState(false);
  const [mermaidAnimState, setMermaidAnimState] = useState<AnimationState>('idle');

  // Image expansion states
  const [expandedImage, setExpandedImage] = useState<{ src: string } | null>(null);
  const [imageAnimState, setImageAnimState] = useState<AnimationState>('idle');
  const [bridgePhase, setBridgePhase] = useState<'idle' | 'loading' | 'transitioning'>('idle');

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  const videoTimeRef = useRef<number>(0);
  const loadedImagesRef = useRef<Set<string>>(new Set());

  const videoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const galleryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const archTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mermaidTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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

  useEffect(() => {
    return () => {
      if (videoTimeoutRef.current) clearTimeout(videoTimeoutRef.current);
      if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
      if (archTimeoutRef.current) clearTimeout(archTimeoutRef.current);
      if (mermaidTimeoutRef.current) clearTimeout(mermaidTimeoutRef.current);
      if (imageTimeoutRef.current) clearTimeout(imageTimeoutRef.current);
      if (bridgeTimeoutRef.current) clearTimeout(bridgeTimeoutRef.current);
      restoreScroll();
    };
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════════
  // SCROLL LOCK
  // ═══════════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const isOpen = videoAnimState !== 'idle' || galleryAnimState !== 'idle' ||
                   archAnimState !== 'idle' || mermaidAnimState !== 'idle' ||
                   imageAnimState !== 'idle' || bridgePhase !== 'idle';

    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const scrollY = window.scrollY;

      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.documentElement.style.overflow = 'hidden';

      (window as any).__t69ScrollY = scrollY;
      (window as any).__t69ScrollbarWidth = scrollbarWidth;

      const blockAllTouch = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.video-player-container')) return;
        if (target.closest('.image-expanded-content')) return;
        if (target.closest('.gallery-container')) return;
        if (target.closest('.arch-expanded-content')) return;
        if (target.closest('.mermaid-expanded-content')) return;
        e.preventDefault();
        e.stopPropagation();
      };

      const blockWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.video-player-container')) return;
        if (target.closest('.image-expanded-content')) return;
        if (target.closest('.gallery-container')) return;
        if (target.closest('.arch-expanded-content')) return;
        if (target.closest('.mermaid-expanded-content')) return;
        e.preventDefault();
        e.stopPropagation();
      };

      document.addEventListener('touchmove', blockAllTouch, { passive: false, capture: true });
      document.addEventListener('wheel', blockWheel, { passive: false, capture: true });

      (window as any).__t69Cleanup = () => {
        document.removeEventListener('touchmove', blockAllTouch, { capture: true } as any);
        document.removeEventListener('wheel', blockWheel, { capture: true } as any);
        const savedScrollY = (window as any).__t69ScrollY || 0;
        document.body.style.paddingRight = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.documentElement.style.overflow = '';
        window.scrollTo(0, savedScrollY);
        delete (window as any).__t69ScrollY;
        delete (window as any).__t69ScrollbarWidth;
      };

    } else {
      restoreScroll();
    }

    return () => {
      if ((window as any).__t69Cleanup) {
        (window as any).__t69Cleanup();
      }
    };
  }, [videoAnimState, galleryAnimState, archAnimState, mermaidAnimState, imageAnimState, bridgePhase]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // VIDEO HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleExpandVideo = useCallback(() => {
    if (videoAnimState !== 'idle') return;
    if (videoRef.current) {
      videoTimeRef.current = videoRef.current.currentTime;
      videoRef.current.pause();
    }
    setVideoExpanded(true);
    setVideoAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVideoAnimState('active');
        if (expandedVideoRef.current) {
          expandedVideoRef.current.currentTime = videoTimeRef.current;
          expandedVideoRef.current.play();
          setIsPlaying(true);
        }
      });
    });
  }, [videoAnimState]);

  const handleCloseVideo = useCallback(() => {
    if (videoAnimState !== 'active') return;
    if (expandedVideoRef.current) {
      videoTimeRef.current = expandedVideoRef.current.currentTime;
      expandedVideoRef.current.pause();
    }
    setVideoAnimState('exiting');
    videoTimeoutRef.current = setTimeout(() => {
      setVideoExpanded(false);
      setVideoAnimState('idle');
      if (videoRef.current) {
        videoRef.current.currentTime = videoTimeRef.current;
        videoRef.current.play();
      }
    }, 400);
  }, [videoAnimState]);

  const handlePlayPause = useCallback(() => {
    if (expandedVideoRef.current) {
      if (isPlaying) {
        expandedVideoRef.current.pause();
      } else {
        expandedVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleVideoTimeUpdate = useCallback(() => {
    if (expandedVideoRef.current) setVideoProgress(expandedVideoRef.current.currentTime);
  }, []);

  const handleVideoLoaded = useCallback(() => {
    if (expandedVideoRef.current) setVideoDuration(expandedVideoRef.current.duration);
  }, []);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (expandedVideoRef.current && videoDuration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      expandedVideoRef.current.currentTime = percent * videoDuration;
      setVideoProgress(percent * videoDuration);
    }
  }, [videoDuration]);

  const handleSkipBack = useCallback(() => {
    if (expandedVideoRef.current) expandedVideoRef.current.currentTime = Math.max(0, expandedVideoRef.current.currentTime - 10);
  }, []);

  const handleSkipForward = useCallback(() => {
    if (expandedVideoRef.current && videoDuration) expandedVideoRef.current.currentTime = Math.min(videoDuration, expandedVideoRef.current.currentTime + 10);
  }, [videoDuration]);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // GALLERY HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

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

  // ═══════════════════════════════════════════════════════════════════════════════
  // ARCHITECTURE HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleOpenArch = useCallback(() => {
    if (archAnimState !== 'idle') return;
    setArchOpen(true);
    setArchAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setArchAnimState('active'));
    });
  }, [archAnimState]);

  const handleCloseArch = useCallback(() => {
    if (archAnimState !== 'active') return;
    setArchAnimState('exiting');
    archTimeoutRef.current = setTimeout(() => {
      setArchOpen(false);
      setArchAnimState('idle');
    }, 350);
  }, [archAnimState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // MERMAID HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleOpenMermaid = useCallback(() => {
    if (mermaidAnimState !== 'idle') return;
    setMermaidOpen(true);
    setMermaidAnimState('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMermaidAnimState('active'));
    });
  }, [mermaidAnimState]);

  const handleCloseMermaid = useCallback(() => {
    if (mermaidAnimState !== 'active') return;
    setMermaidAnimState('exiting');
    mermaidTimeoutRef.current = setTimeout(() => {
      setMermaidOpen(false);
      setMermaidAnimState('idle');
    }, 350);
  }, [mermaidAnimState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // IMAGE EXPANSION HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleOpenImage = useCallback((image: { src: string }) => {
    if (imageAnimState !== 'idle' || bridgePhase !== 'idle') return;

    const isAlreadyLoaded = loadedImagesRef.current.has(image.src);

    if (isAlreadyLoaded) {
      if (galleryAnimState === 'active') {
        setGalleryAnimState('exiting');
        galleryTimeoutRef.current = setTimeout(() => {
          setGalleryOpen(false);
          setGalleryAnimState('idle');

          setExpandedImage(image);
          setImageAnimState('entering');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setImageAnimState('active'));
          });
        }, 350);
      } else {
        setExpandedImage(image);
        setImageAnimState('entering');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setImageAnimState('active'));
        });
      }
    } else {
      setBridgePhase('loading');

      if (galleryAnimState === 'active') {
        setGalleryAnimState('exiting');
        galleryTimeoutRef.current = setTimeout(() => {
          setGalleryOpen(false);
          setGalleryAnimState('idle');
        }, 350);
      }

      const img = new Image();
      const showImage = () => {
        loadedImagesRef.current.add(image.src);

        setExpandedImage(image);
        setImageAnimState('entering');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setImageAnimState('active');
            setBridgePhase('transitioning');

            setTimeout(() => {
              setBridgePhase('idle');
            }, 450);
          });
        });
      };

      img.onload = showImage;
      img.onerror = showImage;
      img.src = image.src;
    }
  }, [imageAnimState, bridgePhase, galleryAnimState]);

  const handleCloseImage = useCallback(() => {
    if (imageAnimState !== 'active') return;
    setImageAnimState('exiting');
    imageTimeoutRef.current = setTimeout(() => {
      setExpandedImage(null);
      setImageAnimState('idle');
    }, 400);
  }, [imageAnimState]);

  const getAnimClass = (state: AnimationState) => state === 'idle' ? '' : state;

  return (
    <>
      <style>{`
        * { -webkit-tap-highlight-color: transparent; }
        html { scrollbar-gutter: stable; }
        
        .t69-page {
          padding-top: 60px;
          min-height: 100vh;
          background-color: #050506;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           HERO - COMPACT
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 20px 16px;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .t69-hero.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        .t69-hero-image {
          max-width: clamp(260px, 65vw, 500px);
          margin: 0 auto;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 40px 100px rgba(0, 0, 0, 0.7), 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           VIDEO SECTION - COMPACT
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-video-section {
          max-width: 700px;
          margin: 0 auto;
          padding: 0 20px 20px;
        }
        
        .t69-video-container {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 30px 80px rgba(0, 0, 0, 0.6);
          background: #000;
        }
        
        .t69-video-container video {
          width: 100%;
          display: block;
        }
        
        .t69-video-expand-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease;
          z-index: 10;
        }
        
        .t69-video-container:hover .t69-video-expand-btn {
          opacity: 1;
          transform: scale(1);
        }
        
        .t69-video-expand-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: scale(1.05);
        }
        
        .t69-video-expand-btn svg {
          width: 16px;
          height: 16px;
          color: white;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           FOLDERS ROW - Screenshots + 3D Architecture in one line
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-folders-section {
          max-width: 600px;
          margin: 0 auto;
          padding: 16px 20px 24px;
        }
        
        .t69-folders-row {
          display: flex;
          justify-content: center;
          gap: clamp(32px, 7vw, 64px);
        }
        
        .folder-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .folder-icon {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: rgba(40, 40, 45, 0.65);
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(12px);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, opacity 0.5s ease;
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.08),
            0 0 30px rgba(0, 0, 0, 0.5),
            0 6px 24px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }
        
        .folder-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 100%);
          border-radius: 20px 20px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .folder-icon.loaded {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
        }
        
        .folder-icon:active {
          transform: translateZ(0) scale(0.95) translateY(0);
        }
        
        .folder-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3px;
          width: 60px;
          height: 60px;
          position: relative;
          z-index: 5;
        }
        
        .folder-mini-thumb {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 0 10px rgba(0, 0, 0, 0.3),
            0 3px 10px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }
        
        .folder-mini-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .arch-preview {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
        }
        
        .arch-preview svg {
          width: 36px;
          height: 36px;
          color: rgba(255, 255, 255, 0.85);
        }
        
        .folder-name {
          font-size: 10px;
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: 0.02em;
          text-align: center;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
        }
        
        .folder-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           GALLERY OVERLAY - SPHERE PROPORTIONS (320x320 centered)
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .gallery-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          overflow: hidden;
          touch-action: none;
        }
        
        .gallery-overlay.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .gallery-overlay.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        .gallery-overlay.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .gallery-overlay-bg {
          position: absolute;
          inset: 0;
          background: rgba(5, 5, 6, 0.92);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
        }
        
        .gallery-container {
          position: relative;
          z-index: 2;
          width: 320px;
          height: 320px;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 28px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.85);
          transition: none;
          box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.08),
            0 25px 80px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.9);
        }
        
        .gallery-overlay.active .gallery-container {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.02s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.02s;
        }
        
        .gallery-overlay.exiting .gallery-container {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          touch-action: manipulation;
        }
        
        .gallery-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          opacity: 0;
          transform: translateZ(0) scale(0.7) translateY(10px);
          transition: none;
          touch-action: manipulation;
        }
        
        .gallery-overlay.active .gallery-item {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1), transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .gallery-overlay.exiting .gallery-item {
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(5px);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .gallery-overlay.active .gallery-item:nth-child(1) { transition-delay: 0.02s; }
        .gallery-overlay.active .gallery-item:nth-child(2) { transition-delay: 0.04s; }
        .gallery-overlay.active .gallery-item:nth-child(3) { transition-delay: 0.06s; }
        .gallery-overlay.active .gallery-item:nth-child(4) { transition-delay: 0.08s; }
        .gallery-overlay.active .gallery-item:nth-child(5) { transition-delay: 0.10s; }
        .gallery-overlay.active .gallery-item:nth-child(6) { transition-delay: 0.12s; }
        .gallery-overlay.active .gallery-item:nth-child(7) { transition-delay: 0.14s; }
        
        .gallery-item-thumb {
          width: 80px;
          height: 80px;
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 0 15px rgba(0, 0, 0, 0.15),
            0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.25);
        }
        
        .gallery-item-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .gallery-item:active .gallery-item-thumb {
          transform: scale(0.92);
          transition: transform 0.15s ease;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           ARCHITECTURE EXPANDED - SPHERE PROPORTIONS
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .arch-expanded {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(5, 5, 6, 0.96);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          overflow: hidden;
          touch-action: none;
        }
        
        .arch-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .arch-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .arch-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .arch-expanded-content {
          width: 320px;
          height: 320px;
          overflow: auto;
          opacity: 0;
          transform: scale(0.85);
          transition: none;
          -webkit-overflow-scrolling: touch;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .arch-expanded.active .arch-expanded-content {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1) 0.08s, transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) 0.08s;
        }
        
        .arch-expanded.exiting .arch-expanded-content {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .arch-expanded-close {
          margin-top: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.5);
          transition: none;
        }
        
        .arch-expanded.active .arch-expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.25s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s;
        }
        
        .arch-expanded.exiting .arch-expanded-close {
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .arch-expanded-close:hover { background: rgba(255, 255, 255, 0.2); }
        .arch-expanded-close svg { color: white; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           MERMAID 3D EXPANDED - SPHERE PROPORTIONS
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .mermaid-expanded {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(5, 5, 6, 0.96);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          overflow: hidden;
          touch-action: none;
        }
        
        .mermaid-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .mermaid-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .mermaid-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .mermaid-expanded-content {
          width: 320px;
          height: 320px;
          background: rgba(20, 20, 25, 0.9);
          border-radius: 24px;
          overflow: auto;
          opacity: 0;
          transform: scale(0.85);
          transition: none;
          -webkit-overflow-scrolling: touch;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.05),
            0 25px 80px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);
        }
        
        .mermaid-expanded.active .mermaid-expanded-content {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1) 0.08s, transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) 0.08s;
        }
        
        .mermaid-expanded.exiting .mermaid-expanded-content {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .mermaid-expanded-close {
          margin-top: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.5);
          transition: none;
        }
        
        .mermaid-expanded.active .mermaid-expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.25s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s;
        }
        
        .mermaid-expanded.exiting .mermaid-expanded-close {
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .mermaid-expanded-close:hover { background: rgba(255, 255, 255, 0.2); }
        .mermaid-expanded-close svg { color: white; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           IMAGE EXPANDED - SPHERE PROPORTIONS
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .image-expanded {
          position: fixed;
          inset: 0;
          z-index: 20000;
          background: rgba(5, 5, 6, 0.97);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          overflow: hidden;
          touch-action: none;
        }
        
        .image-expanded.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .image-expanded.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .image-expanded.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .image-expanded-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .image-expanded-content {
          width: 320px;
          height: 320px;
          border-radius: 20px;
          overflow: hidden;
          background: #0a0a0a;
          opacity: 0;
          transform: scale(0.85);
          transition: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 0 80px rgba(0, 0, 0, 0.8),
            0 40px 100px rgba(0, 0, 0, 0.6);
        }
        
        .image-expanded.active .image-expanded-content {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1) 0.08s, transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) 0.08s;
        }
        
        .image-expanded.exiting .image-expanded-content {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .image-expanded-content img {
          display: block;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        
        .image-expanded-close {
          margin-top: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.5);
          transition: none;
        }
        
        .image-expanded.active .image-expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.25s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s;
        }
        
        .image-expanded.exiting .image-expanded-close {
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .image-expanded-close:hover { background: rgba(255, 255, 255, 0.2); }
        .image-expanded-close svg { color: white; filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)); }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           VIDEO OVERLAY - SPHERE PROPORTIONS
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .video-overlay {
          position: fixed;
          inset: 0;
          z-index: 30000;
          background: rgba(5, 5, 6, 0.98);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          overflow: hidden;
          touch-action: none;
        }
        
        .video-overlay.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .video-overlay.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
        .video-overlay.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .video-player-wrapper {
          width: 320px;
          opacity: 0;
          transform: scale(0.85);
          transition: none;
        }
        
        .video-overlay.active .video-player-wrapper {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1) 0.08s, transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) 0.08s;
        }
        
        .video-overlay.exiting .video-player-wrapper {
          opacity: 0;
          transform: scale(0.94);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .video-player-container {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #000;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 0 80px rgba(0, 0, 0, 0.8),
            0 40px 100px rgba(0, 0, 0, 0.7);
        }
        
        .video-player-container video {
          width: 100%;
          display: block;
          cursor: pointer;
        }
        
        .video-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 16px 14px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .video-progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
        }
        
        .video-progress-fill {
          height: 100%;
          background: #FFFFFF;
          border-radius: 2px;
          transition: width 0.1s linear;
        }
        
        .video-controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .video-controls-left {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .video-control-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        
        .video-control-btn:hover { background: rgba(255, 255, 255, 0.12); }
        .video-control-btn:active { transform: scale(0.9); }
        .video-control-btn svg { width: 18px; height: 18px; color: white; }
        .video-control-btn.play-btn svg { width: 22px; height: 22px; }
        
        .video-time {
          font-size: 11px;
          font-weight: 500;
          color: #FFFFFF;
          font-family: 'SF Mono', Monaco, monospace;
          letter-spacing: 0.03em;
          margin-left: 8px;
        }
        
        .video-close-btn {
          margin-top: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.5);
          transition: none;
        }
        
        .video-overlay.active .video-close-btn {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0.3s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
        }
        
        .video-overlay.exiting .video-close-btn {
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .video-close-btn:hover { background: rgba(255, 255, 255, 0.2); }
        .video-close-btn svg { width: 20px; height: 20px; color: white; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           TRANSITION BRIDGE
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .transition-bridge {
          position: fixed;
          inset: 0;
          background: #050506;
          z-index: 25000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
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
          width: 40px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.08);
          border-top-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: bridgeSpin 0.9s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite;
        }
        
        @keyframes bridgeSpin {
          to { transform: rotate(360deg); }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           CONTENT SECTIONS - COMPACT PADDING
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-section-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #FFFFFF;
          opacity: 0.5;
          text-align: center;
          margin-bottom: 16px;
        }
        
        .t69-overview-section {
          max-width: 640px;
          margin: 0 auto;
          padding: 20px 20px 28px;
        }
        
        .t69-overview-text {
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 300;
          color: #FFFFFF;
          line-height: 1.75;
          margin-bottom: 14px;
        }
        
        .t69-overview-text:last-child { margin-bottom: 0; }
        .t69-overview-text em { font-style: normal; color: #FFFFFF; font-weight: 500; }
        
        .t69-data-section {
          max-width: 680px;
          margin: 0 auto;
          padding: 20px 20px;
        }
        
        .t69-data-list {
          display: flex;
          flex-direction: column;
        }
        
        .t69-data-item {
          display: grid;
          grid-template-columns: 24px 1fr 2fr;
          gap: clamp(8px, 1.5vw, 16px);
          align-items: baseline;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        
        .t69-data-item:last-child { border-bottom: none; }
        
        .t69-data-num {
          font-size: 9px;
          font-weight: 500;
          color: #FFFFFF;
          opacity: 0.4;
          font-family: 'SF Mono', Monaco, monospace;
        }
        
        .t69-data-source {
          font-size: clamp(12px, 1.5vw, 14px);
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: 0.01em;
        }
        
        .t69-data-desc {
          font-size: clamp(11px, 1.3vw, 13px);
          font-weight: 400;
          color: #FFFFFF;
          opacity: 0.7;
          line-height: 1.5;
        }
        
        @media (max-width: 600px) {
          .t69-data-item {
            grid-template-columns: 22px 1fr;
            grid-template-rows: auto auto;
          }
          .t69-data-desc {
            grid-column: 2;
            margin-top: 3px;
          }
        }
        
        .t69-intelligence-section {
          max-width: 860px;
          margin: 0 auto;
          padding: 28px 20px;
        }
        
        .t69-intelligence-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: clamp(24px, 4vw, 40px);
        }
        
        .t69-intelligence-item {
          text-align: center;
        }
        
        .t69-intelligence-num {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          background: rgba(255, 255, 255, 0.03);
        }
        
        .t69-intelligence-num span {
          font-size: 11px;
          font-weight: 400;
          color: #FFFFFF;
          opacity: 0.7;
          font-family: 'SF Mono', Monaco, monospace;
        }
        
        .t69-intelligence-title {
          font-size: clamp(13px, 1.5vw, 15px);
          font-weight: 500;
          color: #FFFFFF;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }
        
        .t69-intelligence-desc {
          font-size: 12px;
          font-weight: 400;
          color: #FFFFFF;
          opacity: 0.7;
          line-height: 1.6;
          max-width: 220px;
          margin: 0 auto;
        }
        
        .t69-stack-section {
          max-width: 660px;
          margin: 0 auto;
          padding: 28px 20px;
          text-align: center;
        }
        
        .t69-stack-list {
          font-size: clamp(11px, 1.3vw, 13px);
          font-weight: 400;
          color: #FFFFFF;
          opacity: 0.6;
          line-height: 2;
          letter-spacing: 0.03em;
        }
        
        .t69-nav {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 24px 20px;
        }
        
        .t69-nav-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .t69-nav-link {
          font-size: 10px;
          font-weight: 500;
          color: #FFFFFF;
          opacity: 0.5;
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: opacity 0.3s ease;
        }
        
        .t69-nav-link:hover { opacity: 1; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           RESPONSIVE - SPHERE SCALES UP
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .folder-icon { width: 100px; height: 100px; border-radius: 24px; }
          .folder-preview { width: 76px; height: 76px; gap: 4px; }
          .folder-mini-thumb { width: 36px; height: 36px; border-radius: 8px; }
          .arch-preview svg { width: 44px; height: 44px; }
          .folder-name { font-size: 11px; }
          
          .gallery-container { width: 380px; height: 380px; padding: 24px; border-radius: 30px; }
          .gallery-grid { gap: 12px; }
          .gallery-item-thumb { width: 100px; height: 100px; border-radius: 16px; }
          
          .arch-expanded-content { width: 380px; height: 380px; }
          .mermaid-expanded-content { width: 380px; height: 380px; }
          .image-expanded-content { width: 380px; height: 380px; }
          .video-player-wrapper { width: 380px; }
        }
        
        @media (min-width: 900px) {
          .folder-icon { width: 120px; height: 120px; border-radius: 28px; }
          .folder-preview { width: 92px; height: 92px; gap: 5px; }
          .folder-mini-thumb { width: 43px; height: 43px; border-radius: 10px; }
          .arch-preview svg { width: 52px; height: 52px; }
          .folder-name { font-size: 12px; }
          
          .gallery-container { width: 440px; height: 440px; padding: 28px; }
          .gallery-grid { gap: 14px; }
          .gallery-item-thumb { width: 120px; height: 120px; border-radius: 18px; }
          
          .arch-expanded-content { width: 440px; height: 440px; }
          .mermaid-expanded-content { width: 440px; height: 440px; }
          .image-expanded-content { width: 440px; height: 440px; }
          .video-player-wrapper { width: 440px; }
        }
      `}</style>

      <div className="t69-page">
        <div className={`t69-hero ${isLoaded ? 'loaded' : ''}`}>
          <div className="t69-hero-image">
            <FadeImage src="/images/t69hero4.png" alt="Trade69 Dashboard" width={640} height={420} priority />
          </div>
        </div>

        <div className="t69-video-section">
          <div className="t69-video-container">
            <video ref={videoRef} src="/videos/t69demo.mp4" autoPlay muted loop playsInline />
            <button className="t69-video-expand-btn" onClick={handleExpandVideo}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            FOLDERS ROW - Screenshots + 3D Architecture side by side
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <div className="t69-folders-section">
          <div className="t69-folders-row">
            {/* Gallery Folder */}
            <div className="folder-wrapper">
              <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={handleOpenGallery}>
                <div className="folder-preview">
                  {galleryImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="folder-mini-thumb">
                      <img src={image.src} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <span className={`folder-name ${isLoaded ? 'loaded' : ''}`}>Screenshots</span>
            </div>

            {/* 3D Architecture Folder */}
            <div className="folder-wrapper">
              <div className={`folder-icon ${isLoaded ? 'loaded' : ''}`} onClick={handleOpenMermaid} style={{ transitionDelay: '60ms' }}>
                <div className="arch-preview">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <span className={`folder-name ${isLoaded ? 'loaded' : ''}`} style={{ transitionDelay: '120ms' }}>3D Architecture</span>
            </div>
          </div>
        </div>

        <div className="t69-overview-section">
          <p className="t69-overview-text">End-to-end <em>algorithmic trading platform</em> integrating multi-source market intelligence, machine learning, and quantitative risk management.</p>
          <p className="t69-overview-text">Trading system that aggregates data from <em>social sentiment</em>, news APIs, dark pool activity, and market data to generate autonomous trading signals.</p>
          <p className="t69-overview-text">The system employs <em>Hidden Markov Models</em> for market regime detection, Random Forest classifiers for signal prediction, and <em>Kelly Criterion</em> for position sizing. All operating without manual intervention.</p>
        </div>

        <div className="t69-data-section">
          <p className="t69-section-label">Data Collection Layer</p>
          <div className="t69-data-list">
            {dataSourcesData.map((item, index) => (
              <div key={index} className="t69-data-item">
                <span className="t69-data-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="t69-data-source">{item.source}</span>
                <span className="t69-data-desc">{item.data}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="t69-intelligence-section">
          <p className="t69-section-label">Intelligence Layer</p>
          <div className="t69-intelligence-grid">
            {intelligenceSteps.map((item, index) => (
              <div key={index} className="t69-intelligence-item">
                <div className="t69-intelligence-num"><span>{item.num}</span></div>
                <h3 className="t69-intelligence-title">{item.title}</h3>
                <p className="t69-intelligence-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="t69-stack-section">
          <p className="t69-section-label">Technology Stack</p>
          <p className="t69-stack-list">Python · PostgreSQL · TimescaleDB · Redis · scikit-learn · hmmlearn · Dash · Plotly · Alpaca · ThetaData · GPT-4</p>
        </div>

        <nav className="t69-nav">
          <div className="t69-nav-inner">
            <Link href="/work" className="t69-nav-link">← Work</Link>
            <Link href="/work/megaagent" className="t69-nav-link">MegaAgent →</Link>
          </div>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════
          GALLERY OVERLAY - SPHERE CENTERED
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {galleryOpen && (
        <div className={`gallery-overlay ${getAnimClass(galleryAnimState)}`} onClick={handleCloseGallery}>
          <div className="gallery-overlay-bg" />
          <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-item" onClick={() => handleOpenImage(image)}>
                  <div className="gallery-item-thumb">
                    <img src={image.src} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════
          MERMAID 3D EXPANDED - SPHERE CENTERED
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {mermaidOpen && (
        <div className={`mermaid-expanded ${getAnimClass(mermaidAnimState)}`} onClick={handleCloseMermaid}>
          <div className="mermaid-expanded-content" onClick={(e) => e.stopPropagation()}>
            <Trade69Architecture />
          </div>
          <button className="mermaid-expanded-close" onClick={handleCloseMermaid}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* Transition Bridge */}
      <div className={`transition-bridge ${bridgePhase}`}>
        <div className="bridge-spinner" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════
          IMAGE EXPANDED - SPHERE CENTERED
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {expandedImage && (
        <div className={`image-expanded ${getAnimClass(imageAnimState)}`} onClick={handleCloseImage}>
          <div className="image-expanded-inner">
            <div className="image-expanded-content" onClick={(e) => e.stopPropagation()}>
              <img src={expandedImage.src} alt="" />
            </div>
          </div>
          <button className="image-expanded-close" onClick={handleCloseImage}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════
          VIDEO OVERLAY - SPHERE CENTERED
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {videoExpanded && (
        <div className={`video-overlay ${getAnimClass(videoAnimState)}`} onClick={handleCloseVideo}>
          <div className="video-player-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="video-player-container">
              <video
                ref={expandedVideoRef}
                src="/videos/t69demo.mp4"
                loop
                playsInline
                onTimeUpdate={handleVideoTimeUpdate}
                onLoadedMetadata={handleVideoLoaded}
                onClick={handlePlayPause}
              />
              <div className="video-controls">
                <div className="video-progress-bar" onClick={handleSeek}>
                  <div className="video-progress-fill" style={{ width: videoDuration ? `${(videoProgress / videoDuration) * 100}%` : '0%' }} />
                </div>
                <div className="video-controls-row">
                  <div className="video-controls-left">
                    <button className="video-control-btn" onClick={handleSkipBack}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="11 19 2 12 11 5" />
                        <polygon points="22 19 13 12 22 5" />
                      </svg>
                    </button>
                    <button className="video-control-btn play-btn" onClick={handlePlayPause}>
                      {isPlaying ? (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21" />
                        </svg>
                      )}
                    </button>
                    <button className="video-control-btn" onClick={handleSkipForward}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="13 19 22 12 13 5" />
                        <polygon points="2 19 11 12 2 5" />
                      </svg>
                    </button>
                    <span className="video-time">{formatTime(videoProgress)} / {formatTime(videoDuration)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="video-close-btn" onClick={handleCloseVideo}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}