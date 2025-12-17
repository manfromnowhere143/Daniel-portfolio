"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import FadeImage from "@/components/FadeImage";
import Trade69Architecture from "@/components/Trade69Architecture";

const galleryImages = [
  { src: "/images/t69hero4.png", alt: "Trade69 Hero" },
  { src: "/images/t69dash1.png", alt: "Dashboard 1" },
  { src: "/images/t69dash2.png", alt: "Dashboard 2" },
  { src: "/images/t69dash3.png", alt: "Dashboard 3" },
  { src: "/images/t69dash4.png", alt: "Dashboard 4" },
  { src: "/images/tphoto2.png", alt: "Analytics" },
  { src: "/images/tphoto3.png", alt: "Backtesting" },
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
  { num: "04", title: "Risk Management", desc: "Kelly Criterion sizing with sector limits and correlation tracking" },
];

export default function Trade69() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Overlay states
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [archOpen, setArchOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  // Video states
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const bigVideoRef = useRef<HTMLVideoElement>(null);
  const savedTime = useRef(0);
  const controlsTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll lock WITHOUT layout shift
  useEffect(() => {
    const isOpen = galleryOpen || archOpen || imageOpen !== null || videoOpen;

    if (isOpen) {
      // Get scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [galleryOpen, archOpen, imageOpen, videoOpen]);

  // Video controls auto-hide
  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  // Handlers
  const openGallery = useCallback(() => setGalleryOpen(true), []);
  const closeGallery = useCallback(() => setGalleryOpen(false), []);
  const openArch = useCallback(() => setArchOpen(true), []);
  const closeArch = useCallback(() => setArchOpen(false), []);

  const openImage = useCallback((src: string) => {
    setGalleryOpen(false);
    setTimeout(() => setImageOpen(src), 250);
  }, []);
  const closeImage = useCallback(() => setImageOpen(null), []);

  // Video handlers
  const openVideo = useCallback(() => {
    if (videoRef.current) {
      savedTime.current = videoRef.current.currentTime;
      videoRef.current.pause();
    }
    setVideoOpen(true);
    setPlaying(false);
  }, []);

  useEffect(() => {
    if (videoOpen && bigVideoRef.current) {
      bigVideoRef.current.currentTime = savedTime.current;
      bigVideoRef.current.play().catch(() => {});
      setPlaying(true);
      resetControlsTimer();
    }
  }, [videoOpen, resetControlsTimer]);

  const closeVideo = useCallback(() => {
    if (bigVideoRef.current) {
      savedTime.current = bigVideoRef.current.currentTime;
      bigVideoRef.current.pause();
    }
    setVideoOpen(false);
    if (videoRef.current) {
      videoRef.current.currentTime = savedTime.current;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (!bigVideoRef.current) return;
    if (playing) {
      bigVideoRef.current.pause();
    } else {
      bigVideoRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
    resetControlsTimer();
  }, [playing, resetControlsTimer]);

  const skip = useCallback((sec: number) => {
    if (!bigVideoRef.current) return;
    bigVideoRef.current.currentTime = Math.max(0, Math.min(duration, bigVideoRef.current.currentTime + sec));
    resetControlsTimer();
  }, [duration, resetControlsTimer]);

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!bigVideoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    bigVideoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
    resetControlsTimer();
  }, [duration, resetControlsTimer]);

  const fmt = (t: number) => `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, '0')}`;

  return (
    <div className="t69-page">
      <style>{`
        .t69-page {
          min-height: 100vh;
          background: #0A0A0A;
          padding-top: 60px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* HERO */
        .t69-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(20px, 4vh, 40px) 24px clamp(40px, 6vh, 60px);
          text-align: center;
        }
        .t69-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 200;
          color: #FAFAF8;
          margin-bottom: clamp(20px, 3vh, 32px);
          letter-spacing: -0.02em;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }
        .t69-title.on { opacity: 1; transform: translateY(0); }
        .t69-hero-img {
          max-width: clamp(280px, 70vw, 500px);
          margin: 0 auto;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          border: 1px solid #1C1C1C;
          border-radius: 2px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.1s;
        }
        .t69-hero-img.on { opacity: 1; transform: translateY(0); }

        /* FOLDERS */
        .t69-folders {
          max-width: 500px;
          margin: 0 auto;
          padding: clamp(30px, 5vh, 50px) 24px;
          display: flex;
          justify-content: center;
          gap: clamp(50px, 12vw, 100px);
        }
        .t69-folder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .t69-folder-btn {
          width: clamp(80px, 18vw, 120px);
          height: clamp(80px, 18vw, 120px);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(60,60,65,0.8), rgba(40,40,45,0.9));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1);
          opacity: 0;
          transform: scale(0.8) translateY(20px);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .t69-folder-btn.on { opacity: 1; transform: scale(1) translateY(0); }
        .t69-folder-btn:hover { transform: scale(1.05); }
        .t69-folder-btn:active { transform: scale(0.95); }
        .t69-folder-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 45%;
          background: linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%);
          border-radius: 24px 24px 50% 50%;
        }
        .t69-folder-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4px;
          width: 60%;
          height: 60%;
        }
        .t69-folder-thumb {
          border-radius: 6px;
          overflow: hidden;
        }
        .t69-folder-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .t69-folder-icon {
          width: 50%;
          height: 50%;
        }
        .t69-folder-icon svg { width: 100%; height: 100%; color: rgba(255,255,255,0.85); }
        .t69-folder-label {
          font-size: 12px;
          font-weight: 500;
          color: #FAFAF8;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.5s ease 0.2s;
        }
        .t69-folder-label.on { opacity: 0.9; transform: translateY(0); }

        /* SECTION STYLES */
        .t69-section-title {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #FAFAF8;
          opacity: 0.6;
          margin-bottom: clamp(24px, 4vh, 32px);
          text-align: center;
        }

        /* ARCHITECTURE SECTION */
        .t69-arch-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
        }
        .t69-arch-intro {
          font-size: clamp(14px, 1.8vw, 15px);
          color: #FAFAF8;
          line-height: 1.8;
          font-weight: 200;
          max-width: 600px;
          margin: 0 auto clamp(32px, 5vh, 40px);
          text-align: center;
        }

        /* VIDEO SECTION */
        .t69-video-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px clamp(40px, 6vh, 60px);
        }
        .t69-video-intro {
          max-width: 600px;
          margin: 0 auto clamp(32px, 5vh, 40px);
        }
        .t69-video-intro p {
          font-size: clamp(14px, 1.8vw, 15px);
          color: #FAFAF8;
          line-height: 1.8;
          font-weight: 200;
          margin-bottom: 16px;
        }
        .t69-video-intro p:last-child { margin-bottom: 0; font-weight: 300; }

        /* VIDEO PLAYER INLINE */
        .t69-video-wrap {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .t69-video-wrap video {
          width: 100%;
          display: block;
        }
        .t69-video-expand {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.3s ease;
        }
        .t69-video-wrap:hover .t69-video-expand { opacity: 1; transform: scale(1); }
        .t69-video-expand:hover { background: rgba(0,0,0,0.8); }
        .t69-video-expand svg { width: 20px; height: 20px; color: white; }

        /* SCREENSHOTS */
        .t69-screenshots {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
        }
        .t69-screenshots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
          gap: 24px;
        }
        .t69-screenshot {
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          border: 1px solid #1C1C1C;
          border-radius: 2px;
          overflow: hidden;
        }

        /* OVERVIEW */
        .t69-overview {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 80px) 24px;
        }
        .t69-overview p {
          font-size: clamp(14px, 2vw, 16px);
          color: #FAFAF8;
          line-height: 1.8;
          font-weight: 200;
          margin-bottom: 20px;
        }
        .t69-overview p:last-child { margin-bottom: 0; font-weight: 300; }

        /* DATA SECTION */
        .t69-data-section {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
        }
        .t69-data-item {
          display: flex;
          align-items: baseline;
          gap: clamp(12px, 3vw, 24px);
          padding: clamp(12px, 1.8vh, 16px) 0;
          border-bottom: 1px solid #1A1A1A;
        }
        .t69-data-item:last-child { border-bottom: none; }
        .t69-data-num {
          font-size: 10px;
          color: #FAFAF8;
          opacity: 0.4;
          font-family: 'SF Mono', Monaco, monospace;
          min-width: 20px;
        }
        .t69-data-source {
          font-size: clamp(12px, 1.5vw, 14px);
          font-weight: 400;
          color: #FAFAF8;
          min-width: clamp(90px, 14vw, 130px);
        }
        .t69-data-desc {
          font-size: clamp(11px, 1.3vw, 13px);
          color: #FAFAF8;
          font-weight: 300;
          opacity: 0.8;
        }

        /* INTELLIGENCE */
        .t69-intelligence {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
        }
        .t69-intelligence-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: clamp(32px, 5vw, 48px);
        }
        .t69-intelligence-item { text-align: center; }
        .t69-intelligence-num {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #2A2A28;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto clamp(14px, 2vh, 20px);
          background: #0A0A0A;
        }
        .t69-intelligence-num span {
          font-size: 11px;
          color: #FAFAF8;
          font-family: 'SF Mono', Monaco, monospace;
          opacity: 0.8;
        }
        .t69-intelligence-title {
          font-size: clamp(12px, 1.4vw, 13px);
          font-weight: 400;
          color: #FAFAF8;
          margin-bottom: 8px;
        }
        .t69-intelligence-desc {
          font-size: 11px;
          color: #FAFAF8;
          line-height: 1.6;
          font-weight: 300;
          max-width: 220px;
          margin: 0 auto;
          opacity: 0.8;
        }

        /* STACK & NAV */
        .t69-stack {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
          text-align: center;
        }
        .t69-stack-list {
          font-size: 12px;
          color: #FAFAF8;
          line-height: 2;
          opacity: 0.7;
        }
        .t69-nav {
          border-top: 1px solid #1C1C1C;
          padding: clamp(40px, 6vh, 60px) 24px;
        }
        .t69-nav-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }
        .t69-nav a {
          font-size: 12px;
          color: #FAFAF8;
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.6;
          transition: opacity 0.3s;
        }
        .t69-nav a:hover { opacity: 1; }

        /* ═══════════════════════════════════════════════════════════════════════════════
           OVERLAYS - GUARANTEED VISIBLE
           ═══════════════════════════════════════════════════════════════════════════════ */
        .t69-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999999;
          display: none;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.96);
        }
        .t69-overlay.open {
          display: flex;
          animation: t69FadeIn 0.3s ease forwards;
        }
        @keyframes t69FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .t69-overlay-content {
          animation: t69ScaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes t69ScaleIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .t69-overlay-close {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .t69-overlay-close:hover { background: rgba(255,255,255,0.25); }
        .t69-overlay-close:active { transform: translateX(-50%) scale(0.9); }
        .t69-overlay-close svg { color: white; width: 24px; height: 24px; }

        /* GALLERY CARD */
        .t69-gallery-card {
          width: calc(100vw - 48px);
          max-width: 340px;
          background: #fff;
          border-radius: 32px;
          padding: 20px;
          box-shadow: 0 25px 80px rgba(0,0,0,0.5);
        }
        .t69-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .t69-gallery-item {
          aspect-ratio: 1;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .t69-gallery-item:hover { transform: scale(1.03); }
        .t69-gallery-item:active { transform: scale(0.95); }
        .t69-gallery-item img { width: 100%; height: 100%; object-fit: cover; }

        /* ARCH CARD */
        .t69-arch-card {
          width: calc(100vw - 48px);
          max-width: 360px;
          aspect-ratio: 1;
          border-radius: 28px;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 80px rgba(0,0,0,0.5);
        }

        /* IMAGE FRAME */
        .t69-image-frame {
          max-width: calc(100vw - 40px);
          max-height: 75vh;
          border-radius: 16px;
          overflow: hidden;
        }
        .t69-image-frame img {
          display: block;
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
        }

        /* VIDEO OVERLAY */
        .t69-video-overlay {
          background: #000;
        }
        .t69-video-theater {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .t69-video-theater video {
          max-width: 100%;
          max-height: calc(100vh - 120px);
          object-fit: contain;
        }
        @media (min-width: 768px) {
          .t69-video-theater video {
            max-width: 85vw;
            max-height: 80vh;
            border-radius: 12px;
          }
        }

        .t69-video-ui {
          position: fixed;
          bottom: 100px;
          left: 20px;
          right: 20px;
          max-width: 800px;
          margin: 0 auto;
          opacity: 1;
          transition: opacity 0.3s;
        }
        .t69-video-ui.hidden { opacity: 0; pointer-events: none; }

        .t69-progress-wrap {
          height: 28px;
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-bottom: 8px;
        }
        .t69-progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
          transition: height 0.15s;
        }
        .t69-progress-wrap:hover .t69-progress-bar { height: 6px; }
        .t69-progress-fill {
          height: 100%;
          background: #e50914;
          border-radius: 2px;
          position: relative;
        }
        .t69-progress-fill::after {
          content: '';
          position: absolute;
          right: -7px;
          top: 50%;
          transform: translateY(-50%) scale(0);
          width: 14px;
          height: 14px;
          background: #fff;
          border-radius: 50%;
          transition: transform 0.15s;
        }
        .t69-progress-wrap:hover .t69-progress-fill::after { transform: translateY(-50%) scale(1); }

        .t69-controls-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .t69-ctrl-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        .t69-ctrl-btn:hover { background: rgba(255,255,255,0.15); }
        .t69-ctrl-btn:active { transform: scale(0.9); }
        .t69-ctrl-btn svg { color: white; }
        .t69-skip-time {
          position: absolute;
          font-size: 10px;
          font-weight: 700;
          color: white;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .t69-time-display {
          font-size: 14px;
          color: rgba(255,255,255,0.9);
          font-variant-numeric: tabular-nums;
          margin-left: auto;
        }

        .t69-center-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s;
          pointer-events: none;
        }
        .t69-center-play.show { opacity: 1; }
        .t69-center-play svg { width: 40px; height: 40px; color: white; margin-left: 5px; }

        /* RESPONSIVE */
        @media (min-width: 600px) {
          .t69-gallery-card { max-width: 400px; padding: 24px; }
          .t69-gallery-item { border-radius: 16px; }
          .t69-arch-card { max-width: 420px; }
        }
        @media (min-width: 900px) {
          .t69-gallery-card { max-width: 480px; padding: 28px; }
          .t69-gallery-item { border-radius: 18px; }
          .t69-arch-card { max-width: 480px; }
        }
      `}</style>

      {/* HERO */}
      <section className="t69-hero">
        <h1 className={`t69-title ${isLoaded ? 'on' : ''}`}>Trade69</h1>
        <div className={`t69-hero-img ${isLoaded ? 'on' : ''}`}>
          <FadeImage src="/images/t69hero4.png" alt="Trade69" width={500} height={350} priority />
        </div>
      </section>

      {/* FOLDERS */}
      <section className="t69-folders">
        <div className="t69-folder">
          <button className={`t69-folder-btn ${isLoaded ? 'on' : ''}`} onClick={openGallery} style={{ transitionDelay: '0.2s' }}>
            <div className="t69-folder-grid">
              {galleryImages.slice(0, 4).map((img, i) => (
                <div key={i} className="t69-folder-thumb"><img src={img.src} alt="" /></div>
              ))}
            </div>
          </button>
          <span className={`t69-folder-label ${isLoaded ? 'on' : ''}`}>Screenshots</span>
        </div>
        <div className="t69-folder">
          <button className={`t69-folder-btn ${isLoaded ? 'on' : ''}`} onClick={openArch} style={{ transitionDelay: '0.3s' }}>
            <div className="t69-folder-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
          </button>
          <span className={`t69-folder-label ${isLoaded ? 'on' : ''}`} style={{ transitionDelay: '0.1s' }}>Architecture</span>
        </div>
      </section>

      {/* ARCHITECTURE INLINE */}
      <section className="t69-arch-section">
        <p className="t69-section-title">System Architecture</p>
        <p className="t69-arch-intro">
          I was thinking to share the screenshot of the Mermaid diagram from the readme file on GitHub,
          but then I thought - let&apos;s create something more like me.
        </p>
        <Trade69Architecture />
      </section>

      {/* VIDEO */}
      <section className="t69-video-section">
        <div className="t69-video-intro">
          <p>
            My first dashboard, built alongside the backend as a control panel for live data extraction.
            Started with Streamlit, then migrated to Dash for better flexibility.
          </p>
          <p>
            This was also my first proper SQL database, the one where things finally clicked.
          </p>
        </div>
        <div className="t69-video-wrap">
          <video ref={videoRef} src="/videos/t69demo.mp4" autoPlay muted loop playsInline />
          <button className="t69-video-expand" onClick={openVideo}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="t69-screenshots">
        <div className="t69-screenshots-grid">
          <div className="t69-screenshot">
            <FadeImage src="/images/tphoto2.png" alt="Analytics" width={600} height={400} />
          </div>
          <div className="t69-screenshot">
            <FadeImage src="/images/tphoto3.png" alt="Backtesting" width={600} height={400} />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="t69-overview">
        <p>End-to-end algorithmic trading platform integrating multi-source market intelligence, machine learning, and quantitative risk management.</p>
        <p>Trading system that aggregates data from social sentiment, news APIs, dark pool activity, and market data to generate autonomous trading signals.</p>
        <p>The system employs Hidden Markov Models for market regime detection, Random Forest classifiers for signal prediction, and Kelly Criterion for position sizing.</p>
      </section>

      {/* DATA */}
      <section className="t69-data-section">
        <p className="t69-section-title">Data Collection Layer</p>
        {dataSourcesData.map((item, i) => (
          <div key={i} className="t69-data-item">
            <span className="t69-data-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="t69-data-source">{item.source}</span>
            <span className="t69-data-desc">{item.data}</span>
          </div>
        ))}
      </section>

      {/* INTELLIGENCE */}
      <section className="t69-intelligence">
        <p className="t69-section-title">Intelligence Layer</p>
        <div className="t69-intelligence-grid">
          {intelligenceSteps.map((item, i) => (
            <div key={i} className="t69-intelligence-item">
              <div className="t69-intelligence-num"><span>{item.num}</span></div>
              <p className="t69-intelligence-title">{item.title}</p>
              <p className="t69-intelligence-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="t69-stack">
        <p className="t69-section-title">Stack</p>
        <p className="t69-stack-list">Python · PostgreSQL · TimescaleDB · Redis · scikit-learn · hmmlearn · Dash · Plotly · Alpaca · ThetaData · GPT-4</p>
      </section>

      {/* NAV */}
      <nav className="t69-nav">
        <div className="t69-nav-inner">
          <Link href="/work">← Work</Link>
          <Link href="/work/megaagent">MegaAgent →</Link>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════════════════
          GALLERY OVERLAY
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {galleryOpen && (
        <div className="t69-overlay open" onClick={closeGallery}>
          <div className="t69-overlay-content" onClick={e => e.stopPropagation()}>
            <div className="t69-gallery-card">
              <div className="t69-gallery-grid">
                {galleryImages.map((img, i) => (
                  <div key={i} className="t69-gallery-item" onClick={() => openImage(img.src)}>
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="t69-overlay-close" onClick={closeGallery}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════
          ARCHITECTURE OVERLAY
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {archOpen && (
        <div className="t69-overlay open" onClick={closeArch}>
          <div className="t69-overlay-content" onClick={e => e.stopPropagation()}>
            <div className="t69-arch-card">
              <Trade69Architecture />
            </div>
          </div>
          <button className="t69-overlay-close" onClick={closeArch}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════
          IMAGE OVERLAY
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {imageOpen && (
        <div className="t69-overlay open" onClick={closeImage} style={{ zIndex: 9999999 }}>
          <div className="t69-overlay-content" onClick={e => e.stopPropagation()}>
            <div className="t69-image-frame">
              <img src={imageOpen} alt="" />
            </div>
          </div>
          <button className="t69-overlay-close" onClick={closeImage}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════
          VIDEO OVERLAY
          ═══════════════════════════════════════════════════════════════════════════════ */}
      {videoOpen && (
        <div
          className="t69-overlay t69-video-overlay open"
          onClick={closeVideo}
          onMouseMove={resetControlsTimer}
          onTouchStart={resetControlsTimer}
        >
          <div className="t69-video-theater" onClick={e => e.stopPropagation()}>
            <video
              ref={bigVideoRef}
              src="/videos/t69demo.mp4"
              loop
              playsInline
              onClick={togglePlay}
              onTimeUpdate={() => bigVideoRef.current && setProgress(bigVideoRef.current.currentTime)}
              onLoadedMetadata={() => bigVideoRef.current && setDuration(bigVideoRef.current.duration)}
            />
            <div className={`t69-center-play ${!playing ? 'show' : ''}`}>
              <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21" /></svg>
            </div>
          </div>

          <div className={`t69-video-ui ${showControls ? '' : 'hidden'}`} onClick={e => e.stopPropagation()}>
            <div className="t69-progress-wrap" onClick={seek}>
              <div className="t69-progress-bar">
                <div className="t69-progress-fill" style={{ width: duration ? `${(progress / duration) * 100}%` : '0%' }} />
              </div>
            </div>
            <div className="t69-controls-row">
              <button className="t69-ctrl-btn" onClick={() => skip(-10)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
                </svg>
                <span className="t69-skip-time">10</span>
              </button>
              <button className="t69-ctrl-btn" onClick={togglePlay}>
                {playing ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36"><polygon points="5 3 19 12 5 21" /></svg>
                )}
              </button>
              <button className="t69-ctrl-btn" onClick={() => skip(10)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M12 3a9 9 0 1 1 -9 9" strokeLinecap="round" />
                </svg>
                <span className="t69-skip-time">10</span>
              </button>
              <span className="t69-time-display">{fmt(progress)} / {fmt(duration)}</span>
            </div>
          </div>

          <button className="t69-overlay-close" onClick={closeVideo}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}