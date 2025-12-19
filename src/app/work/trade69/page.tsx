"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic import for the 3D architecture visualization
const Trade69Architecture = dynamic(() => import("@/components/Trade69Architecture"), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: 40,
        height: 40,
        border: '2px solid rgba(255,255,255,0.1)',
        borderTopColor: 'rgba(255,255,255,0.5)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
    </div>
  )
});

export default function Trade69() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [archOpen, setArchOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [pendingImage, setPendingImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);

  // Preload image before showing
  const handleImageSelect = (src: string) => {
    setPendingImage(src);
    setImageLoaded(false);

    const img = new Image();
    img.onload = () => {
      setSelectedImage(src);
      setImageLoaded(true);
      setPendingImage(null);
    };
    img.src = src;
  };

  const handleImageClose = () => {
    setSelectedImage(null);
    setImageLoaded(false);
    setPendingImage(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = '';
    setTimeout(() => setIsLoaded(true), 100);
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Gallery images - correct file names
  const galleryImages = [
    "/images/t69dash1.png",
    "/images/t69dash2.png",
    "/images/t69dash3.png",
    "/images/t69dash4.png",
    "/images/t69hero3.png",
    "/images/tphoto1.png",
    "/images/tphoto2.png",
    "/images/tphoto3.png",
    "/images/t69app3.png",
  ];

  const openVideo = () => {
    setVideoExpanded(true);
    if (videoRef.current) videoRef.current.pause();
  };

  const closeVideo = () => {
    setVideoExpanded(false);
    if (expandedVideoRef.current) expandedVideoRef.current.pause();
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* TRADE69 - VOID ELEGANCE                                                         */
        /* Pure white on void black. Apple-smooth springs. Elon Musk approved.             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --t69-bg: #000000;
          --t69-bg-elevated: #0a0a0a;
          --t69-text: #FFFFFF;
          --t69-border: rgba(255, 255, 255, 0.12);
          --t69-border-hover: rgba(255, 255, 255, 0.25);
        }
        
        [data-theme="light"] {
          --t69-bg: #FAFAFA;
          --t69-bg-elevated: #FFFFFF;
          --t69-text: #000000;
          --t69-border: rgba(0, 0, 0, 0.1);
          --t69-border-hover: rgba(0, 0, 0, 0.2);
        }

        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          position: static !important;
          overscroll-behavior: none;
          overflow: hidden;
          touch-action: none;
        }

        .t69-page {
          position: fixed !important;
          inset: 0 !important;
          background: var(--t69-bg);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(20px, 3.5vh, 36px);
          padding: 60px 20px 80px;
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .t69-page.loaded { opacity: 1; }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FLOATING TITLE - Pure white presence                                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-title {
          font-size: clamp(28px, 6vw, 52px);
          font-weight: 100;
          color: var(--t69-text);
          letter-spacing: 0.3em;
          margin: 0;
          text-transform: uppercase;
          opacity: 0;
          animation: t69-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
        }
        
        .t69-tagline {
          font-size: clamp(11px, 2vw, 14px);
          font-weight: 300;
          color: var(--t69-text);
          letter-spacing: 0.2em;
          margin: clamp(-12px, -1.5vh, -8px) 0 0;
          text-transform: uppercase;
          opacity: 0;
          animation: t69-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        }
        
        /* Apple-like spring animation */
        @keyframes t69-spring-up {
          0% { opacity: 0; transform: translateY(30px) scale(0.96); }
          60% { transform: translateY(-4px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* MEDIA SECTION - Video + Action Orbs                                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-media {
          display: flex;
          align-items: center;
          gap: clamp(16px, 3vw, 28px);
          opacity: 0;
          animation: t69-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
        }

        /* Video Container - Cinematic void */
        .t69-video-thumb {
          width: clamp(180px, 35vw, 320px);
          aspect-ratio: 16/9;
          border-radius: clamp(12px, 2vw, 20px);
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: #000;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.08),
            0 25px 80px rgba(0,0,0,0.8);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .t69-video-thumb:hover {
          transform: scale(1.03) translateY(-6px);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.15),
            0 35px 100px rgba(0,0,0,0.9);
        }
        
        .t69-video-thumb:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
        
        .t69-video-thumb video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .t69-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(44px, 7vw, 56px);
          height: clamp(44px, 7vw, 56px);
          background: rgba(255,255,255,0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.5);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .t69-video-thumb:hover .t69-play-btn {
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        .t69-play-btn svg {
          width: clamp(16px, 2.5vw, 20px);
          height: clamp(16px, 2.5vw, 20px);
          margin-left: 2px;
          color: #000;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* ACTION ORBS - Deep space aesthetic                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-actions {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 2vw, 18px);
        }
        
        .t69-action-btn {
          width: clamp(60px, 11vw, 80px);
          height: clamp(60px, 11vw, 80px);
          border-radius: clamp(16px, 3vw, 22px);
          border: none;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          overflow: hidden;
        }
        
        /* Gallery Orb - Deep indigo void */
        .t69-action-btn.gallery {
          background: linear-gradient(145deg, 
            #12091f 0%, 
            #1a0d2e 40%,
            #24123d 70%,
            #1a0d2e 100%
          );
          box-shadow: 
            0 0 0 1px rgba(100, 80, 160, 0.25),
            0 10px 40px rgba(26, 13, 46, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }
        
        .t69-action-btn.gallery:hover {
          transform: scale(1.08) translateY(-5px);
          box-shadow: 
            0 0 0 1px rgba(100, 80, 160, 0.4),
            0 20px 60px rgba(26, 13, 46, 0.9),
            0 0 60px rgba(100, 80, 160, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }
        
        /* System Orb - Deep emerald void */
        .t69-action-btn.system {
          background: linear-gradient(145deg, 
            #051414 0%, 
            #082020 40%,
            #0c2d2d 70%,
            #082020 100%
          );
          box-shadow: 
            0 0 0 1px rgba(40, 120, 120, 0.25),
            0 10px 40px rgba(8, 32, 32, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        
        .t69-action-btn.system:hover {
          transform: scale(1.08) translateY(-5px);
          box-shadow: 
            0 0 0 1px rgba(40, 120, 120, 0.4),
            0 20px 60px rgba(8, 32, 32, 0.9),
            0 0 60px rgba(40, 120, 120, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }
        
        .t69-action-btn:active {
          transform: scale(0.95) !important;
          transition: transform 0.1s ease !important;
        }
        
        .t69-action-btn svg {
          width: clamp(22px, 4vw, 28px);
          height: clamp(22px, 4vw, 28px);
          color: #FFFFFF;
        }
        
        .t69-action-btn span {
          font-size: clamp(8px, 1.3vw, 10px);
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        
        /* Subtle inner highlight */
        .t69-action-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.12) 0%, transparent 50%);
          pointer-events: none;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FLOATING PILLS - Pure white elegance                                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(8px, 1.2vw, 12px);
          justify-content: center;
          max-width: 700px;
        }
        
        .t69-pill {
          font-size: clamp(10px, 1.8vw, 13px);
          font-weight: 300;
          letter-spacing: 0.04em;
          color: var(--t69-text);
          padding: clamp(6px, 1vh, 10px) clamp(14px, 2.5vw, 20px);
          background: transparent;
          border: 1px solid var(--t69-border);
          border-radius: 100px;
          white-space: nowrap;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          opacity: 0;
          animation: t69-pill-spring 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .t69-pill:nth-child(1) { animation-delay: 0.5s; }
        .t69-pill:nth-child(2) { animation-delay: 0.55s; }
        .t69-pill:nth-child(3) { animation-delay: 0.6s; }
        .t69-pill:nth-child(4) { animation-delay: 0.65s; }
        .t69-pill:nth-child(5) { animation-delay: 0.7s; }
        .t69-pill:nth-child(7) { animation-delay: 0.75s; }
        .t69-pill:nth-child(8) { animation-delay: 0.8s; }
        .t69-pill:nth-child(9) { animation-delay: 0.85s; }
        .t69-pill:nth-child(10) { animation-delay: 0.9s; }
        .t69-pill:nth-child(12) { animation-delay: 0.95s; }
        .t69-pill:nth-child(13) { animation-delay: 1.0s; }
        .t69-pill:nth-child(14) { animation-delay: 1.05s; }
        .t69-pill:nth-child(15) { animation-delay: 1.1s; }
        .t69-pill:nth-child(16) { animation-delay: 1.15s; }
        
        @keyframes t69-pill-spring {
          0% { opacity: 0; transform: translateY(16px) scale(0.9); }
          60% { transform: translateY(-3px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .t69-pill:hover {
          background: rgba(255,255,255,0.08);
          border-color: var(--t69-border-hover);
          transform: translateY(-3px) scale(1.03);
        }
        
        [data-theme="light"] .t69-pill:hover {
          background: rgba(0,0,0,0.04);
        }
        
        .t69-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--t69-text);
          opacity: 0;
          align-self: center;
          margin: 0 4px;
          animation: t69-dot-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.72s;
        }
        
        .t69-dot:nth-of-type(2) { animation-delay: 0.92s; }
        
        @keyframes t69-dot-pop {
          0% { opacity: 0; transform: scale(0); }
          60% { transform: scale(1.5); }
          100% { opacity: 0.2; transform: scale(1); }
        }

        /* Description - Pure white */
        .t69-desc {
          font-size: clamp(11px, 2vw, 14px);
          font-weight: 300;
          letter-spacing: 0.02em;
          color: var(--t69-text);
          line-height: 1.7;
          text-align: center;
          max-width: 480px;
          opacity: 0;
          animation: t69-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards;
        }
        
        .t69-desc em {
          font-style: normal;
          font-weight: 500;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* NAVIGATION - Pure white, above sidebar                                          */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-nav {
          position: fixed;
          bottom: clamp(85px, 11vh, 100px);
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: clamp(80px, 25vw, 200px);
          z-index: 10;
          opacity: 0;
          animation: t69-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s forwards;
        }
        
        .t69-nav a {
          font-size: clamp(11px, 1.8vw, 13px);
          font-weight: 400;
          color: var(--t69-text);
          text-decoration: none;
          letter-spacing: 0.05em;
          opacity: 0.7;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .t69-nav a:hover {
          opacity: 1;
          transform: translateX(5px);
        }
        
        .t69-nav a:first-child:hover {
          transform: translateX(-5px);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* OVERLAYS - Zero-flash smooth transitions                                        */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.98);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          opacity: 0;
          animation: t69-overlay-fade 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: opacity;
          transform: translateZ(0);
        }
        
        @keyframes t69-overlay-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        [data-theme="light"] .t69-overlay {
          background: rgba(250,250,250,0.98);
        }
        
        .t69-close {
          position: fixed;
          bottom: clamp(20px, 4vh, 36px);
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          z-index: 1001;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          animation: t69-close-fade 0.3s ease 0.15s forwards;
        }
        
        @keyframes t69-close-fade {
          from { opacity: 0; transform: translateX(-50%) scale(0.9); }
          to { opacity: 1; transform: translateX(-50%) scale(1); }
        }
        
        [data-theme="light"] .t69-close {
          background: rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.1);
        }
        
        .t69-close:hover {
          background: rgba(255,255,255,0.2);
          transform: translateX(-50%) scale(1.1);
        }
        
        .t69-close:active {
          transform: translateX(-50%) scale(0.95);
          transition: transform 0.1s ease;
        }
        
        .t69-close svg {
          width: 22px;
          height: 22px;
          color: #FFFFFF;
        }
        
        [data-theme="light"] .t69-close svg {
          color: #000000;
        }

        /* Video Theater - Smooth entrance */
        .t69-theater {
          width: 92vw;
          max-width: 1000px;
          aspect-ratio: 16/9;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.08),
            0 60px 160px rgba(0,0,0,0.9);
          opacity: 0;
          transform: scale(0.96);
          animation: t69-card-smooth 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .t69-theater video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Gallery Card - Elegant with header like Octopus */
        .t69-gallery-card {
          width: clamp(300px, 80vw, 380px);
          max-height: 75vh;
          background: rgba(10, 10, 12, 0.98);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 
            0 60px 160px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.05);
          opacity: 0;
          transform: scale(0.96);
          animation: t69-card-smooth 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform, opacity;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          overflow: hidden;
        }
        
        @keyframes t69-card-smooth {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        [data-theme="light"] .t69-gallery-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 60px 160px rgba(0,0,0,0.2);
        }
        
        .t69-gallery-header {
          padding: clamp(14px, 2.5vw, 20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-align: center;
        }
        
        [data-theme="light"] .t69-gallery-header {
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        
        .t69-gallery-title {
          font-size: clamp(11px, 1.8vw, 13px);
          font-weight: 400;
          color: var(--t69-text);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }
        
        .t69-gallery-scroll {
          padding: clamp(14px, 2.5vw, 20px);
          max-height: calc(75vh - 60px);
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .t69-gallery-scroll::-webkit-scrollbar {
          display: none;
        }
        
        .t69-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(6px, 1.2vw, 10px);
        }
        
        .t69-gallery-item {
          aspect-ratio: 1;
          border-radius: clamp(8px, 1.5vw, 12px);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          position: relative;
          background: #0a0a0a;
        }
        
        .t69-gallery-item:hover {
          transform: scale(1.08);
          z-index: 10;
          box-shadow: 0 12px 40px rgba(0,0,0,0.6);
        }
        
        .t69-gallery-item:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
        
        .t69-gallery-item.loading {
          pointer-events: none;
        }
        
        .t69-gallery-item.loading img {
          opacity: 0.5;
        }
        
        .t69-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          animation: t69-img-fade 0.3s ease 0.1s forwards;
          transition: opacity 0.2s ease;
        }
        
        @keyframes t69-img-fade {
          to { opacity: 1; }
        }
        
        /* Loading overlay on gallery item */
        .t69-gallery-loader {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        
        .t69-spinner {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: rgba(255,255,255,0.9);
          border-radius: 50%;
          animation: t69-spin 0.8s linear infinite;
        }
        
        @keyframes t69-spin {
          to { transform: rotate(360deg); }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* 3D ARCHITECTURE - Canvas Container - Fits screen perfectly                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-arch-card {
          width: clamp(280px, 70vw, 380px);
          height: clamp(280px, 70vw, 380px);
          max-width: calc(100vh - 200px);
          max-height: calc(100vh - 200px);
          background: #000000;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 40px 120px rgba(0,0,0,0.9),
            inset 0 0 80px rgba(255,255,255,0.02);
          opacity: 0;
          transform: scale(0.96);
          animation: t69-card-smooth 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        [data-theme="light"] .t69-arch-card {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 40px 120px rgba(0,0,0,0.5);
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Image Expanded - Zero flash crossfade */
        .t69-image-full {
          position: absolute;
          max-width: calc(100vw - 32px);
          max-height: 80vh;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.08),
            0 60px 160px rgba(0,0,0,0.9);
          opacity: 0;
          transform: scale(1) translateZ(0);
          animation: t69-image-crossfade 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform, opacity;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        
        @keyframes t69-image-crossfade {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .t69-image-full img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          display: block;
        }
        
        [data-theme="light"] .t69-image-full {
          background: #f5f5f3;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* RESPONSIVE                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 768px) {
          .t69-page {
            gap: clamp(28px, 4vh, 48px);
          }
          
          .t69-actions {
            flex-direction: row;
            gap: clamp(20px, 3vw, 32px);
          }
        }
        
        @media (max-height: 700px) {
          .t69-page {
            gap: clamp(12px, 2vh, 20px);
            padding: 50px 20px 70px;
          }
          .t69-desc {
            display: none;
          }
        }
        
        @media (max-height: 600px) {
          .t69-pill {
            padding: 5px 12px;
            font-size: 10px;
          }
        }
      `}</style>

      <div className={`t69-page ${isLoaded ? 'loaded' : ''}`}>
        {/* Floating Title */}
        <h1 className="t69-title">Trade69</h1>
        <p className="t69-tagline">Algorithmic Trading Platform</p>

        {/* Media Section */}
        <div className="t69-media">
          {/* Video Thumbnail */}
          <div className="t69-video-thumb" onClick={openVideo}>
            <video ref={videoRef} src="/videos/t69demo.mp4" muted loop playsInline autoPlay />
            <div className="t69-play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 4 20 12 6 20" />
              </svg>
            </div>
          </div>

          {/* Action Orbs */}
          <div className="t69-actions">
            <button className="t69-action-btn gallery" onClick={() => setGalleryOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span>Gallery</span>
            </button>

            <button className="t69-action-btn system" onClick={() => setArchOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="12" r="8" strokeDasharray="3 5" />
                <circle cx="12" cy="3" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="19.8" cy="8" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="19.8" cy="16" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="4.2" cy="16" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="4.2" cy="8" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              <span>System</span>
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="t69-desc">
          End-to-end platform integrating <em>multi-source market intelligence</em>, machine learning, and <em>quantitative risk management</em> for autonomous trading.
        </p>

        {/* Floating Pills */}
        <div className="t69-pills-container">
          {["Reddit", "StockTwits", "ThetaData", "Alpaca", "Dark Pools"].map((item, i) => (
            <span key={`d-${i}`} className="t69-pill">{item}</span>
          ))}
          <span className="t69-dot" />
          {["Sentiment", "HMM Regime", "ML Signals", "Kelly Criterion"].map((item, i) => (
            <span key={`i-${i}`} className="t69-pill">{item}</span>
          ))}
          <span className="t69-dot" />
          {["Python", "PostgreSQL", "TimescaleDB", "Redis", "GPT-4"].map((item, i) => (
            <span key={`s-${i}`} className="t69-pill">{item}</span>
          ))}
        </div>

        {/* Navigation */}
        <nav className="t69-nav">
          <Link href="/work">← Work</Link>
          <Link href="/work/megaagent">MegaAgent →</Link>
        </nav>
      </div>

      {/* Video Overlay */}
      {videoExpanded && (
        <div className="t69-overlay" onClick={closeVideo}>
          <div className="t69-theater" onClick={e => e.stopPropagation()}>
            <video
              ref={expandedVideoRef}
              src="/videos/t69demo.mp4"
              autoPlay
              playsInline
              loop
              controls
            />
          </div>
          <button className="t69-close" onClick={closeVideo}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Gallery Overlay */}
      {(galleryOpen || selectedImage) && (
        <div className="t69-overlay" onClick={() => { setGalleryOpen(false); handleImageClose(); }}>
          {/* Gallery Card - stays visible while image loads */}
          <div
            className="t69-gallery-card"
            onClick={e => e.stopPropagation()}
            style={{
              opacity: selectedImage && imageLoaded ? 0 : 1,
              transform: selectedImage && imageLoaded ? 'scale(0.95)' : 'scale(1)',
              pointerEvents: selectedImage && imageLoaded ? 'none' : 'auto',
              transition: 'opacity 0.3s ease, transform 0.3s ease'
            }}
          >
            <div className="t69-gallery-header">
              <h2 className="t69-gallery-title">Gallery</h2>
            </div>
            <div className="t69-gallery-scroll">
              <div className="t69-gallery-grid">
                {galleryImages.map((src, i) => (
                  <div
                    key={i}
                    className={`t69-gallery-item ${pendingImage === src ? 'loading' : ''}`}
                    onClick={() => handleImageSelect(src)}
                  >
                    <img src={src} alt="" />
                    {pendingImage === src && (
                      <div className="t69-gallery-loader">
                        <div className="t69-spinner" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expanded Image - fades in when loaded */}
          {selectedImage && imageLoaded && (
            <div
              className="t69-image-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
                setImageLoaded(false);
              }}
            >
              <img src={selectedImage} alt="" />
            </div>
          )}

          <button className="t69-close" onClick={() => { setGalleryOpen(false); handleImageClose(); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Architecture Overlay - 3D Neural Network Visualization */}
      {archOpen && (
        <div className="t69-overlay" onClick={() => setArchOpen(false)}>
          <div className="t69-arch-card" onClick={e => e.stopPropagation()}>
            <Trade69Architecture />
          </div>
          <button className="t69-close" onClick={() => setArchOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}