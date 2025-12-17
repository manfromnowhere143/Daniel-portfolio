"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import FadeImage from "@/components/FadeImage";
import Trade69Architecture from "@/components/Trade69Architecture";

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

type AnimState = 'idle' | 'entering' | 'active' | 'exiting';

export default function Trade69() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Overlay states
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoAnim, setVideoAnim] = useState<AnimState>('idle');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryAnim, setGalleryAnim] = useState<AnimState>('idle');
  const [archOpen, setArchOpen] = useState(false);
  const [archAnim, setArchAnim] = useState<AnimState>('idle');
  const [imageOpen, setImageOpen] = useState<string | null>(null);
  const [imageAnim, setImageAnim] = useState<AnimState>('idle');

  // Video state
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const bigVideoRef = useRef<HTMLVideoElement>(null);
  const savedTime = useRef(0);
  const controlsTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // SCROLL LOCK
  useEffect(() => {
    const open = videoAnim !== 'idle' || galleryAnim !== 'idle' || archAnim !== 'idle' || imageAnim !== 'idle';
    document.body.style.overflow = open ? 'hidden' : '';
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [videoAnim, galleryAnim, archAnim, imageAnim]);

  // AUTO-HIDE CONTROLS
  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  // VIDEO
  const openVideo = useCallback(() => {
    if (videoAnim !== 'idle') return;
    if (videoRef.current) {
      savedTime.current = videoRef.current.currentTime;
      videoRef.current.pause();
    }
    setVideoOpen(true);
    setVideoAnim('entering');
    requestAnimationFrame(() => requestAnimationFrame(() => setVideoAnim('active')));
  }, [videoAnim]);

  useEffect(() => {
    if (videoAnim === 'active' && bigVideoRef.current) {
      bigVideoRef.current.currentTime = savedTime.current;
      bigVideoRef.current.play().catch(() => {});
      setPlaying(true);
      resetControlsTimer();
    }
  }, [videoAnim, resetControlsTimer]);

  const closeVideo = useCallback(() => {
    if (videoAnim !== 'active') return;
    if (bigVideoRef.current) {
      savedTime.current = bigVideoRef.current.currentTime;
      bigVideoRef.current.pause();
    }
    setVideoAnim('exiting');
    setTimeout(() => {
      setVideoOpen(false);
      setVideoAnim('idle');
      if (videoRef.current) {
        videoRef.current.currentTime = savedTime.current;
        videoRef.current.play().catch(() => {});
      }
    }, 400);
  }, [videoAnim]);

  const togglePlay = useCallback(() => {
    if (!bigVideoRef.current) return;
    if (playing) bigVideoRef.current.pause();
    else bigVideoRef.current.play().catch(() => {});
    setPlaying(!playing);
    resetControlsTimer();
  }, [playing, resetControlsTimer]);

  const skip = useCallback((seconds: number) => {
    if (!bigVideoRef.current) return;
    bigVideoRef.current.currentTime = Math.max(0, Math.min(duration, bigVideoRef.current.currentTime + seconds));
    resetControlsTimer();
  }, [duration, resetControlsTimer]);

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!bigVideoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    bigVideoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
    resetControlsTimer();
  }, [duration, resetControlsTimer]);

  const fmt = (t: number) => `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, '0')}`;

  // GALLERY
  const openGallery = useCallback(() => {
    if (galleryAnim !== 'idle') return;
    setGalleryOpen(true);
    setGalleryAnim('entering');
    requestAnimationFrame(() => requestAnimationFrame(() => setGalleryAnim('active')));
  }, [galleryAnim]);

  const closeGallery = useCallback(() => {
    if (galleryAnim !== 'active') return;
    setGalleryAnim('exiting');
    setTimeout(() => { setGalleryOpen(false); setGalleryAnim('idle'); }, 350);
  }, [galleryAnim]);

  // ARCH
  const openArch = useCallback(() => {
    if (archAnim !== 'idle') return;
    setArchOpen(true);
    setArchAnim('entering');
    requestAnimationFrame(() => requestAnimationFrame(() => setArchAnim('active')));
  }, [archAnim]);

  const closeArch = useCallback(() => {
    if (archAnim !== 'active') return;
    setArchAnim('exiting');
    setTimeout(() => { setArchOpen(false); setArchAnim('idle'); }, 350);
  }, [archAnim]);

  // IMAGE
  const openImage = useCallback((src: string) => {
    if (imageAnim !== 'idle') return;
    if (galleryAnim === 'active') {
      setGalleryAnim('exiting');
      setTimeout(() => {
        setGalleryOpen(false);
        setGalleryAnim('idle');
        setImageOpen(src);
        setImageAnim('entering');
        requestAnimationFrame(() => requestAnimationFrame(() => setImageAnim('active')));
      }, 350);
    } else {
      setImageOpen(src);
      setImageAnim('entering');
      requestAnimationFrame(() => requestAnimationFrame(() => setImageAnim('active')));
    }
  }, [imageAnim, galleryAnim]);

  const closeImage = useCallback(() => {
    if (imageAnim !== 'active') return;
    setImageAnim('exiting');
    setTimeout(() => { setImageOpen(null); setImageAnim('idle'); }, 350);
  }, [imageAnim]);

  return (
    <>
      <style>{`
        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        
        .page { min-height: 100vh; background: #050506; padding-top: 60px; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif; }

        /* HERO */
        .hero { max-width: 1200px; margin: 0 auto; padding: 20px 20px 16px; text-align: center; opacity: 0; transform: translateY(20px); transition: all 0.8s ease; }
        .hero.on { opacity: 1; transform: translateY(0); }
        .hero-img { max-width: clamp(260px, 65vw, 500px); margin: 0 auto; border-radius: 14px; overflow: hidden; box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.7); }

        /* VIDEO */
        .vid-section { max-width: 700px; margin: 0 auto; padding: 0 20px 20px; }
        .vid-wrap { position: relative; border-radius: 14px; overflow: hidden; background: #000; box-shadow: 0 30px 80px rgba(0,0,0,0.6); }
        .vid-wrap video { width: 100%; display: block; }
        .vid-expand { position: absolute; bottom: 12px; right: 12px; width: 40px; height: 40px; border-radius: 50%; background: rgba(0,0,0,0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0; transform: scale(0.9); transition: all 0.3s ease; }
        .vid-wrap:hover .vid-expand { opacity: 1; transform: scale(1); }
        .vid-expand svg { width: 16px; height: 16px; color: white; }

        /* FOLDERS */
        .folders { max-width: 600px; margin: 0 auto; padding: 16px 20px 32px; display: flex; justify-content: center; gap: clamp(40px, 10vw, 80px); }
        .folder { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .folder-btn { width: 90px; height: 90px; border-radius: 22px; background: rgba(50,50,55,0.6); backdrop-filter: blur(30px); display: flex; align-items: center; justify-content: center; cursor: pointer; position: relative; overflow: hidden; opacity: 0; transform: scale(0.85) translateY(12px); transition: all 0.5s cubic-bezier(0.34,1.56,0.64,1); box-shadow: 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.15); border: none; }
        .folder-btn::before { content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 50%; background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%); border-radius: 22px 22px 50% 50%; }
        .folder-btn.on { opacity: 1; transform: scale(1) translateY(0); }
        .folder-btn:active { transform: scale(0.95); }
        .folder-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; width: 66px; height: 66px; }
        .folder-thumb { width: 30px; height: 30px; border-radius: 7px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.4); }
        .folder-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .arch-ico { width: 66px; height: 66px; display: flex; align-items: center; justify-content: center; }
        .arch-ico svg { width: 42px; height: 42px; color: rgba(255,255,255,0.9); }
        .folder-label { font-size: 11px; font-weight: 500; color: #fff; opacity: 0; transform: translateY(6px); transition: all 0.4s ease 0.1s; text-shadow: 0 1px 4px rgba(0,0,0,0.8); }
        .folder-label.on { opacity: 1; transform: translateY(0); }

        /* ═══════════════════════════════════════════════════════════════════════════════
           OVERLAY - LOCKED PAGE, CONTENT POSITIONED HIGH (matching Creative sphere)
           padding-top: clamp(80px, 12vh, 140px) - same as Creative page
           ═══════════════════════════════════════════════════════════════════════════════ */
        .overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: clamp(80px, 12vh, 140px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
          overflow: hidden;
        }
        .overlay.entering { visibility: visible; pointer-events: auto; }
        .overlay.active { opacity: 1; visibility: visible; pointer-events: auto; transition: opacity 0.4s ease; }
        .overlay.exiting { opacity: 0; visibility: visible; pointer-events: none; transition: opacity 0.35s ease; }

        .overlay-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: scale(0.92) translateY(20px);
        }
        .overlay.active .overlay-inner {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition: opacity 0.4s ease 0.05s, transform 0.5s cubic-bezier(0.34,1.4,0.64,1) 0.05s;
        }
        .overlay.exiting .overlay-inner {
          opacity: 0;
          transform: scale(0.95) translateY(10px);
          transition: all 0.25s ease;
        }

        .overlay-close {
          margin-top: 36px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.5);
        }
        .overlay.active .overlay-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.35s ease 0.2s, transform 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.2s;
        }
        .overlay-close svg { filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5)); }

        /* ═══════════════════════════════════════════════════════════════════════════════
           NETFLIX-STYLE VIDEO PLAYER - FULLSCREEN CINEMA MODE
           Spreads across entire screen, not sphere proportions
           ═══════════════════════════════════════════════════════════════════════════════ */
        .video-overlay { 
          z-index: 30000; 
          background: #000; 
          padding: 0 !important;
          justify-content: center !important;
        }
        
        .video-overlay .overlay-inner {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .video-theater {
          width: 100%;
          max-width: 100vw;
          max-height: calc(100vh - 100px);
          aspect-ratio: 16/9;
          border-radius: 0;
          overflow: hidden;
          position: relative;
          background: #000;
        }
        @media (min-width: 900px) {
          .video-theater {
            width: 90vw;
            max-width: 1400px;
            border-radius: 12px;
            box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 40px 120px rgba(0,0,0,0.8);
          }
        }
        .video-theater video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        /* Netflix-style controls */
        .video-ui {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .video-ui.hidden { opacity: 0; }
        .video-ui.hidden .video-controls { transform: translateY(20px); }

        .video-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 180px;
          background: linear-gradient(transparent, rgba(0,0,0,0.95));
          pointer-events: none;
        }

        .video-controls {
          position: relative;
          z-index: 2;
          padding: 0 20px 16px;
          transition: transform 0.3s ease;
        }

        /* Progress bar - Netflix style */
        .progress-wrap {
          height: 20px;
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-bottom: 8px;
        }
        .progress-bar {
          width: 100%;
          height: 3px;
          background: rgba(255,255,255,0.25);
          border-radius: 2px;
          position: relative;
          transition: height 0.15s ease;
        }
        .progress-wrap:hover .progress-bar { height: 5px; }
        .progress-fill {
          height: 100%;
          background: #e50914;
          border-radius: 2px;
          position: relative;
        }
        .progress-fill::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%) scale(0);
          width: 12px;
          height: 12px;
          background: #e50914;
          border-radius: 50%;
          transition: transform 0.15s ease;
        }
        .progress-wrap:hover .progress-fill::after { transform: translateY(-50%) scale(1); }

        /* Control buttons */
        .controls-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .ctrl-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }
        .ctrl-btn:hover { background: rgba(255,255,255,0.1); transform: scale(1.1); }
        .ctrl-btn:active { transform: scale(0.95); }
        .ctrl-btn svg { color: white; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5)); }

        /* Skip buttons with time indicator */
        .skip-btn { position: relative; }
        .skip-btn svg { width: 28px; height: 28px; }
        .skip-time {
          position: absolute;
          font-size: 9px;
          font-weight: 700;
          color: white;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* Play button - larger */
        .play-btn svg { width: 32px; height: 32px; }

        /* Time display */
        .time-display {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-variant-numeric: tabular-nums;
          margin-left: auto;
        }

        /* Center play indicator (tap to play/pause) */
        .center-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }
        .center-play.show { opacity: 1; }
        .center-play svg { width: 36px; height: 36px; color: white; margin-left: 4px; }

        /* GALLERY */
        .gallery-overlay { background: rgba(0,0,0,0.9); backdrop-filter: blur(40px); }
        .gallery-card {
          width: calc(100vw - 48px);
          max-width: 380px;
          background: rgba(255,255,255,0.98);
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 0 80px rgba(255,255,255,0.08), 0 40px 100px rgba(0,0,0,0.5);
        }
        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .gallery-item {
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8) translateY(12px);
        }
        .overlay.active .gallery-item {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .overlay.active .gallery-item:nth-child(1) { transition-delay: 0.03s; }
        .overlay.active .gallery-item:nth-child(2) { transition-delay: 0.06s; }
        .overlay.active .gallery-item:nth-child(3) { transition-delay: 0.09s; }
        .overlay.active .gallery-item:nth-child(4) { transition-delay: 0.12s; }
        .overlay.active .gallery-item:nth-child(5) { transition-delay: 0.15s; }
        .overlay.active .gallery-item:nth-child(6) { transition-delay: 0.18s; }
        .overlay.active .gallery-item:nth-child(7) { transition-delay: 0.21s; }
        .gallery-thumb {
          aspect-ratio: 1;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          transition: transform 0.2s ease;
        }
        .gallery-item:active .gallery-thumb { transform: scale(0.92); }
        .gallery-thumb img { width: 100%; height: 100%; object-fit: cover; }

        /* ARCHITECTURE */
        .arch-frame {
          width: calc(100vw - 40px);
          max-width: 400px;
          aspect-ratio: 1;
          border-radius: 24px;
          background: rgba(12,12,16,0.98);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px rgba(255,255,255,0.03), 0 40px 100px rgba(0,0,0,0.5);
        }

        /* IMAGE */
        .image-overlay { z-index: 20000; }
        .image-frame {
          width: calc(100vw - 40px);
          max-width: 500px;
          max-height: calc(100vh - 200px);
          border-radius: 16px;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.6);
        }
        .image-frame img { max-width: 100%; max-height: 100%; object-fit: contain; }

        /* CONTENT SECTIONS */
        .section-label { font-size: 9px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; opacity: 0.5; text-align: center; margin-bottom: 16px; }
        .overview { max-width: 640px; margin: 0 auto; padding: 20px 20px 28px; }
        .overview p { font-size: clamp(15px, 2vw, 18px); font-weight: 300; color: #fff; line-height: 1.75; margin-bottom: 14px; }
        .overview p:last-child { margin-bottom: 0; }
        .overview em { font-style: normal; font-weight: 500; }
        .data-section { max-width: 680px; margin: 0 auto; padding: 20px; }
        .data-item { display: grid; grid-template-columns: 24px 1fr 2fr; gap: clamp(8px, 1.5vw, 16px); align-items: baseline; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .data-item:last-child { border-bottom: none; }
        .data-num { font-size: 9px; font-weight: 500; color: #fff; opacity: 0.4; font-family: 'SF Mono', monospace; }
        .data-source { font-size: clamp(12px, 1.5vw, 14px); font-weight: 500; color: #fff; }
        .data-desc { font-size: clamp(11px, 1.3vw, 13px); color: #fff; opacity: 0.7; line-height: 1.5; }
        @media (max-width: 600px) { .data-item { grid-template-columns: 22px 1fr; } .data-desc { grid-column: 2; margin-top: 3px; } }
        .intelligence { max-width: 860px; margin: 0 auto; padding: 28px 20px; }
        .intelligence-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: clamp(24px, 4vw, 40px); }
        .intelligence-item { text-align: center; }
        .intelligence-num { width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; background: rgba(255,255,255,0.03); }
        .intelligence-num span { font-size: 11px; color: #fff; opacity: 0.7; font-family: 'SF Mono', monospace; }
        .intelligence-title { font-size: clamp(13px, 1.5vw, 15px); font-weight: 500; color: #fff; margin-bottom: 8px; }
        .intelligence-desc { font-size: 12px; color: #fff; opacity: 0.7; line-height: 1.6; max-width: 220px; margin: 0 auto; }
        .stack { max-width: 660px; margin: 0 auto; padding: 28px 20px; text-align: center; }
        .stack p { font-size: clamp(11px, 1.3vw, 13px); color: #fff; opacity: 0.6; line-height: 2; }
        .nav { border-top: 1px solid rgba(255,255,255,0.06); padding: 24px 20px; }
        .nav-inner { max-width: 860px; margin: 0 auto; display: flex; justify-content: space-between; }
        .nav a { font-size: 10px; font-weight: 500; color: #fff; opacity: 0.5; text-decoration: none; letter-spacing: 0.1em; text-transform: uppercase; transition: opacity 0.3s ease; }
        .nav a:hover { opacity: 1; }

        /* RESPONSIVE */
        @media (min-width: 600px) {
          .folder-btn { width: 110px; height: 110px; border-radius: 26px; }
          .folder-grid { width: 82px; height: 82px; gap: 5px; }
          .folder-thumb { width: 38px; height: 38px; border-radius: 9px; }
          .arch-ico { width: 82px; height: 82px; }
          .arch-ico svg { width: 50px; height: 50px; }
          .folder-label { font-size: 12px; }
          .gallery-card { max-width: 440px; padding: 28px; }
          .arch-frame { max-width: 440px; }
          .image-frame { max-width: 600px; }
        }
        @media (min-width: 900px) {
          .folder-btn { width: 130px; height: 130px; border-radius: 30px; }
          .folder-grid { width: 98px; height: 98px; gap: 6px; }
          .folder-thumb { width: 45px; height: 45px; border-radius: 11px; }
          .arch-ico { width: 98px; height: 98px; }
          .arch-ico svg { width: 58px; height: 58px; }
          .folder-label { font-size: 13px; }
          .gallery-card { max-width: 500px; padding: 32px; }
          .arch-frame { max-width: 500px; }
          .image-frame { max-width: 700px; }
        }
      `}</style>

      <div className="page">
        <div className={`hero ${isLoaded ? 'on' : ''}`}>
          <div className="hero-img">
            <FadeImage src="/images/t69hero4.png" alt="Trade69" width={640} height={420} priority />
          </div>
        </div>

        <div className="vid-section">
          <div className="vid-wrap">
            <video ref={videoRef} src="/videos/t69demo.mp4" autoPlay muted loop playsInline />
            <button className="vid-expand" onClick={openVideo}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
          </div>
        </div>

        <div className="folders">
          <div className="folder">
            <button className={`folder-btn ${isLoaded ? 'on' : ''}`} onClick={openGallery}>
              <div className="folder-grid">
                {galleryImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="folder-thumb"><img src={img.src} alt="" /></div>
                ))}
              </div>
            </button>
            <span className={`folder-label ${isLoaded ? 'on' : ''}`}>Screenshots</span>
          </div>
          <div className="folder">
            <button className={`folder-btn ${isLoaded ? 'on' : ''}`} onClick={openArch} style={{ transitionDelay: '80ms' }}>
              <div className="arch-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
            </button>
            <span className={`folder-label ${isLoaded ? 'on' : ''}`} style={{ transitionDelay: '140ms' }}>Architecture</span>
          </div>
        </div>

        <div className="overview">
          <p>End-to-end <em>algorithmic trading platform</em> integrating multi-source market intelligence, machine learning, and quantitative risk management.</p>
          <p>Trading system that aggregates data from <em>social sentiment</em>, news APIs, dark pool activity, and market data to generate autonomous trading signals.</p>
          <p>The system employs <em>Hidden Markov Models</em> for market regime detection, Random Forest classifiers for signal prediction, and <em>Kelly Criterion</em> for position sizing.</p>
        </div>

        <div className="data-section">
          <p className="section-label">Data Collection Layer</p>
          {dataSourcesData.map((item, i) => (
            <div key={i} className="data-item">
              <span className="data-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="data-source">{item.source}</span>
              <span className="data-desc">{item.data}</span>
            </div>
          ))}
        </div>

        <div className="intelligence">
          <p className="section-label">Intelligence Layer</p>
          <div className="intelligence-grid">
            {intelligenceSteps.map((item, i) => (
              <div key={i} className="intelligence-item">
                <div className="intelligence-num"><span>{item.num}</span></div>
                <h3 className="intelligence-title">{item.title}</h3>
                <p className="intelligence-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stack">
          <p className="section-label">Technology Stack</p>
          <p>Python · PostgreSQL · TimescaleDB · Redis · scikit-learn · hmmlearn · Dash · Plotly · Alpaca · ThetaData · GPT-4</p>
        </div>

        <nav className="nav">
          <div className="nav-inner">
            <Link href="/work">← Work</Link>
            <Link href="/work/megaagent">MegaAgent →</Link>
          </div>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════
          VIDEO OVERLAY - NETFLIX STYLE
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {videoOpen && (
        <div
          className={`overlay video-overlay ${videoAnim}`}
          onClick={closeVideo}
          onMouseMove={resetControlsTimer}
          onTouchStart={resetControlsTimer}
        >
          <div className="overlay-inner" onClick={e => e.stopPropagation()}>
            <div className="video-theater">
              <video
                ref={bigVideoRef}
                src="/videos/t69demo.mp4"
                loop
                playsInline
                onClick={togglePlay}
                onTimeUpdate={() => bigVideoRef.current && setProgress(bigVideoRef.current.currentTime)}
                onLoadedMetadata={() => bigVideoRef.current && setDuration(bigVideoRef.current.duration)}
              />

              {/* Center play indicator */}
              <div className={`center-play ${!playing ? 'show' : ''}`}>
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21" /></svg>
              </div>

              {/* Controls overlay */}
              <div className={`video-ui ${showControls ? '' : 'hidden'}`} onClick={e => e.stopPropagation()}>
                <div className="video-gradient" />
                <div className="video-controls">
                  {/* Progress bar */}
                  <div className="progress-wrap" onClick={seek}>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: duration ? `${(progress / duration) * 100}%` : '0%' }} />
                    </div>
                  </div>

                  {/* Control buttons */}
                  <div className="controls-row">
                    {/* Skip back */}
                    <button className="ctrl-btn skip-btn" onClick={() => skip(-10)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
                        <polyline points="3 12 1 14" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="3 12 5 14" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="skip-time">10</span>
                    </button>

                    {/* Play/Pause */}
                    <button className="ctrl-btn play-btn" onClick={togglePlay}>
                      {playing ? (
                        <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21" /></svg>
                      )}
                    </button>

                    {/* Skip forward */}
                    <button className="ctrl-btn skip-btn" onClick={() => skip(10)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3a9 9 0 1 1 -9 9" strokeLinecap="round" />
                        <polyline points="21 12 23 14" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="21 12 19 14" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="skip-time">10</span>
                    </button>

                    {/* Time */}
                    <span className="time-display">{fmt(progress)} / {fmt(duration)}</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="overlay-close" onClick={closeVideo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* GALLERY */}
      {galleryOpen && (
        <div className={`overlay gallery-overlay ${galleryAnim}`} onClick={closeGallery}>
          <div className="overlay-inner" onClick={e => e.stopPropagation()}>
            <div className="gallery-card">
              <div className="gallery-grid">
                {galleryImages.map((img, i) => (
                  <div key={i} className="gallery-item" onClick={() => openImage(img.src)}>
                    <div className="gallery-thumb"><img src={img.src} alt="" /></div>
                  </div>
                ))}
              </div>
            </div>
            <button className="overlay-close" onClick={closeGallery}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ARCHITECTURE */}
      {archOpen && (
        <div className={`overlay ${archAnim}`} onClick={closeArch}>
          <div className="overlay-inner" onClick={e => e.stopPropagation()}>
            <div className="arch-frame">
              <Trade69Architecture />
            </div>
            <button className="overlay-close" onClick={closeArch}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* IMAGE */}
      {imageOpen && (
        <div className={`overlay image-overlay ${imageAnim}`} onClick={closeImage}>
          <div className="overlay-inner" onClick={e => e.stopPropagation()}>
            <div className="image-frame">
              <img src={imageOpen} alt="" />
            </div>
            <button className="overlay-close" onClick={closeImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}