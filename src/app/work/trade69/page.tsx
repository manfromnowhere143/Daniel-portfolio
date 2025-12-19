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

  // Video controls - auto hide after 4 seconds
  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 4000);
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

        * { 
          -webkit-tap-highlight-color: transparent; 
          box-sizing: border-box;
        }
        
        html, body {
          overscroll-behavior: none;
          overscroll-behavior-y: none;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Global animation smoothing */
        @media (prefers-reduced-motion: no-preference) {
          * {
            scroll-behavior: smooth;
          }
        }
        
        .t69-page {
          min-height: 100vh;
          background: var(--t69-bg);
          padding-top: 60px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          overflow-x: hidden;
          overscroll-behavior: none;
          overscroll-behavior-y: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          /* Prevent content jump */
          position: relative;
          isolation: isolate;
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
          transform: translateZ(0) translateY(20px);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .t69-hero.loaded { 
          opacity: 1; 
          transform: translateZ(0) translateY(0); 
        }
        
        .t69-hero-img {
          max-width: clamp(260px, 65vw, 500px);
          margin: 0 auto;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
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
          transform: translateZ(0) scale(0.85) translateY(12px);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .t69-folder-btn.loaded { 
          opacity: 1; 
          transform: translateZ(0) scale(1) translateY(0); 
        }
        .t69-folder-btn:hover { 
          transform: translateZ(0) scale(1.08) translateY(-4px); 
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
        }
        .t69-folder-btn:active { 
          transform: translateZ(0) scale(0.92); 
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        
        .t69-folder-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 3px;
          transform: translateZ(0);
        }
        
        .t69-folder-thumb {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .t69-folder-thumb img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover;
          -webkit-user-drag: none;
        }
        
        .t69-arch-ico { 
          display: flex; 
          align-items: center; 
          justify-content: center;
          transform: translateZ(0);
        }
        .t69-arch-ico svg { 
          width: 38px; 
          height: 38px; 
          color: var(--t69-text-secondary);
          transition: transform 0.3s ease;
        }
        .t69-folder-btn:hover .t69-arch-ico svg {
          transform: scale(1.1);
        }
        
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
        /* OVERLAY SYSTEM - STATE OF THE ART                                               */
        /* Ultra smooth, GPU accelerated, no visual disruptions                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999999;
          background: rgba(0,0,0,0);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 80px;
          animation: t69-overlayIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: background;
          /* Prevent scroll behind */
          touch-action: none;
        }
        
        @keyframes t69-overlayIn {
          0% { background: rgba(0,0,0,0); }
          100% { background: rgba(0,0,0,0.92); }
        }
        
        [data-theme="light"] .t69-overlay {
          animation: t69-overlayInLight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes t69-overlayInLight {
          0% { background: rgba(245,245,240,0); }
          100% { background: rgba(245,245,240,0.96); }
        }

        .t69-overlay-content {
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform, opacity;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          /* Content fades in WITH the background - no flash */
          opacity: 0;
          animation: t69-contentFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes t69-contentFadeIn {
          0% {
            opacity: 0;
            transform: translateZ(0) scale(0.94);
          }
          100% {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
        }

        /* Close Button - Elegant fade in */
        .t69-close-btn {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%) translateZ(0);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000000;
          opacity: 0;
          animation: t69-btnIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s forwards;
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        
        @keyframes t69-btnIn {
          from { 
            opacity: 0; 
            transform: translateX(-50%) translateZ(0) scale(0.7); 
          }
          to { 
            opacity: 1; 
            transform: translateX(-50%) translateZ(0) scale(1); 
          }
        }
        
        [data-theme="light"] .t69-close-btn {
          background: rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.1);
        }
        
        .t69-close-btn:hover { 
          background: rgba(255,255,255,0.2); 
          transform: translateX(-50%) translateZ(0) scale(1.05);
        }
        [data-theme="light"] .t69-close-btn:hover { 
          background: rgba(0,0,0,0.12); 
        }
        
        .t69-close-btn:active { 
          transform: translateX(-50%) translateZ(0) scale(0.92); 
        }
        .t69-close-btn svg { 
          width: 22px; 
          height: 22px; 
          color: white;
          transition: transform 0.2s ease;
        }
        .t69-close-btn:hover svg {
          transform: rotate(90deg);
        }
        [data-theme="light"] .t69-close-btn svg { color: #1a1a1a; }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* VIDEO THEATER - NETFLIX PROUD                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-video-overlay { 
          background: rgba(0,0,0,0) !important;
          padding-bottom: 0 !important;
          animation: t69-videoOverlayIn 0.35s ease forwards !important;
        }
        
        @keyframes t69-videoOverlayIn {
          from { background: rgba(0,0,0,0); }
          to { background: rgba(0,0,0,1); }
        }
        
        .t69-theater {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: none !important;
          opacity: 1 !important;
        }
        
        .t69-theater-video {
          width: 100%;
          height: 100%;
          max-width: 100vw;
          max-height: 100vh;
          object-fit: contain;
          background: #000;
          opacity: 0;
          transform: translateZ(0) scale(0.96);
          animation: t69-videoIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        @keyframes t69-videoIn {
          to {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
        }
        
        @media (min-width: 768px) {
          .t69-theater {
            padding: 60px;
          }
          .t69-theater-video {
            max-width: 1000px;
            max-height: 75vh;
            border-radius: 12px;
            box-shadow: 0 40px 120px rgba(0,0,0,0.8);
          }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* VIDEO CONTROLS - MINIMALIST NETFLIX STYLE                                       */
        /* Auto-hides after 4 seconds, elegant thin controls                               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-video-controls {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0 20px 20px;
          padding-bottom: max(24px, env(safe-area-inset-bottom));
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
          z-index: 1000001;
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.35s ease, transform 0.35s ease;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .t69-video-controls.hidden {
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
        }
        
        @media (min-width: 768px) {
          .t69-video-controls {
            padding: 0 40px 32px;
            padding-bottom: max(32px, env(safe-area-inset-bottom));
            gap: 20px;
          }
        }

        /* Progress bar - thin elegant Netflix style */
        .t69-progress-bar {
          width: 100%;
          cursor: pointer;
          padding: 12px 0;
          margin: 0;
        }
        
        .t69-progress-track {
          width: 100%;
          height: 3px;
          background: rgba(255,255,255,0.2);
          border-radius: 1.5px;
          transition: height 0.2s ease;
          position: relative;
          overflow: visible;
        }
        
        .t69-progress-bar:hover .t69-progress-track { 
          height: 5px; 
        }
        
        .t69-progress-fill {
          height: 100%;
          background: #e50914;
          border-radius: 1.5px;
          position: relative;
          transition: width 0.05s linear;
        }
        
        .t69-progress-fill::after {
          content: '';
          position: absolute;
          right: -7px;
          top: 50%;
          width: 14px;
          height: 14px;
          background: #e50914;
          border-radius: 50%;
          transform: translateY(-50%) scale(0);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        
        .t69-progress-bar:hover .t69-progress-fill::after {
          transform: translateY(-50%) scale(1);
        }

        /* Controls row */
        .t69-controls-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          position: relative;
        }
        
        @media (min-width: 768px) {
          .t69-controls-row { gap: 24px; }
        }
        
        /* Control buttons - ultra thin elegant */
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
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          flex-shrink: 0;
          -webkit-tap-highlight-color: transparent;
        }
        
        .t69-ctrl-btn:hover { 
          background: rgba(255,255,255,0.1); 
          transform: scale(1.12); 
        }
        .t69-ctrl-btn:active { 
          transform: scale(0.92); 
        }
        .t69-ctrl-btn svg { 
          color: white; 
          width: 28px; 
          height: 28px;
          stroke-width: 1.5;
        }
        
        /* Skip buttons - elegant with number */
        .t69-ctrl-btn.skip {
          width: 52px;
          height: 52px;
        }
        
        .t69-ctrl-btn.skip svg {
          width: 32px;
          height: 32px;
        }
        
        .t69-skip-label {
          position: absolute;
          font-size: 10px;
          font-weight: 600;
          color: white;
          bottom: 8px;
          letter-spacing: -0.02em;
          pointer-events: none;
        }
        
        /* Main play button - glass effect */
        .t69-ctrl-btn.play {
          width: 64px;
          height: 64px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        @media (min-width: 768px) {
          .t69-ctrl-btn.play {
            width: 72px;
            height: 72px;
          }
        }
        
        .t69-ctrl-btn.play:hover { 
          background: rgba(255,255,255,0.25);
          border-color: rgba(255,255,255,0.2);
        }
        .t69-ctrl-btn.play svg { 
          width: 28px; 
          height: 28px; 
        }
        
        @media (min-width: 768px) {
          .t69-ctrl-btn.play svg { width: 32px; height: 32px; }
        }

        /* Time display */
        .t69-time {
          position: absolute;
          right: 0;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          font-variant-numeric: tabular-nums;
          font-weight: 400;
          letter-spacing: 0.02em;
        }
        
        .t69-time-current {
          color: rgba(255,255,255,0.9);
        }

        /* Close button - bottom left, minimal */
        .t69-video-close {
          position: fixed;
          bottom: max(24px, env(safe-area-inset-bottom));
          left: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000002;
          opacity: 0;
          transform: translateZ(0) scale(0.8);
          animation: t69-videoCloseFadeIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          transition: background 0.2s ease, transform 0.2s ease, opacity 0.3s ease;
        }
        
        @keyframes t69-videoCloseFadeIn {
          to {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
        }
        
        .t69-video-close.hidden {
          opacity: 0;
          pointer-events: none;
        }
        
        .t69-video-close:hover { 
          background: rgba(255,255,255,0.2); 
          transform: translateZ(0) scale(1.08);
        }
        .t69-video-close:active { 
          transform: translateZ(0) scale(0.92); 
        }
        .t69-video-close svg { 
          width: 18px; 
          height: 18px; 
          color: white;
          stroke-width: 2;
        }
        
        @media (min-width: 768px) {
          .t69-video-close {
            left: 32px;
            bottom: max(32px, env(safe-area-inset-bottom));
            width: 48px;
            height: 48px;
          }
          .t69-video-close svg { width: 20px; height: 20px; }
        }

        /* Play indicator - center of screen */
        .t69-play-indicator {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 1000001;
        }
        
        .t69-play-indicator.show { 
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .t69-play-indicator svg { 
          width: 40px; 
          height: 40px; 
          color: white;
        }
        .t69-play-indicator.play svg { 
          margin-left: 5px; 
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* GALLERY CARD - STATE OF THE ART                                                 */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-gallery-card {
          width: 280px;
          background: var(--t69-card);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          padding: 16px;
          box-shadow: 0 25px 80px rgba(0,0,0,0.4),
                      0 0 0 1px var(--t69-border);
          opacity: 0;
          transform: translateZ(0) scale(0.9);
          animation: t69-galleryCardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.02s forwards;
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          position: relative;
        }
        
        /* Subtle inner glow */
        .t69-gallery-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
          pointer-events: none;
        }
        
        @keyframes t69-galleryCardIn {
          to {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
        }
        
        [data-theme="light"] .t69-gallery-card {
          background: rgba(255,255,255,0.95);
          box-shadow: 0 25px 80px rgba(0,0,0,0.12),
                      0 0 0 1px rgba(0,0,0,0.06);
        }
        
        [data-theme="light"] .t69-gallery-card::before {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.8);
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
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          opacity: 0;
          transform: translateZ(0) scale(0.85);
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          animation: t69-thumbIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      box-shadow 0.25s ease;
        }
        
        .t69-gallery-item:nth-child(1) { animation-delay: 0.12s; }
        .t69-gallery-item:nth-child(2) { animation-delay: 0.16s; }
        .t69-gallery-item:nth-child(3) { animation-delay: 0.20s; }
        .t69-gallery-item:nth-child(4) { animation-delay: 0.24s; }
        .t69-gallery-item:nth-child(5) { animation-delay: 0.28s; }
        .t69-gallery-item:nth-child(6) { animation-delay: 0.32s; }
        .t69-gallery-item:nth-child(7) { animation-delay: 0.36s; }
        .t69-gallery-item:nth-child(8) { animation-delay: 0.40s; }
        .t69-gallery-item:nth-child(9) { animation-delay: 0.44s; }
        
        @keyframes t69-thumbIn {
          to { 
            opacity: 1; 
            transform: translateZ(0) scale(1); 
          }
        }
        
        .t69-gallery-item:hover { 
          transform: translateZ(0) scale(1.08); 
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .t69-gallery-item:active { 
          transform: translateZ(0) scale(0.95); 
        }
        .t69-gallery-item img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          display: block;
          pointer-events: none;
          -webkit-user-drag: none;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* ARCHITECTURE CARD - STATE OF THE ART                                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-arch-card {
          width: 280px;
          aspect-ratio: 1;
          background: linear-gradient(145deg, #0c0c10 0%, #0a0a0e 100%);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 80px rgba(0,0,0,0.5), 
                      0 0 0 1px rgba(255,255,255,0.06),
                      inset 0 1px 0 rgba(255,255,255,0.05);
          overflow: hidden;
          opacity: 0;
          transform: translateZ(0) scale(0.92);
          animation: t69-archIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          position: relative;
        }
        
        /* Subtle animated gradient background */
        .t69-arch-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 20%, rgba(100,100,255,0.05) 0%, transparent 50%),
                      radial-gradient(ellipse at 70% 80%, rgba(255,100,100,0.03) 0%, transparent 50%);
          opacity: 0;
          animation: t69-archGlow 0.8s ease 0.3s forwards;
        }
        
        @keyframes t69-archGlow {
          to { opacity: 1; }
        }
        
        /* Content inside card animates in */
        .t69-arch-card > * {
          opacity: 0;
          transform: translateZ(0) scale(0.95);
          animation: t69-archContentIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        @keyframes t69-archContentIn {
          to {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
        }
        
        @keyframes t69-archIn {
          to {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
        }
        
        [data-theme="light"] .t69-arch-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8f8f6 100%);
          box-shadow: 0 25px 80px rgba(0,0,0,0.12), 
                      0 0 0 1px rgba(0,0,0,0.06),
                      inset 0 1px 0 rgba(255,255,255,0.8);
        }
        
        [data-theme="light"] .t69-arch-card::before {
          background: radial-gradient(ellipse at 30% 20%, rgba(100,100,255,0.08) 0%, transparent 50%),
                      radial-gradient(ellipse at 70% 80%, rgba(255,100,100,0.05) 0%, transparent 50%);
        }
        
        @media (min-width: 400px) {
          .t69-arch-card { width: 320px; }
        }
        @media (min-width: 768px) {
          .t69-arch-card { width: 400px; border-radius: 28px; }
        }
        
        /* SVG/Mermaid diagram styling */
        .t69-arch-card svg {
          max-width: 90%;
          max-height: 90%;
          color: var(--t69-text);
        }
        
        .t69-arch-card .mermaid {
          transform: translateZ(0);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* IMAGE EXPANDED - STATE OF THE ART                                               */
        /* Smooth, elegant, no visual disruptions                                          */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-image-expanded {
          max-width: calc(100vw - 32px);
          max-height: 75vh;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.6),
                      0 0 0 1px rgba(255,255,255,0.05);
          opacity: 0;
          transform: translateZ(0) scale(0.85);
          animation: t69-imageIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          position: relative;
        }
        
        /* Subtle shine effect */
        .t69-image-expanded::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
          pointer-events: none;
        }
        
        @keyframes t69-imageIn {
          0% {
            opacity: 0;
            transform: translateZ(0) scale(0.85);
          }
          100% {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
        }
        
        [data-theme="light"] .t69-image-expanded {
          box-shadow: 0 40px 100px rgba(0,0,0,0.2),
                      0 0 0 1px rgba(0,0,0,0.05);
        }
        
        [data-theme="light"] .t69-image-expanded::after {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
        }
        
        .t69-image-expanded img {
          display: block;
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          -webkit-user-drag: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        @media (min-width: 768px) {
          .t69-image-expanded { max-width: 700px; border-radius: 20px; }
        }
        @media (min-width: 1024px) {
          .t69-image-expanded { max-width: 800px; }
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
      {/* VIDEO OVERLAY - NETFLIX PROUD                                                   */}
      {/* ═══════════════════════════════════════════════════════════════════════════════ */}
      {overlay === 'video' && (
        <div
          className="t69-overlay t69-video-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowControls(prev => !prev);
              resetControlsTimer();
            }
          }}
          onMouseMove={resetControlsTimer}
          onTouchStart={resetControlsTimer}
        >
          {/* Video container */}
          <div className="t69-overlay-content t69-theater">
            <video
              ref={expandedVideoRef}
              className="t69-theater-video"
              src="/videos/t69demo.mp4"
              autoPlay
              playsInline
              loop
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
                resetControlsTimer();
              }}
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

          {/* Play indicator (shows when paused) */}
          <div className={`t69-play-indicator play ${!playing ? 'show' : ''}`}>
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21" /></svg>
          </div>

          {/* Close button - bottom left, hides with controls */}
          <button
            className={`t69-video-close ${showControls ? '' : 'hidden'}`}
            onClick={closeOverlay}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Controls - bottom gradient bar, auto-hides after 4s */}
          <div className={`t69-video-controls ${showControls ? '' : 'hidden'}`} onClick={e => e.stopPropagation()}>
            {/* Progress bar */}
            <div className="t69-progress-bar" onClick={seek}>
              <div className="t69-progress-track">
                <div className="t69-progress-fill" style={{ width: duration ? `${(progress / duration) * 100}%` : '0%' }} />
              </div>
            </div>

            {/* Control buttons */}
            <div className="t69-controls-row">
              {/* Skip back 10s */}
              <button className="t69-ctrl-btn skip" onClick={() => skip(-10)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12.5 8V4L7 8.5l5.5 4.5V9a5 5 0 1 1-5 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="t69-skip-label">10</span>
              </button>

              {/* Play/Pause */}
              <button className="t69-ctrl-btn play" onClick={togglePlay}>
                {playing ? (
                  <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21"/></svg>
                )}
              </button>

              {/* Skip forward 10s */}
              <button className="t69-ctrl-btn skip" onClick={() => skip(10)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11.5 8V4l5.5 4.5-5.5 4.5V9a5 5 0 1 0 5 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="t69-skip-label">10</span>
              </button>

              {/* Time display */}
              <span className="t69-time">
                <span className="t69-time-current">{fmt(progress)}</span> / {fmt(duration)}
              </span>
            </div>
          </div>
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