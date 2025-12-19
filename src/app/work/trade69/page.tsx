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

type OverlayType = 'none' | 'video' | 'gallery' | 'arch' | 'image';

export default function Trade69() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [overlay, setOverlay] = useState<OverlayType>('none');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Video state
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  const controlsTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Lock scroll when overlay open
  useEffect(() => {
    if (overlay !== 'none') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [overlay]);

  const openOverlay = (type: OverlayType) => {
    if (type === 'video' && videoRef.current) {
      videoRef.current.pause();
    }
    setOverlay(type);
  };

  const closeOverlay = () => {
    setOverlay('none');
    setSelectedImage(null);
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };

  const openImage = (src: string) => {
    setSelectedImage(src);
    setOverlay('image');
  };

  // Video controls
  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  const togglePlay = () => {
    if (!expandedVideoRef.current) return;
    if (expandedVideoRef.current.paused) {
      expandedVideoRef.current.play();
      setPlaying(true);
    } else {
      expandedVideoRef.current.pause();
      setPlaying(false);
    }
    resetControlsTimer();
  };

  const skip = (sec: number) => {
    if (!expandedVideoRef.current) return;
    expandedVideoRef.current.currentTime = Math.max(0, Math.min(duration, expandedVideoRef.current.currentTime + sec));
    resetControlsTimer();
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!expandedVideoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    expandedVideoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
    resetControlsTimer();
  };

  const fmt = (t: number) => `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, '0')}`;

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - THEME VARIABLES                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --t69-bg: #050506;
          --t69-text: #FAFAF8;
          --t69-text-secondary: rgba(250, 250, 248, 0.7);
          --t69-text-muted: rgba(250, 250, 248, 0.5);
          --t69-border: rgba(255, 255, 255, 0.06);
          --t69-card: rgba(40, 40, 45, 0.65);
        }
        
        [data-theme="light"] {
          --t69-bg: #F5F5F0;
          --t69-text: #1a1a1a;
          --t69-text-secondary: rgba(26, 26, 26, 0.7);
          --t69-text-muted: rgba(26, 26, 26, 0.5);
          --t69-border: rgba(0, 0, 0, 0.08);
          --t69-card: rgba(255, 255, 255, 0.85);
        }

        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        
        .t69-page {
          min-height: 100vh;
          background: var(--t69-bg);
          padding-top: 60px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* HERO SECTION                                                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 20px 16px;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .t69-hero.loaded { opacity: 1; transform: translateY(0); }
        
        .t69-hero-img {
          max-width: clamp(260px, 65vw, 500px);
          margin: 0 auto;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* VIDEO SECTION                                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-vid-section { max-width: 700px; margin: 0 auto; padding: 0 20px 20px; }
        
        .t69-vid-wrap {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 30px 80px rgba(0,0,0,0.4);
        }
        .t69-vid-wrap video { width: 100%; display: block; }
        
        .t69-vid-expand {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.3s ease;
        }
        .t69-vid-wrap:hover .t69-vid-expand { opacity: 1; transform: scale(1); }
        .t69-vid-expand svg { width: 16px; height: 16px; color: white; }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FOLDERS - iOS Style                                                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-folders {
          max-width: 600px;
          margin: 0 auto;
          padding: 16px 20px 32px;
          display: flex;
          justify-content: center;
          gap: clamp(50px, 12vw, 100px);
        }
        
        .t69-folder { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 10px; 
        }
        
        .t69-folder-btn {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: var(--t69-card);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid var(--t69-border);
          opacity: 0;
          transform: scale(0.85) translateY(12px);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .t69-folder-btn.loaded { opacity: 1; transform: scale(1) translateY(0); }
        .t69-folder-btn:hover { transform: scale(1.05) translateY(-2px); }
        .t69-folder-btn:active { transform: scale(0.95); }
        
        .t69-folder-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3px; }
        
        .t69-folder-thumb {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        .t69-folder-thumb img { width: 100%; height: 100%; object-fit: cover; }
        
        .t69-arch-ico { display: flex; align-items: center; justify-content: center; }
        .t69-arch-ico svg { width: 38px; height: 38px; color: var(--t69-text-secondary); }
        
        .t69-folder-label {
          font-size: 11px;
          font-weight: 500;
          color: var(--t69-text);
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.4s ease 0.1s;
        }
        .t69-folder-label.loaded { opacity: 0.9; transform: translateY(0); }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* OVERLAY SYSTEM - BULLETPROOF SIMPLE                                             */
        /* No fancy animations - just WORKS                                                */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999999;
          background: rgba(0,0,0,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 80px;
        }
        
        [data-theme="light"] .t69-overlay {
          background: rgba(245,245,240,0.95);
        }

        .t69-overlay-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Close Button */
        .t69-close-btn {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000000;
        }
        
        [data-theme="light"] .t69-close-btn {
          background: rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.1);
        }
        
        .t69-close-btn:hover { background: rgba(255,255,255,0.25); }
        [data-theme="light"] .t69-close-btn:hover { background: rgba(0,0,0,0.12); }
        
        .t69-close-btn:active { transform: translateX(-50%) scale(0.95); }
        .t69-close-btn svg { width: 22px; height: 22px; color: white; }
        [data-theme="light"] .t69-close-btn svg { color: #1a1a1a; }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* VIDEO THEATER                                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-video-overlay { background: #000; }
        [data-theme="light"] .t69-video-overlay { background: rgba(245,245,240,0.98); }
        
        .t69-theater {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          padding-bottom: 100px;
        }
        
        .t69-theater-video {
          width: 100%;
          max-width: 900px;
          max-height: 60vh;
          object-fit: contain;
          border-radius: 12px;
          background: #000;
        }
        
        [data-theme="light"] .t69-theater-video {
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        .t69-video-ui {
          position: fixed;
          bottom: 90px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 40px);
          max-width: 500px;
          opacity: 1;
          transition: opacity 0.3s;
          z-index: 1000001;
        }
        .t69-video-ui.hidden { opacity: 0; pointer-events: none; }

        .t69-progress-bar {
          height: 24px;
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-bottom: 12px;
        }
        .t69-progress-track {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
          transition: height 0.15s;
        }
        [data-theme="light"] .t69-progress-track {
          background: rgba(0,0,0,0.2);
        }
        .t69-progress-bar:hover .t69-progress-track { height: 6px; }
        .t69-progress-fill {
          height: 100%;
          background: #e50914;
          border-radius: 2px;
          position: relative;
        }
        .t69-progress-fill::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          transform: translateY(-50%) scale(0);
          transition: transform 0.15s;
        }
        [data-theme="light"] .t69-progress-fill::after {
          background: #1a1a1a;
        }
        .t69-progress-bar:hover .t69-progress-fill::after {
          transform: translateY(-50%) scale(1);
        }

        .t69-controls-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        
        .t69-ctrl-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        [data-theme="light"] .t69-ctrl-btn {
          background: rgba(0,0,0,0.08);
        }
        .t69-ctrl-btn:hover { background: rgba(255,255,255,0.2); transform: scale(1.08); }
        [data-theme="light"] .t69-ctrl-btn:hover { background: rgba(0,0,0,0.12); }
        .t69-ctrl-btn:active { transform: scale(0.95); }
        .t69-ctrl-btn svg { color: white; }
        [data-theme="light"] .t69-ctrl-btn svg { color: #1a1a1a; }
        
        .t69-ctrl-btn.play {
          width: 56px;
          height: 56px;
          background: rgba(255,255,255,0.15);
        }
        [data-theme="light"] .t69-ctrl-btn.play {
          background: rgba(0,0,0,0.1);
        }
        .t69-ctrl-btn.play svg { width: 28px; height: 28px; }
        
        .t69-skip-label {
          position: absolute;
          font-size: 10px;
          font-weight: 700;
          color: white;
          bottom: 8px;
        }
        [data-theme="light"] .t69-skip-label {
          color: #1a1a1a;
        }

        .t69-time {
          position: absolute;
          right: 0;
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          font-variant-numeric: tabular-nums;
        }
        [data-theme="light"] .t69-time {
          color: rgba(0,0,0,0.7);
        }

        .t69-play-indicator {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          z-index: 1000001;
        }
        [data-theme="light"] .t69-play-indicator {
          background: rgba(255,255,255,0.7);
        }
        .t69-play-indicator.show { opacity: 1; }
        .t69-play-indicator svg { width: 32px; height: 32px; color: white; margin-left: 3px; }
        [data-theme="light"] .t69-play-indicator svg { color: #1a1a1a; }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* GALLERY CARD                                                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-gallery-card {
          width: 280px;
          background: var(--t69-card);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          padding: 16px;
          box-shadow: 0 25px 80px rgba(0,0,0,0.4);
          border: 1px solid var(--t69-border);
        }
        
        [data-theme="light"] .t69-gallery-card {
          background: #fff;
        }
        
        @media (min-width: 400px) {
          .t69-gallery-card { width: 320px; padding: 18px; }
        }
        @media (min-width: 768px) {
          .t69-gallery-card { width: 380px; padding: 20px; border-radius: 28px; }
        }

        .t69-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        @media (min-width: 768px) {
          .t69-gallery-grid { gap: 10px; }
        }

        .t69-gallery-item {
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }
        
        .t69-gallery-item:hover { transform: scale(1.03); }
        .t69-gallery-item:active { transform: scale(0.97); }
        .t69-gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* ARCHITECTURE CARD                                                               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-arch-card {
          width: 280px;
          aspect-ratio: 1;
          background: #0c0c10;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06);
          overflow: hidden;
        }
        
        [data-theme="light"] .t69-arch-card {
          background: #fff;
          box-shadow: 0 25px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.08);
        }
        
        @media (min-width: 400px) {
          .t69-arch-card { width: 320px; }
        }
        @media (min-width: 768px) {
          .t69-arch-card { width: 400px; border-radius: 28px; }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* IMAGE EXPANDED                                                                  */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-image-expanded {
          max-width: calc(100vw - 32px);
          max-height: 75vh;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }
        [data-theme="light"] .t69-image-expanded {
          box-shadow: 0 30px 80px rgba(0,0,0,0.2);
        }
        .t69-image-expanded img {
          display: block;
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
        }
        
        @media (min-width: 768px) {
          .t69-image-expanded { max-width: 700px; border-radius: 16px; }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* CONTENT SECTIONS                                                                */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-section-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--t69-text);
          opacity: 0.5;
          text-align: center;
          margin-bottom: 16px;
        }
        
        .t69-overview { max-width: 640px; margin: 0 auto; padding: 20px 20px 28px; }
        .t69-overview p {
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 300;
          color: var(--t69-text);
          line-height: 1.75;
          margin-bottom: 14px;
        }
        .t69-overview p:last-child { margin-bottom: 0; }
        .t69-overview em { font-style: normal; font-weight: 500; }
        
        .t69-data { max-width: 680px; margin: 0 auto; padding: 20px; }
        .t69-data-item {
          display: grid;
          grid-template-columns: 24px 1fr 2fr;
          gap: clamp(8px, 1.5vw, 16px);
          align-items: baseline;
          padding: 10px 0;
          border-bottom: 1px solid var(--t69-border);
        }
        .t69-data-item:last-child { border-bottom: none; }
        .t69-data-num { 
          font-size: 9px; 
          font-weight: 500; 
          color: var(--t69-text); 
          opacity: 0.4; 
          font-family: 'SF Mono', monospace; 
        }
        .t69-data-source { 
          font-size: clamp(12px, 1.5vw, 14px); 
          font-weight: 500; 
          color: var(--t69-text); 
        }
        .t69-data-desc { 
          font-size: clamp(11px, 1.3vw, 13px); 
          color: var(--t69-text-secondary); 
          line-height: 1.5; 
        }
        
        @media (max-width: 600px) {
          .t69-data-item { grid-template-columns: 22px 1fr; }
          .t69-data-desc { grid-column: 2; margin-top: 3px; }
        }
        
        .t69-intel { max-width: 860px; margin: 0 auto; padding: 28px 20px; }
        .t69-intel-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
          gap: clamp(24px, 4vw, 40px); 
        }
        .t69-intel-item { text-align: center; }
        .t69-intel-num {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--t69-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }
        .t69-intel-num span { 
          font-size: 11px; 
          color: var(--t69-text-secondary); 
          font-family: 'SF Mono', monospace; 
        }
        .t69-intel-title { 
          font-size: clamp(13px, 1.5vw, 15px); 
          font-weight: 500; 
          color: var(--t69-text); 
          margin-bottom: 8px; 
        }
        .t69-intel-desc { 
          font-size: 12px; 
          color: var(--t69-text-secondary); 
          line-height: 1.6; 
          max-width: 220px; 
          margin: 0 auto; 
        }
        
        .t69-stack { max-width: 660px; margin: 0 auto; padding: 28px 20px; text-align: center; }
        .t69-stack p { 
          font-size: clamp(11px, 1.3vw, 13px); 
          color: var(--t69-text-muted); 
          line-height: 2; 
        }
        
        .t69-nav { border-top: 1px solid var(--t69-border); padding: 24px 20px; }
        .t69-nav-inner { max-width: 860px; margin: 0 auto; display: flex; justify-content: space-between; }
        .t69-nav a {
          font-size: 10px;
          font-weight: 500;
          color: var(--t69-text);
          opacity: 0.5;
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: opacity 0.3s;
        }
        .t69-nav a:hover { opacity: 1; }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* RESPONSIVE FOLDERS                                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 500px) {
          .t69-folder-btn { width: 95px; height: 95px; border-radius: 24px; }
          .t69-folder-thumb { width: 34px; height: 34px; border-radius: 8px; }
          .t69-folder-grid { gap: 4px; }
          .t69-arch-ico svg { width: 44px; height: 44px; }
          .t69-folder-label { font-size: 12px; }
        }
        @media (min-width: 768px) {
          .t69-folder-btn { width: 110px; height: 110px; border-radius: 26px; }
          .t69-folder-thumb { width: 40px; height: 40px; border-radius: 9px; }
          .t69-folder-grid { gap: 5px; }
          .t69-arch-ico svg { width: 50px; height: 50px; }
        }
      `}</style>

      <div className="t69-page">
        <div className={`t69-hero ${isLoaded ? 'loaded' : ''}`}>
          <div className="t69-hero-img">
            <FadeImage src="/images/t69hero4.png" alt="Trade69" width={640} height={420} priority />
          </div>
        </div>

        <div className="t69-vid-section">
          <div className="t69-vid-wrap">
            <video ref={videoRef} src="/videos/t69demo.mp4" autoPlay muted loop playsInline />
            <button className="t69-vid-expand" onClick={() => openOverlay('video')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
          </div>
        </div>

        <div className="t69-folders">
          <div className="t69-folder">
            <button className={`t69-folder-btn ${isLoaded ? 'loaded' : ''}`} onClick={() => openOverlay('gallery')}>
              <div className="t69-folder-grid">
                {galleryImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="t69-folder-thumb"><img src={img.src} alt="" /></div>
                ))}
              </div>
            </button>
            <span className={`t69-folder-label ${isLoaded ? 'loaded' : ''}`}>Screenshots</span>
          </div>
          <div className="t69-folder">
            <button
              className={`t69-folder-btn ${isLoaded ? 'loaded' : ''}`}
              onClick={() => openOverlay('arch')}
              style={{ transitionDelay: '80ms' }}
            >
              <div className="t69-arch-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
            </button>
            <span className={`t69-folder-label ${isLoaded ? 'loaded' : ''}`} style={{ transitionDelay: '120ms' }}>Architecture</span>
          </div>
        </div>

        <div className="t69-overview">
          <p>End-to-end <em>algorithmic trading platform</em> integrating multi-source market intelligence, machine learning, and quantitative risk management.</p>
          <p>Trading system that aggregates data from <em>social sentiment</em>, news APIs, dark pool activity, and market data to generate autonomous trading signals.</p>
          <p>The system employs <em>Hidden Markov Models</em> for market regime detection, Random Forest classifiers for signal prediction, and <em>Kelly Criterion</em> for position sizing.</p>
        </div>

        <div className="t69-data">
          <p className="t69-section-label">Data Collection Layer</p>
          {dataSourcesData.map((item, i) => (
            <div key={i} className="t69-data-item">
              <span className="t69-data-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="t69-data-source">{item.source}</span>
              <span className="t69-data-desc">{item.data}</span>
            </div>
          ))}
        </div>

        <div className="t69-intel">
          <p className="t69-section-label">Intelligence Layer</p>
          <div className="t69-intel-grid">
            {intelligenceSteps.map((item, i) => (
              <div key={i} className="t69-intel-item">
                <div className="t69-intel-num"><span>{item.num}</span></div>
                <h3 className="t69-intel-title">{item.title}</h3>
                <p className="t69-intel-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="t69-stack">
          <p className="t69-section-label">Technology Stack</p>
          <p>Python · PostgreSQL · TimescaleDB · Redis · scikit-learn · hmmlearn · Dash · Plotly · Alpaca · ThetaData · GPT-4</p>
        </div>

        <nav className="t69-nav">
          <div className="t69-nav-inner">
            <Link href="/work">← Work</Link>
            <Link href="/work/megaagent">MegaAgent →</Link>
          </div>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* VIDEO OVERLAY                                                                   */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {overlay === 'video' && (
        <div
          className="t69-overlay t69-video-overlay"
          onClick={closeOverlay}
          onMouseMove={resetControlsTimer}
          onTouchStart={resetControlsTimer}
        >
          <div className="t69-overlay-content t69-theater" onClick={e => e.stopPropagation()}>
            <video
              ref={expandedVideoRef}
              className="t69-theater-video"
              src="/videos/t69demo.mp4"
              autoPlay
              playsInline
              loop
              onClick={togglePlay}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onTimeUpdate={() => expandedVideoRef.current && setProgress(expandedVideoRef.current.currentTime)}
              onLoadedMetadata={() => {
                if (expandedVideoRef.current) {
                  setDuration(expandedVideoRef.current.duration);
                  resetControlsTimer();
                }
              }}
            />
          </div>

          <div className={`t69-play-indicator ${!playing ? 'show' : ''}`}>
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21" /></svg>
          </div>

          <div className={`t69-video-ui ${showControls ? '' : 'hidden'}`} onClick={e => e.stopPropagation()}>
            <div className="t69-progress-bar" onClick={seek}>
              <div className="t69-progress-track">
                <div className="t69-progress-fill" style={{ width: duration ? `${(progress / duration) * 100}%` : '0%' }} />
              </div>
            </div>
            <div className="t69-controls-row">
              <button className="t69-ctrl-btn" onClick={() => skip(-10)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5V1L7 6l5 5V7a6 6 0 1 1-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="t69-skip-label">10</span>
              </button>
              <button className="t69-ctrl-btn play" onClick={togglePlay}>
                {playing ? (
                  <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg>
                )}
              </button>
              <button className="t69-ctrl-btn" onClick={() => skip(10)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5V1l5 5-5 5V7a6 6 0 1 0 6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="t69-skip-label">10</span>
              </button>
              <span className="t69-time">{fmt(progress)} / {fmt(duration)}</span>
            </div>
          </div>

          <button className="t69-close-btn" onClick={closeOverlay}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* GALLERY OVERLAY                                                                 */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {overlay === 'gallery' && (
        <div className="t69-overlay" onClick={closeOverlay}>
          <div className="t69-overlay-content" onClick={e => e.stopPropagation()}>
            <div className="t69-gallery-card">
              <div className="t69-gallery-grid">
                {galleryImages.map((img, i) => (
                  <div key={i} className="t69-gallery-item" onClick={() => openImage(img.src)}>
                    <img src={img.src} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="t69-close-btn" onClick={closeOverlay}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* ARCHITECTURE OVERLAY                                                            */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {overlay === 'arch' && (
        <div className="t69-overlay" onClick={closeOverlay}>
          <div className="t69-overlay-content" onClick={e => e.stopPropagation()}>
            <div className="t69-arch-card">
              <Trade69Architecture />
            </div>
          </div>
          <button className="t69-close-btn" onClick={closeOverlay}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {/* IMAGE OVERLAY                                                                   */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {overlay === 'image' && selectedImage && (
        <div className="t69-overlay" onClick={closeOverlay}>
          <div className="t69-overlay-content" onClick={e => e.stopPropagation()}>
            <div className="t69-image-expanded">
              <img src={selectedImage} alt="" />
            </div>
          </div>
          <button className="t69-close-btn" onClick={closeOverlay}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}