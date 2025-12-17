"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import FadeImage from "@/components/FadeImage";
import Trade69Architecture from "@/components/Trade69Architecture";

// ═══════════════════════════════════════════════════════════════════════════════
// STATE OF THE ART - TRADE69 PROJECT PAGE
// Refined luxury aesthetic with Apple-level interactions
// ═══════════════════════════════════════════════════════════════════════════════

const galleryImages = [
  { src: "/images/t69hero4.png", name: "Command Center" },
  { src: "/images/t69dash1.png", name: "Signal Analysis" },
  { src: "/images/t69dash2.png", name: "Market Intelligence" },
  { src: "/images/t69dash3.png", name: "Portfolio View" },
  { src: "/images/t69dash4.png", name: "Risk Metrics" },
  { src: "/images/tphoto2.png", name: "Analytics Suite" },
  { src: "/images/tphoto3.png", name: "Backtesting Engine" },
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
  {
    num: "01",
    title: "Signal Detection",
    desc: "Composite scoring combining sentiment, options flow, dark pool activity, and technical indicators"
  },
  {
    num: "02",
    title: "Regime Detection",
    desc: "Hidden Markov Model identifying BULL, BEAR, NEUTRAL states for adaptive strategy"
  },
  {
    num: "03",
    title: "Machine Learning",
    desc: "Random Forest with 25 features: signal metrics, Greeks, liquidity, regime state"
  },
  {
    num: "04",
    title: "Risk Management",
    desc: "Kelly Criterion sizing with sector limits and correlation tracking"
  }
];

type AnimationState = 'idle' | 'entering' | 'active' | 'exiting';

export default function Trade69() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [videoAnimState, setVideoAnimState] = useState<AnimationState>('idle');
  const [expandedImage, setExpandedImage] = useState<{ src: string; name: string } | null>(null);
  const [imageAnimState, setImageAnimState] = useState<AnimationState>('idle');

  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  const videoTimeRef = useRef<number>(0);
  const videoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (videoTimeoutRef.current) clearTimeout(videoTimeoutRef.current);
      if (imageTimeoutRef.current) clearTimeout(imageTimeoutRef.current);
      document.body.style.overflow = '';
    };
  }, []);

  // Lock scroll when overlays are open
  useEffect(() => {
    if (videoAnimState !== 'idle' || imageAnimState !== 'idle') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [videoAnimState, imageAnimState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // VIDEO EXPAND HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleExpandVideo = useCallback(() => {
    if (videoAnimState !== 'idle') return;

    // Store current video time
    if (videoRef.current) {
      videoTimeRef.current = videoRef.current.currentTime;
      videoRef.current.pause();
    }

    setVideoExpanded(true);
    setVideoAnimState('entering');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVideoAnimState('active');
        // Sync expanded video to same time
        if (expandedVideoRef.current) {
          expandedVideoRef.current.currentTime = videoTimeRef.current;
          expandedVideoRef.current.play();
        }
      });
    });
  }, [videoAnimState]);

  const handleCloseVideo = useCallback(() => {
    if (videoAnimState !== 'active') return;

    // Store expanded video time
    if (expandedVideoRef.current) {
      videoTimeRef.current = expandedVideoRef.current.currentTime;
      expandedVideoRef.current.pause();
    }

    setVideoAnimState('exiting');

    videoTimeoutRef.current = setTimeout(() => {
      setVideoExpanded(false);
      setVideoAnimState('idle');
      // Sync inline video
      if (videoRef.current) {
        videoRef.current.currentTime = videoTimeRef.current;
      }
    }, 400);
  }, [videoAnimState]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // IMAGE EXPAND HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleOpenImage = useCallback((image: { src: string; name: string }) => {
    if (imageAnimState !== 'idle') return;

    setExpandedImage(image);
    setImageAnimState('entering');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setImageAnimState('active');
      });
    });
  }, [imageAnimState]);

  const handleCloseImage = useCallback(() => {
    if (imageAnimState !== 'active') return;

    setImageAnimState('exiting');

    imageTimeoutRef.current = setTimeout(() => {
      setExpandedImage(null);
      setImageAnimState('idle');
    }, 400);
  }, [imageAnimState]);

  const getVideoAnimClass = () => {
    switch (videoAnimState) {
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

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - TYPOGRAPHY & BASE                                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-page {
          padding-top: 60px;
          min-height: 100vh;
          background-color: #050506;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }
        
        .t69-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px clamp(50px, 8vh, 80px);
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .t69-hero.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        .t69-title {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 200;
          color: #FAFAF8;
          margin-bottom: clamp(24px, 4vh, 40px);
          letter-spacing: -0.03em;
          line-height: 1;
        }
        
        .t69-hero-image {
          max-width: clamp(300px, 75vw, 580px);
          margin: clamp(30px, 5vh, 50px) auto 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.06),
            0 40px 100px rgba(0, 0, 0, 0.7),
            0 20px 50px rgba(0, 0, 0, 0.5);
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }
        
        .t69-hero.loaded .t69-hero-image {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - VIDEO SECTION WITH EXPAND                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-video-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px clamp(60px, 10vh, 100px);
        }
        
        .t69-video-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.06),
            0 30px 80px rgba(0, 0, 0, 0.6);
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
        
        .t69-video-expand-btn:active {
          transform: scale(0.95);
        }
        
        .t69-video-expand-btn svg {
          width: 18px;
          height: 18px;
          color: white;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - PREMIUM GALLERY                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-gallery-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px clamp(80px, 12vh, 120px);
        }
        
        .t69-section-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(250, 250, 248, 0.4);
          text-align: center;
          margin-bottom: clamp(30px, 5vh, 50px);
        }
        
        .t69-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: 20px;
        }
        
        .t69-gallery-item {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 16/10;
          background: #0a0a0a;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.04),
            0 10px 40px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease;
        }
        
        .t69-gallery-item:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 20px 60px rgba(0, 0, 0, 0.5);
        }
        
        .t69-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .t69-gallery-item:hover img {
          transform: scale(1.05);
        }
        
        .t69-gallery-item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 16px 16px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .t69-gallery-item:hover .t69-gallery-item-overlay {
          opacity: 1;
        }
        
        .t69-gallery-item-name {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.02em;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - 3D ARCHITECTURE SECTION (FLOATING)                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-architecture-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
        }
        
        .t69-architecture-section canvas {
          background: transparent !important;
        }
        
        .t69-architecture-section > div > div {
          background: transparent !important;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - OVERVIEW SECTION                                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-overview-section {
          max-width: 720px;
          margin: 0 auto;
          padding: clamp(80px, 12vh, 140px) 24px;
        }
        
        .t69-overview-text {
          font-size: clamp(16px, 2.2vw, 20px);
          font-weight: 300;
          color: rgba(250, 250, 248, 0.85);
          line-height: 1.8;
          margin-bottom: clamp(20px, 3vh, 32px);
        }
        
        .t69-overview-text:last-child {
          margin-bottom: 0;
        }
        
        .t69-overview-text em {
          font-style: normal;
          color: #FAFAF8;
          font-weight: 400;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - DATA COLLECTION SECTION                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
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
          padding: clamp(14px, 2vh, 20px) 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        
        .t69-data-item:last-child {
          border-bottom: none;
        }
        
        .t69-data-num {
          font-size: 10px;
          font-weight: 400;
          color: rgba(250, 250, 248, 0.25);
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
        }
        
        .t69-data-source {
          font-size: clamp(13px, 1.6vw, 15px);
          font-weight: 400;
          color: rgba(250, 250, 248, 0.9);
          letter-spacing: 0.01em;
        }
        
        .t69-data-desc {
          font-size: clamp(12px, 1.4vw, 14px);
          font-weight: 300;
          color: rgba(250, 250, 248, 0.5);
          line-height: 1.5;
        }
        
        @media (max-width: 600px) {
          .t69-data-item {
            grid-template-columns: 28px 1fr;
            grid-template-rows: auto auto;
          }
          
          .t69-data-desc {
            grid-column: 2;
            margin-top: 4px;
          }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - INTELLIGENCE SECTION                                         */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-intelligence-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(80px, 12vh, 140px) 24px;
        }
        
        .t69-intelligence-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: clamp(40px, 6vw, 60px);
        }
        
        .t69-intelligence-item {
          text-align: center;
        }
        
        .t69-intelligence-num {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto clamp(16px, 2.5vh, 24px);
          background: rgba(255, 255, 255, 0.02);
        }
        
        .t69-intelligence-num span {
          font-size: 12px;
          font-weight: 300;
          color: rgba(250, 250, 248, 0.6);
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
        }
        
        .t69-intelligence-title {
          font-size: clamp(14px, 1.6vw, 16px);
          font-weight: 400;
          color: #FAFAF8;
          margin-bottom: 10px;
          letter-spacing: 0.01em;
        }
        
        .t69-intelligence-desc {
          font-size: 13px;
          font-weight: 300;
          color: rgba(250, 250, 248, 0.5);
          line-height: 1.7;
          max-width: 240px;
          margin: 0 auto;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - STACK & NAVIGATION                                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-stack-section {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
          text-align: center;
        }
        
        .t69-stack-list {
          font-size: clamp(12px, 1.4vw, 14px);
          font-weight: 300;
          color: rgba(250, 250, 248, 0.5);
          line-height: 2.2;
          letter-spacing: 0.03em;
        }
        
        .t69-nav {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: clamp(40px, 6vh, 60px) 24px;
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
          color: rgba(250, 250, 248, 0.5);
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        
        .t69-nav-link:hover {
          color: #FAFAF8;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - VIDEO EXPANDED OVERLAY                                       */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .video-expanded-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(5, 5, 6, 0.95);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: none;
        }
        
        .video-expanded-overlay.entering {
          visibility: visible;
          pointer-events: auto;
          opacity: 0;
        }
        
        .video-expanded-overlay.active {
          visibility: visible;
          pointer-events: auto;
          opacity: 1;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .video-expanded-overlay.exiting {
          visibility: visible;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .video-expanded-container {
          width: 100%;
          max-width: 1100px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 50px 150px rgba(0, 0, 0, 0.8);
          opacity: 0;
          transform: scale(0.92);
          transition: none;
        }
        
        .video-expanded-overlay.active .video-expanded-container {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.05s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
        }
        
        .video-expanded-overlay.exiting .video-expanded-container {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .video-expanded-container video {
          width: 100%;
          display: block;
        }
        
        .video-expanded-close {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          transition: none;
        }
        
        .video-expanded-overlay.active .video-expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s, background 0.2s ease;
        }
        
        .video-expanded-overlay.exiting .video-expanded-close {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .video-expanded-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .video-expanded-close svg {
          width: 20px;
          height: 20px;
          color: white;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - IMAGE EXPANDED OVERLAY                                       */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .image-expanded-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(5, 5, 6, 0.95);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: none;
        }
        
        .image-expanded-overlay.entering {
          visibility: visible;
          pointer-events: auto;
          opacity: 0;
        }
        
        .image-expanded-overlay.active {
          visibility: visible;
          pointer-events: auto;
          opacity: 1;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .image-expanded-overlay.exiting {
          visibility: visible;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .image-expanded-content {
          max-width: 1000px;
          max-height: 80vh;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 50px 150px rgba(0, 0, 0, 0.8);
          opacity: 0;
          transform: scale(0.92);
          transition: none;
        }
        
        .image-expanded-overlay.active .image-expanded-content {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.05s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
        }
        
        .image-expanded-overlay.exiting .image-expanded-content {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        
        .image-expanded-content img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          display: block;
        }
        
        .image-expanded-name {
          margin-top: 20px;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.05em;
          opacity: 0;
          transform: translateY(10px);
          transition: none;
        }
        
        .image-expanded-overlay.active .image-expanded-name {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s;
        }
        
        .image-expanded-close {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          transition: none;
        }
        
        .image-expanded-overlay.active .image-expanded-close {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s, background 0.2s ease;
        }
        
        .image-expanded-overlay.exiting .image-expanded-close {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.15s ease, transform 0.2s ease;
        }
        
        .image-expanded-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .image-expanded-close svg {
          width: 20px;
          height: 20px;
          color: white;
        }
      `}</style>

      <div className="t69-page">
        {/* Hero Section */}
        <div className={`t69-hero ${isLoaded ? 'loaded' : ''}`}>
          <h1 className="t69-title">Trade69</h1>

          <div className="t69-hero-image">
            <FadeImage
              src="/images/t69hero4.png"
              alt="Trade69 Dashboard"
              width={580}
              height={380}
              priority
            />
          </div>
        </div>

        {/* Video Section */}
        <div className="t69-video-section">
          <div className="t69-video-container">
            <video
              ref={videoRef}
              src="/videos/t69demo.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <button className="t69-video-expand-btn" onClick={handleExpandVideo}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="t69-gallery-section">
          <p className="t69-section-label">Dashboard Gallery</p>
          <div className="t69-gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="t69-gallery-item"
                onClick={() => handleOpenImage(image)}
              >
                <img src={image.src} alt={image.name} />
                <div className="t69-gallery-item-overlay">
                  <span className="t69-gallery-item-name">{image.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Architecture Section */}
        <div className="t69-architecture-section">
          <p className="t69-section-label">System Architecture</p>
          <Trade69Architecture />
        </div>

        {/* Overview Section */}
        <div className="t69-overview-section">
          <p className="t69-overview-text">
            End-to-end <em>algorithmic trading platform</em> integrating multi-source market intelligence,
            machine learning, and quantitative risk management.
          </p>
          <p className="t69-overview-text">
            Trading system that aggregates data from <em>social sentiment</em>, news APIs,
            dark pool activity, and market data to generate autonomous trading signals.
          </p>
          <p className="t69-overview-text">
            The system employs <em>Hidden Markov Models</em> for market regime detection,
            Random Forest classifiers for signal prediction, and <em>Kelly Criterion</em>
            for position sizing. All operating without manual intervention.
          </p>
        </div>

        {/* Data Collection Section */}
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

        {/* Intelligence Section */}
        <div className="t69-intelligence-section">
          <p className="t69-section-label">Intelligence Layer</p>
          <div className="t69-intelligence-grid">
            {intelligenceSteps.map((item, index) => (
              <div key={index} className="t69-intelligence-item">
                <div className="t69-intelligence-num">
                  <span>{item.num}</span>
                </div>
                <h3 className="t69-intelligence-title">{item.title}</h3>
                <p className="t69-intelligence-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Section */}
        <div className="t69-stack-section">
          <p className="t69-section-label">Technology Stack</p>
          <p className="t69-stack-list">
            Python · PostgreSQL · TimescaleDB · Redis · scikit-learn · hmmlearn · Dash · Plotly · Alpaca · ThetaData · GPT-4
          </p>
        </div>

        {/* Navigation */}
        <nav className="t69-nav">
          <div className="t69-nav-inner">
            <Link href="/work" className="t69-nav-link">
              ← Work
            </Link>
            <Link href="/work/megaagent" className="t69-nav-link">
              MegaAgent →
            </Link>
          </div>
        </nav>
      </div>

      {/* Video Expanded Overlay */}
      {videoExpanded && (
        <div
          className={`video-expanded-overlay ${getVideoAnimClass()}`}
          onClick={handleCloseVideo}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(5, 5, 6, 0.95)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
          }}
        >
          <div
            className="video-expanded-container"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '1100px',
              margin: '0 24px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 50px 150px rgba(0, 0, 0, 0.8)',
            }}
          >
            <video
              ref={expandedVideoRef}
              src="/videos/t69demo.mp4"
              autoPlay
              loop
              playsInline
              controls
              style={{ width: '100%', display: 'block' }}
            />
          </div>
          <button
            className="video-expanded-close"
            onClick={handleCloseVideo}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {/* Image Expanded Overlay */}
      {expandedImage && (
        <div className={`image-expanded-overlay ${getImageAnimClass()}`} onClick={handleCloseImage}>
          <div className="image-expanded-content" onClick={(e) => e.stopPropagation()}>
            <img src={expandedImage.src} alt={expandedImage.name} />
          </div>
          <span className="image-expanded-name">{expandedImage.name}</span>
          <button className="image-expanded-close" onClick={handleCloseImage}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}