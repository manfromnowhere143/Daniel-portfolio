"use client";

import { useState, useEffect, useRef } from "react";
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

type OverlayType = 'none' | 'gallery' | 'arch' | 'image' | 'video';

export default function Trade69() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [overlay, setOverlay] = useState<OverlayType>('none');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Video state - completely separate
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(true);

  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Simple open/close with animation
  const openOverlay = (type: OverlayType, imageSrc?: string) => {
    if (imageSrc) setSelectedImage(imageSrc);
    setOverlay(type);
    setIsClosing(false);
  };

  const closeOverlay = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOverlay('none');
      setSelectedImage(null);
      setIsClosing(false);
    }, 280);
  };

  // Video controls
  const showControls = () => {
    setControlsVisible(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => setControlsVisible(false), 3000);
  };

  const handleVideoClick = () => {
    const video = expandedVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    showControls();
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = expandedVideoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
    showControls();
  };

  const handleSkip = (seconds: number) => {
    const video = expandedVideoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
    showControls();
  };

  const formatTime = (t: number) => {
    const mins = Math.floor(t / 60);
    const secs = Math.floor(t % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isOpen = overlay !== 'none';

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════
           BASE & TRANSITIONS
           ═══════════════════════════════════════════════════════════════════════════════ */
        .t69-page {
          min-height: 100vh;
          background: #0A0A0A;
          padding-top: 60px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* Stagger animation helper */
        @keyframes t69-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes t69-scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════
           HERO
           ═══════════════════════════════════════════════════════════════════════════════ */
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
          animation: t69-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        .t69-hero-img {
          max-width: clamp(280px, 70vw, 500px);
          margin: 0 auto;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          border: 1px solid #1C1C1C;
          border-radius: 2px;
          overflow: hidden;
          opacity: 0;
          animation: t69-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════
           FOLDERS - iOS STYLE
           ═══════════════════════════════════════════════════════════════════════════════ */
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
          width: clamp(85px, 20vw, 130px);
          height: clamp(85px, 20vw, 130px);
          border-radius: clamp(22px, 5vw, 32px);
          background: linear-gradient(145deg, rgba(70,70,75,0.9), rgba(45,45,50,0.95));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 10px 40px rgba(0,0,0,0.4),
            0 2px 10px rgba(0,0,0,0.3),
            inset 0 1px 1px rgba(255,255,255,0.15);
          opacity: 0;
          animation: t69-scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        .t69-folder-btn:nth-child(1) { animation-delay: 0.3s; }
        .t69-folder:nth-child(2) .t69-folder-btn { animation-delay: 0.4s; }
        
        .t69-folder-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%);
          border-radius: 32px 32px 60% 60%;
          pointer-events: none;
        }
        .t69-folder-btn:hover { 
          transform: scale(1.08) translateY(-2px); 
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 5px 20px rgba(0,0,0,0.3);
        }
        .t69-folder-btn:active { transform: scale(0.95); }

        .t69-folder-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 5px;
          width: 62%;
          height: 62%;
        }
        .t69-folder-thumb {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        .t69-folder-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        
        .t69-folder-icon {
          width: 52%;
          height: 52%;
        }
        .t69-folder-icon svg { width: 100%; height: 100%; color: rgba(255,255,255,0.9); }
        
        .t69-folder-label {
          font-size: 12px;
          font-weight: 500;
          color: #FAFAF8;
          opacity: 0;
          animation: t69-fadeUp 0.5s ease 0.5s forwards;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════
           SECTIONS
           ═══════════════════════════════════════════════════════════════════════════════ */
        .t69-section-title {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #FAFAF8;
          opacity: 0.5;
          margin-bottom: clamp(24px, 4vh, 40px);
          text-align: center;
        }

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

        /* ═══════════════════════════════════════════════════════════════════════════════
           VIDEO INLINE
           ═══════════════════════════════════════════════════════════════════════════════ */
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
        .t69-video-intro p:last-child { font-weight: 300; margin-bottom: 0; }

        .t69-video-wrap {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .t69-video-wrap video { width: 100%; display: block; }
        
        .t69-expand-btn {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .t69-video-wrap:hover .t69-expand-btn { opacity: 1; transform: scale(1); }
        .t69-expand-btn:hover { background: rgba(0,0,0,0.9); transform: scale(1.1) !important; }
        .t69-expand-btn svg { width: 20px; height: 20px; color: white; }

        /* ═══════════════════════════════════════════════════════════════════════════════
           SCREENSHOTS
           ═══════════════════════════════════════════════════════════════════════════════ */
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
          border-radius: 4px;
          overflow: hidden;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════
           TEXT SECTIONS
           ═══════════════════════════════════════════════════════════════════════════════ */
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
        .t69-overview p:last-child { font-weight: 300; margin-bottom: 0; }

        .t69-data-section {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
        }
        .t69-data-item {
          display: grid;
          grid-template-columns: 28px minmax(100px, 140px) 1fr;
          gap: 16px;
          align-items: baseline;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .t69-data-item:last-child { border-bottom: none; }
        .t69-data-num { font-size: 10px; color: rgba(255,255,255,0.35); font-family: 'SF Mono', monospace; }
        .t69-data-source { font-size: 14px; font-weight: 400; color: #FAFAF8; }
        .t69-data-desc { font-size: 13px; color: rgba(255,255,255,0.7); font-weight: 300; }

        @media (max-width: 600px) {
          .t69-data-item { grid-template-columns: 24px 1fr; }
          .t69-data-desc { grid-column: 1 / -1; padding-left: 40px; margin-top: -8px; }
        }

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
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .t69-intelligence-num span { font-size: 11px; color: rgba(255,255,255,0.7); font-family: 'SF Mono', monospace; }
        .t69-intelligence-title { font-size: 13px; font-weight: 500; color: #FAFAF8; margin-bottom: 8px; }
        .t69-intelligence-desc { font-size: 11px; color: rgba(255,255,255,0.6); line-height: 1.6; max-width: 220px; margin: 0 auto; }

        .t69-stack {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
          text-align: center;
        }
        .t69-stack-list { font-size: 12px; color: rgba(255,255,255,0.6); line-height: 2; }

        .t69-nav {
          border-top: 1px solid rgba(255,255,255,0.08);
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
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .t69-nav a:hover { opacity: 1; }

        /* ═══════════════════════════════════════════════════════════════════════════════
           OVERLAY - BULLETPROOF FIXED POSITIONING
           Using viewport units and transform for perfect centering
           ═══════════════════════════════════════════════════════════════════════════════ */
        .t69-overlay-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          z-index: 999999;
          background: rgba(0, 0, 0, 0.97);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .t69-overlay-backdrop.visible { opacity: 1; }
        .t69-overlay-backdrop.closing { opacity: 0; }

        .t69-overlay-card {
          transform: scale(0.9) translateY(30px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .t69-overlay-backdrop.visible .t69-overlay-card {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
        .t69-overlay-backdrop.closing .t69-overlay-card {
          transform: scale(0.95) translateY(15px);
          opacity: 0;
          transition: all 0.25s ease;
        }

        .t69-close {
          position: fixed;
          bottom: max(24px, env(safe-area-inset-bottom));
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease 0.15s;
          z-index: 10;
        }
        .t69-overlay-backdrop.visible .t69-close { opacity: 1; }
        .t69-close:hover { background: rgba(255,255,255,0.2); }
        .t69-close:active { transform: translateX(-50%) scale(0.9); }
        .t69-close svg { width: 24px; height: 24px; color: white; }

        /* ═══════════════════════════════════════════════════════════════════════════════
           GALLERY CARD
           ═══════════════════════════════════════════════════════════════════════════════ */
        .t69-gallery-sphere {
          width: min(85vw, 360px);
          background: #FFFFFF;
          border-radius: 32px;
          padding: clamp(16px, 4vw, 24px);
          box-shadow: 0 30px 100px rgba(0,0,0,0.5);
        }
        .t69-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(8px, 2vw, 12px);
        }
        .t69-gallery-thumb {
          aspect-ratio: 1;
          border-radius: clamp(10px, 3vw, 16px);
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .t69-gallery-thumb:hover { transform: scale(1.05); }
        .t69-gallery-thumb:active { transform: scale(0.95); }
        .t69-gallery-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ═══════════════════════════════════════════════════════════════════════════════
           ARCHITECTURE CARD
           ═══════════════════════════════════════════════════════════════════════════════ */
        .t69-arch-sphere {
          width: min(85vw, 380px);
          aspect-ratio: 1;
          background: #111114;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 30px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════
           IMAGE EXPANDED
           ═══════════════════════════════════════════════════════════════════════════════ */
        .t69-image-expanded {
          max-width: min(90vw, 700px);
          max-height: 75vh;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 100px rgba(0,0,0,0.6);
        }
        .t69-image-expanded img {
          display: block;
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════
           VIDEO EXPANDED - NETFLIX STYLE
           ═══════════════════════════════════════════════════════════════════════════════ */
        .t69-video-theater {
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .t69-video-theater video {
          max-width: 95vw;
          max-height: 70vh;
          border-radius: 8px;
          background: #000;
        }
        @media (min-width: 768px) {
          .t69-video-theater video {
            max-width: 80vw;
            max-height: 75vh;
            border-radius: 12px;
          }
        }

        .t69-video-controls {
          position: fixed;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: min(90vw, 600px);
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .t69-video-controls.hidden { opacity: 0; pointer-events: none; }

        .t69-progress-bar {
          height: 32px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .t69-progress-track {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.25);
          border-radius: 2px;
          transition: height 0.15s;
        }
        .t69-progress-bar:hover .t69-progress-track { height: 6px; }
        .t69-progress-fill {
          height: 100%;
          background: #E50914;
          border-radius: 2px;
          position: relative;
        }
        .t69-progress-fill::after {
          content: '';
          position: absolute;
          right: -7px;
          top: 50%;
          width: 14px;
          height: 14px;
          background: white;
          border-radius: 50%;
          transform: translateY(-50%) scale(0);
          transition: transform 0.15s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .t69-progress-bar:hover .t69-progress-fill::after { transform: translateY(-50%) scale(1); }

        .t69-playback-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }
        .t69-playback-btn {
          width: 48px;
          height: 48px;
          border: none;
          background: transparent;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: background 0.2s;
        }
        .t69-playback-btn:hover { background: rgba(255,255,255,0.1); }
        .t69-playback-btn svg { color: white; }
        .t69-skip-label {
          position: absolute;
          font-size: 10px;
          font-weight: 700;
          color: white;
        }
        .t69-time {
          font-size: 14px;
          color: rgba(255,255,255,0.9);
          font-variant-numeric: tabular-nums;
          margin-left: auto;
        }

        .t69-play-indicator {
          position: fixed;
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
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .t69-play-indicator.show { opacity: 1; }
        .t69-play-indicator svg { width: 36px; height: 36px; color: white; margin-left: 4px; }

        /* Desktop responsive */
        @media (min-width: 768px) {
          .t69-gallery-sphere { width: min(80vw, 440px); }
          .t69-arch-sphere { width: min(80vw, 450px); }
        }
      `}</style>

      <div className="t69-page">
        {/* HERO */}
        <section className="t69-hero">
          <h1 className="t69-title">Trade69</h1>
          <div className="t69-hero-img">
            <FadeImage src="/images/t69hero4.png" alt="Trade69" width={500} height={350} priority />
          </div>
        </section>

        {/* FOLDERS */}
        <section className="t69-folders">
          <div className="t69-folder">
            <button className="t69-folder-btn" onClick={() => openOverlay('gallery')}>
              <div className="t69-folder-grid">
                {galleryImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="t69-folder-thumb"><img src={img.src} alt="" /></div>
                ))}
              </div>
            </button>
            <span className="t69-folder-label">Screenshots</span>
          </div>
          <div className="t69-folder">
            <button className="t69-folder-btn" onClick={() => openOverlay('arch')}>
              <div className="t69-folder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
            </button>
            <span className="t69-folder-label">Architecture</span>
          </div>
        </section>

        {/* ARCHITECTURE INLINE */}
        <section className="t69-arch-section">
          <p className="t69-section-title">System Architecture</p>
          <p className="t69-arch-intro">
            I was thinking to share the screenshot of the Mermaid diagram from the readme file on GitHub, but then I thought - let&apos;s create something more like me.
          </p>
          <Trade69Architecture />
        </section>

        {/* VIDEO */}
        <section className="t69-video-section">
          <div className="t69-video-intro">
            <p>My first dashboard, built alongside the backend as a control panel for live data extraction. Started with Streamlit, then migrated to Dash for better flexibility.</p>
            <p>This was also my first proper SQL database, the one where things finally clicked.</p>
          </div>
          <div className="t69-video-wrap">
            <video src="/videos/t69demo.mp4" autoPlay muted loop playsInline />
            <button className="t69-expand-btn" onClick={() => openOverlay('video')}>
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
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════
          OVERLAYS
          ═══════════════════════════════════════════════════════════════════════════════ */}

      {/* GALLERY */}
      {(overlay === 'gallery' || (isClosing && overlay === 'none')) && overlay !== 'image' && overlay !== 'video' && overlay !== 'arch' && (
        <div
          className={`t69-overlay-backdrop ${!isClosing ? 'visible' : 'closing'}`}
          onClick={closeOverlay}
        >
          <div className="t69-overlay-card" onClick={e => e.stopPropagation()}>
            <div className="t69-gallery-sphere">
              <div className="t69-gallery-grid">
                {galleryImages.map((img, i) => (
                  <div key={i} className="t69-gallery-thumb" onClick={() => openOverlay('image', img.src)}>
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="t69-close" onClick={closeOverlay}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ARCHITECTURE */}
      {overlay === 'arch' && (
        <div
          className={`t69-overlay-backdrop ${!isClosing ? 'visible' : 'closing'}`}
          onClick={closeOverlay}
        >
          <div className="t69-overlay-card" onClick={e => e.stopPropagation()}>
            <div className="t69-arch-sphere">
              <Trade69Architecture />
            </div>
          </div>
          <button className="t69-close" onClick={closeOverlay}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* IMAGE */}
      {overlay === 'image' && selectedImage && (
        <div
          className={`t69-overlay-backdrop ${!isClosing ? 'visible' : 'closing'}`}
          onClick={closeOverlay}
          style={{ zIndex: 1000000 }}
        >
          <div className="t69-overlay-card" onClick={e => e.stopPropagation()}>
            <div className="t69-image-expanded">
              <img src={selectedImage} alt="" />
            </div>
          </div>
          <button className="t69-close" onClick={closeOverlay}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* VIDEO */}
      {overlay === 'video' && (
        <div
          className={`t69-overlay-backdrop ${!isClosing ? 'visible' : 'closing'}`}
          style={{ background: '#000' }}
          onClick={closeOverlay}
          onMouseMove={showControls}
          onTouchStart={showControls}
        >
          <div className="t69-video-theater" onClick={e => e.stopPropagation()}>
            <video
              ref={expandedVideoRef}
              src="/videos/t69demo.mp4"
              autoPlay
              loop
              playsInline
              onClick={handleVideoClick}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={(e) => setVideoProgress((e.target as HTMLVideoElement).currentTime)}
              onLoadedMetadata={(e) => {
                setVideoDuration((e.target as HTMLVideoElement).duration);
                showControls();
              }}
            />
          </div>

          <div className={`t69-play-indicator ${!isPlaying ? 'show' : ''}`}>
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21" /></svg>
          </div>

          <div className={`t69-video-controls ${controlsVisible ? '' : 'hidden'}`} onClick={e => e.stopPropagation()}>
            <div className="t69-progress-bar" onClick={handleSeek}>
              <div className="t69-progress-track">
                <div className="t69-progress-fill" style={{ width: videoDuration ? `${(videoProgress / videoDuration) * 100}%` : '0%' }} />
              </div>
            </div>
            <div className="t69-playback-row">
              <button className="t69-playback-btn" onClick={() => handleSkip(-10)}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
                </svg>
                <span className="t69-skip-label">10</span>
              </button>
              <button className="t69-playback-btn" onClick={handleVideoClick}>
                {isPlaying ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21" /></svg>
                )}
              </button>
              <button className="t69-playback-btn" onClick={() => handleSkip(10)}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3a9 9 0 1 1 -9 9" strokeLinecap="round" />
                </svg>
                <span className="t69-skip-label">10</span>
              </button>
              <span className="t69-time">{formatTime(videoProgress)} / {formatTime(videoDuration)}</span>
            </div>
          </div>

          <button className="t69-close" onClick={closeOverlay}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}