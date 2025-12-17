"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import FadeImage from "@/components/FadeImage";
import Trade69Architecture from "@/components/Trade69Architecture";

// ═══════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - TRADE69 PAGE
// Premium iOS-style gallery with glassmorphism and smooth transitions
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
// STATE OF THE ART - GLOBAL CLEANUP FUNCTION
// ═══════════════════════════════════════════════════════════════════════════════
const restoreScroll = () => {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  if ((window as any).__t69Cleanup) {
    (window as any).__t69Cleanup();
    delete (window as any).__t69Cleanup;
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

  // Gallery folder states (iOS-style)
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryAnimState, setGalleryAnimState] = useState<AnimationState>('idle');

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
      if (imageTimeoutRef.current) clearTimeout(imageTimeoutRef.current);
      if (bridgeTimeoutRef.current) clearTimeout(bridgeTimeoutRef.current);
      restoreScroll();
    };
  }, []);

  useEffect(() => {
    const isOpen = videoAnimState !== 'idle' || galleryAnimState !== 'idle' ||
                   imageAnimState !== 'idle' || bridgePhase !== 'idle';

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const blockAllTouch = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.video-player-container')) return;
        if (target.closest('.image-expanded-content')) return;
        if (target.closest('.gallery-container')) return;
        e.preventDefault();
        e.stopPropagation();
      };

      const blockWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.video-player-container')) return;
        if (target.closest('.image-expanded-content')) return;
        if (target.closest('.gallery-container')) return;
        e.preventDefault();
        e.stopPropagation();
      };

      document.addEventListener('touchmove', blockAllTouch, { passive: false, capture: true });
      document.addEventListener('wheel', blockWheel, { passive: false, capture: true });

      (window as any).__t69Cleanup = () => {
        document.removeEventListener('touchmove', blockAllTouch, { capture: true } as any);
        document.removeEventListener('wheel', blockWheel, { capture: true } as any);
      };

    } else {
      restoreScroll();
    }

    return () => {
      if ((window as any).__t69Cleanup) {
        (window as any).__t69Cleanup();
      }
    };
  }, [videoAnimState, galleryAnimState, imageAnimState, bridgePhase]);

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
  // GALLERY HANDLERS (iOS-style folder)
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
  // IMAGE EXPANSION HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleOpenImage = useCallback((image: { src: string }) => {
    if (imageAnimState !== 'idle' || bridgePhase !== 'idle') return;

    const isAlreadyLoaded = loadedImagesRef.current.has(image.src);

    if (isAlreadyLoaded) {
      // Close gallery first, then show image
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

      // Close gallery
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

  // ═══════════════════════════════════════════════════════════════════════════════
  // ANIMATION CLASS HELPERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const getVideoAnimClass = () => videoAnimState === 'idle' ? '' : videoAnimState;
  const getGalleryAnimClass = () => galleryAnimState === 'idle' ? '' : galleryAnimState;
  const getImageAnimClass = () => imageAnimState === 'idle' ? '' : imageAnimState;

  return (
    <>
      <style>{`
        * { -webkit-tap-highlight-color: transparent; }
        
        .t69-page {
          padding-top: 60px;
          min-height: 100vh;
          background-color: #050506;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }
        
        .t69-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(40px, 8vh, 80px) 24px clamp(50px, 8vh, 80px);
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
          max-width: clamp(320px, 80vw, 640px);
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 50px 120px rgba(0, 0, 0, 0.7), 0 25px 60px rgba(0, 0, 0, 0.5);
        }
        
        .t69-video-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px clamp(80px, 12vh, 120px);
        }
        
        .t69-video-container {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 40px 100px rgba(0, 0, 0, 0.6);
          background: #000;
        }
        
        .t69-video-container video {
          width: 100%;
          display: block;
        }
        
        .t69-video-expand-btn {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 44px;
          height: 44px;
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
          width: 18px;
          height: 18px;
          color: white;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           STATE OF THE ART - iOS-STYLE GALLERY FOLDER BUTTON
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-gallery-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px clamp(100px, 15vh, 150px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .t69-section-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(250, 250, 248, 0.35);
          text-align: center;
          margin-bottom: clamp(24px, 4vh, 36px);
        }
        
        .gallery-folder-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        .gallery-folder-icon {
          position: relative;
          width: 115px;
          height: 115px;
          border-radius: 28px;
          background: rgba(40, 40, 45, 0.65);
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(15px);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, opacity 0.5s ease;
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.08),
            0 0 40px rgba(0, 0, 0, 0.5),
            0 8px 32px rgba(0, 0, 0, 0.6),
            0 2px 8px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.04);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .gallery-folder-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 100%);
          border-radius: 28px 28px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .gallery-folder-icon.loaded {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
        }
        
        .gallery-folder-icon:active {
          transform: translateZ(0) scale(0.95) translateY(0);
        }
        
        .gallery-folder-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 5px;
          width: 88px;
          height: 88px;
          position: relative;
          z-index: 5;
        }
        
        .gallery-mini-thumb {
          width: 41px;
          height: 41px;
          border-radius: 9px;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 0 15px rgba(0, 0, 0, 0.3),
            0 4px 12px rgba(0, 0, 0, 0.5),
            0 1px 3px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3);
        }
        
        .gallery-mini-thumb::before {
          content: '';
          position: absolute;
          top: 0;
          left: 5%;
          right: 5%;
          height: 40%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
          border-radius: 9px 9px 50% 50%;
          pointer-events: none;
          z-index: 5;
        }
        
        .gallery-mini-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .gallery-folder-name {
          font-size: 12px;
          font-weight: 400;
          color: #FAFAF8;
          letter-spacing: 0.02em;
          text-align: center;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
        }
        
        .gallery-folder-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           STATE OF THE ART - GALLERY OVERLAY (iOS-style folder expansion)
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .gallery-overlay {
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
        
        .gallery-overlay.entering { visibility: visible; pointer-events: auto; opacity: 0; }
        .gallery-overlay.active { visibility: visible; pointer-events: auto; opacity: 1; transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
        .gallery-overlay.exiting { visibility: visible; pointer-events: none; opacity: 0; transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        
        .gallery-overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(8, 8, 10, 0.75);
          backdrop-filter: blur(50px) saturate(150%);
          -webkit-backdrop-filter: blur(50px) saturate(150%);
          touch-action: none;
        }
        
        .gallery-container {
          position: relative;
          z-index: 2;
          background: rgba(250, 250, 248, 0.97);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 28px;
          padding: 20px;
          opacity: 0;
          transform: translateZ(0);
          transition: none;
          box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.1),
            0 25px 80px rgba(0, 0, 0, 0.5),
            0 10px 30px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.9);
          touch-action: manipulation;
          max-width: calc(100vw - 48px);
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
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          touch-action: manipulation;
        }
        
        .gallery-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          opacity: 0;
          transform: translateZ(0) scale(0.7) translateY(12px);
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
          width: 70px;
          height: 70px;
          border-radius: 15px;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 0 20px rgba(0, 0, 0, 0.15),
            0 6px 20px rgba(0, 0, 0, 0.45),
            0 12px 40px rgba(0, 0, 0, 0.25),
            inset 0 1px 1px rgba(255, 255, 255, 0.25),
            inset 0 -1px 1px rgba(0, 0, 0, 0.25);
        }
        
        .gallery-item-thumb::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 35%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
          border-radius: 15px 15px 50% 50%;
          pointer-events: none;
          z-index: 10;
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
           STATE OF THE ART - IMAGE EXPANDED VIEW
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .image-expanded {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #050506;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
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
          max-width: 100%;
          max-height: 100%;
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
          max-width: min(90vw, 800px);
          max-height: 70vh;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.06)) drop-shadow(0 30px 80px rgba(0, 0, 0, 0.8));
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
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 16px;
        }
        
        .image-expanded-close {
          margin-top: 32px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          touch-action: manipulation;
          z-index: 10;
          opacity: 0;
          transform: scale(0.5);
          transition: none;
        }
        
        .image-expanded.active .image-expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) 0.2s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }
        
        .image-expanded.exiting .image-expanded-close {
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .image-expanded-close:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        
        .image-expanded-close:active {
          transform: scale(0.9);
        }
        
        .image-expanded-close svg {
          filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6));
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           TRANSITION BRIDGE
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .transition-bridge {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #050506;
          z-index: 2500;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
          border: 2px solid rgba(255, 255, 255, 0.08);
          border-top-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: bridgeSpin 0.9s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
        }
        
        @keyframes bridgeSpin {
          to { transform: rotate(360deg); }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           VIDEO OVERLAY
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .video-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          opacity: 0;
          visibility: hidden;
        }
        
        .video-overlay.entering { visibility: visible; opacity: 0; }
        .video-overlay.active { visibility: visible; opacity: 1; transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .video-overlay.exiting { visibility: visible; opacity: 0; transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
        
        .video-player-wrapper {
          width: 100%;
          max-width: 1000px;
          padding: 0 24px;
          opacity: 0;
          transform: scale(0.94);
        }
        
        .video-overlay.active .video-player-wrapper {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.08s, transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.08s;
        }
        
        .video-overlay.exiting .video-player-wrapper {
          opacity: 0;
          transform: scale(0.96);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .video-player-container {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 60px 180px rgba(0, 0, 0, 0.9);
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
          padding: 24px 20px 18px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .video-progress-bar {
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 3px;
          cursor: pointer;
          overflow: hidden;
        }
        
        .video-progress-fill {
          height: 100%;
          background: #FFFFFF;
          border-radius: 3px;
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
          gap: 12px;
        }
        
        .video-control-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        
        .video-control-btn:hover { background: rgba(255, 255, 255, 0.15); }
        .video-control-btn:active { transform: scale(0.92); }
        .video-control-btn svg { width: 20px; height: 20px; color: white; }
        .video-control-btn.play-btn svg { width: 26px; height: 26px; }
        
        .video-time {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'SF Mono', Monaco, monospace;
          letter-spacing: 0.02em;
          margin-left: 8px;
        }
        
        .video-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          z-index: 10;
        }
        
        .video-overlay.active .video-close-btn {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.35s ease 0.2s, transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s;
        }
        
        .video-overlay.exiting .video-close-btn {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .video-close-btn:hover { background: rgba(255, 255, 255, 0.15); }
        .video-close-btn svg { width: 22px; height: 22px; color: white; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           OTHER SECTIONS
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-architecture-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px clamp(100px, 15vh, 150px);
        }
        
        .t69-overview-section {
          max-width: 720px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px clamp(100px, 15vh, 150px);
        }
        
        .t69-overview-text {
          font-size: clamp(17px, 2.4vw, 22px);
          font-weight: 300;
          color: rgba(250, 250, 248, 0.75);
          line-height: 1.85;
          margin-bottom: clamp(24px, 4vh, 36px);
        }
        
        .t69-overview-text:last-child { margin-bottom: 0; }
        .t69-overview-text em { font-style: normal; color: #FAFAF8; font-weight: 400; }
        
        .t69-data-section {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
        }
        
        .t69-data-list {
          display: flex;
          flex-direction: column;
        }
        
        .t69-data-item {
          display: grid;
          grid-template-columns: 32px 1fr 2fr;
          gap: clamp(12px, 2vw, 24px);
          align-items: baseline;
          padding: clamp(16px, 2.5vh, 24px) 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        
        .t69-data-item:last-child { border-bottom: none; }
        
        .t69-data-num {
          font-size: 10px;
          font-weight: 400;
          color: rgba(250, 250, 248, 0.2);
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
        }
        
        .t69-data-source {
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 400;
          color: rgba(250, 250, 248, 0.85);
          letter-spacing: 0.01em;
        }
        
        .t69-data-desc {
          font-size: clamp(13px, 1.5vw, 15px);
          font-weight: 300;
          color: rgba(250, 250, 248, 0.45);
          line-height: 1.6;
        }
        
        @media (max-width: 600px) {
          .t69-data-item {
            grid-template-columns: 28px 1fr;
            grid-template-rows: auto auto;
          }
          .t69-data-desc {
            grid-column: 2;
            margin-top: 6px;
          }
        }
        
        .t69-intelligence-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(80px, 12vh, 140px) 24px;
        }
        
        .t69-intelligence-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: clamp(48px, 7vw, 72px);
        }
        
        .t69-intelligence-item {
          text-align: center;
        }
        
        .t69-intelligence-num {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto clamp(20px, 3vh, 28px);
          background: rgba(255, 255, 255, 0.02);
        }
        
        .t69-intelligence-num span {
          font-size: 13px;
          font-weight: 300;
          color: rgba(250, 250, 248, 0.5);
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
        }
        
        .t69-intelligence-title {
          font-size: clamp(15px, 1.8vw, 17px);
          font-weight: 400;
          color: #FAFAF8;
          margin-bottom: 12px;
          letter-spacing: 0.01em;
        }
        
        .t69-intelligence-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(250, 250, 248, 0.45);
          line-height: 1.75;
          max-width: 260px;
          margin: 0 auto;
        }
        
        .t69-stack-section {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(80px, 12vh, 120px) 24px;
          text-align: center;
        }
        
        .t69-stack-list {
          font-size: clamp(13px, 1.5vw, 15px);
          font-weight: 300;
          color: rgba(250, 250, 248, 0.4);
          line-height: 2.4;
          letter-spacing: 0.04em;
        }
        
        .t69-nav {
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding: clamp(48px, 8vh, 72px) 24px;
        }
        
        .t69-nav-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .t69-nav-link {
          font-size: 12px;
          font-weight: 300;
          color: rgba(250, 250, 248, 0.4);
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        
        .t69-nav-link:hover { color: #FAFAF8; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════
           RESPONSIVE
           ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .gallery-folder-icon { width: 145px; height: 145px; border-radius: 32px; }
          .gallery-folder-preview { width: 115px; height: 115px; gap: 6px; }
          .gallery-mini-thumb { width: 54px; height: 54px; border-radius: 11px; }
          .gallery-folder-name { font-size: 13px; }
          .gallery-container { padding: 24px; border-radius: 30px; }
          .gallery-grid { gap: 16px; }
          .gallery-item-thumb { width: 85px; height: 85px; border-radius: 18px; }
          .image-expanded-content { border-radius: 20px; }
          .image-expanded-content img { border-radius: 20px; }
        }
        
        @media (min-width: 900px) {
          .gallery-folder-icon { width: 175px; height: 175px; border-radius: 38px; }
          .gallery-folder-preview { width: 140px; height: 140px; gap: 7px; }
          .gallery-mini-thumb { width: 66px; height: 66px; border-radius: 13px; }
          .gallery-folder-name { font-size: 14px; }
          .gallery-container { padding: 28px; }
          .gallery-grid { gap: 18px; }
          .gallery-item-thumb { width: 100px; height: 100px; border-radius: 20px; }
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
            STATE OF THE ART - iOS-STYLE GALLERY FOLDER
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <div className="t69-gallery-section">
          <p className="t69-section-label">Dashboard Gallery</p>
          <div className="gallery-folder-wrapper">
            <div
              className={`gallery-folder-icon ${isLoaded ? 'loaded' : ''}`}
              onClick={handleOpenGallery}
            >
              <div className="gallery-folder-preview">
                {galleryImages.slice(0, 4).map((image, index) => (
                  <div key={index} className="gallery-mini-thumb">
                    <img src={image.src} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <span className={`gallery-folder-name ${isLoaded ? 'loaded' : ''}`}>Screenshots</span>
          </div>
        </div>

        <div className="t69-architecture-section">
          <Trade69Architecture />
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
          STATE OF THE ART - GALLERY OVERLAY
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {galleryOpen && (
        <div className={`gallery-overlay ${getGalleryAnimClass()}`}>
          <div className="gallery-overlay-bg" onClick={handleCloseGallery} />
          <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => handleOpenImage(image)}
                >
                  <div className="gallery-item-thumb">
                    <img src={image.src} alt="" />
                  </div>
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

      {/* ═══════════════════════════════════════════════════════════════════════════════
          STATE OF THE ART - IMAGE EXPANDED VIEW
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {expandedImage && (
        <div className={`image-expanded ${getImageAnimClass()}`} onClick={handleCloseImage}>
          <div className="image-expanded-inner" onClick={(e) => e.stopPropagation()}>
            <div className="image-expanded-content">
              <img src={expandedImage.src} alt="" />
            </div>
            <button className="image-expanded-close" onClick={handleCloseImage}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════
          VIDEO OVERLAY
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {videoExpanded && (
        <div className={`video-overlay ${getVideoAnimClass()}`} onClick={handleCloseVideo}>
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
                      <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="11 19 2 12 11 5" /><polygon points="22 19 13 12 22 5" /></svg>
                    </button>
                    <button className="video-control-btn play-btn" onClick={handlePlayPause}>
                      {isPlaying ? (
                        <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21" /></svg>
                      )}
                    </button>
                    <button className="video-control-btn" onClick={handleSkipForward}>
                      <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="13 19 22 12 13 5" /><polygon points="2 19 11 12 2 5" /></svg>
                    </button>
                    <span className="video-time">{formatTime(videoProgress)} / {formatTime(videoDuration)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="video-close-btn" onClick={handleCloseVideo}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}