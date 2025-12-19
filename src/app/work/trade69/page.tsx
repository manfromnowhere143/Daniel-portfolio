"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Trade69() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [archOpen, setArchOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = '';
    setTimeout(() => setIsLoaded(true), 100);
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Gallery images - 9 screenshots
  const galleryImages = [
    "/images/t69app3.png",
    "/images/t69app3.png",
    "/images/t69app3.png",
    "/images/t69app3.png",
    "/images/t69app3.png",
    "/images/t69app3.png",
    "/images/t69app3.png",
    "/images/t69app3.png",
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
        /* TRADE69 - SPACE MACHINE AESTHETIC                                               */
        /* Fixed viewport, floating elements, pure white text, Elon Musk approved          */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --t69-bg: #050506;
          --t69-text: #FFFFFF;
          --t69-text-soft: rgba(255, 255, 255, 0.92);
          --t69-glow: rgba(255, 255, 255, 0.08);
          --t69-border: rgba(255, 255, 255, 0.15);
        }
        
        [data-theme="light"] {
          --t69-bg: #F5F5F0;
          --t69-text: #0a0a0a;
          --t69-text-soft: rgba(10, 10, 10, 0.88);
          --t69-glow: rgba(0, 0, 0, 0.05);
          --t69-border: rgba(0, 0, 0, 0.12);
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
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(20px, 3.5vh, 36px);
          padding: 60px 20px 80px;
          opacity: 0;
          transition: opacity 0.8s ease;
          -webkit-font-smoothing: antialiased;
        }
        
        .t69-page.loaded { opacity: 1; }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FLOATING TITLE - No header, just text floating in space                         */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-title {
          font-size: clamp(28px, 6vw, 52px);
          font-weight: 100;
          color: var(--t69-text);
          letter-spacing: 0.25em;
          margin: 0;
          text-transform: uppercase;
          opacity: 0;
          animation: t69-float-in 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        
        .t69-tagline {
          font-size: clamp(11px, 2vw, 15px);
          font-weight: 300;
          color: var(--t69-text);
          letter-spacing: 0.15em;
          margin: clamp(-12px, -1.5vh, -8px) 0 0;
          opacity: 0;
          animation: t69-float-in 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        @keyframes t69-float-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* MEDIA SECTION - Video + iOS-style action buttons                                */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-media {
          display: flex;
          align-items: center;
          gap: clamp(16px, 3vw, 28px);
          opacity: 0;
          animation: t69-float-in 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        /* Video Thumbnail - Cinematic */
        .t69-video-thumb {
          width: clamp(180px, 35vw, 320px);
          aspect-ratio: 16/9;
          border-radius: clamp(12px, 2vw, 20px);
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: #000;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.1),
            0 20px 60px rgba(0,0,0,0.5),
            0 0 80px rgba(255,255,255,0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .t69-video-thumb:hover {
          transform: scale(1.03) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.15),
            0 30px 80px rgba(0,0,0,0.6),
            0 0 100px rgba(255,255,255,0.05);
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
          width: clamp(48px, 8vw, 64px);
          height: clamp(48px, 8vw, 64px);
          background: rgba(255,255,255,0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
        }
        
        .t69-video-thumb:hover .t69-play-btn {
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        .t69-play-btn svg {
          width: clamp(18px, 3vw, 24px);
          height: clamp(18px, 3vw, 24px);
          margin-left: 3px;
          color: #000;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* iOS-STYLE ACTION BUTTONS - Gallery & System                                     */
        /* Floating glass icons with glow - state of the art                               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-actions {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 2vw, 18px);
        }
        
        .t69-action-btn {
          width: clamp(64px, 12vw, 88px);
          height: clamp(64px, 12vw, 88px);
          border-radius: clamp(16px, 3vw, 22px);
          border: none;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        
        /* Gallery Button - Purple/Blue gradient */
        .t69-action-btn.gallery {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.2),
            0 8px 32px rgba(102, 126, 234, 0.4),
            0 0 60px rgba(102, 126, 234, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
        
        .t69-action-btn.gallery:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.3),
            0 16px 48px rgba(102, 126, 234, 0.5),
            0 0 80px rgba(102, 126, 234, 0.3),
            inset 0 1px 0 rgba(255,255,255,0.4);
        }
        
        /* System Button - Cyan/Teal gradient */
        .t69-action-btn.system {
          background: linear-gradient(135deg, #4fd1c5 0%, #38b2ac 50%, #319795 100%);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.2),
            0 8px 32px rgba(79, 209, 197, 0.4),
            0 0 60px rgba(79, 209, 197, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
        
        .t69-action-btn.system:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.3),
            0 16px 48px rgba(79, 209, 197, 0.5),
            0 0 80px rgba(79, 209, 197, 0.3),
            inset 0 1px 0 rgba(255,255,255,0.4);
        }
        
        .t69-action-btn:active {
          transform: scale(0.95);
        }
        
        .t69-action-btn svg {
          width: clamp(24px, 4.5vw, 36px);
          height: clamp(24px, 4.5vw, 36px);
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        
        .t69-action-btn span {
          font-size: clamp(9px, 1.5vw, 11px);
          font-weight: 600;
          color: white;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        
        /* Shine effect */
        .t69-action-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .t69-action-btn:hover::before {
          left: 100%;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FLOATING PILLS - Pure elegance, no labels, just text in space                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(8px, 1.2vw, 14px);
          justify-content: center;
          max-width: 720px;
        }
        
        .t69-pill {
          font-size: clamp(11px, 2vw, 14px);
          font-weight: 300;
          letter-spacing: 0.02em;
          color: var(--t69-text);
          padding: clamp(7px, 1.1vh, 11px) clamp(16px, 2.8vw, 24px);
          background: transparent;
          border: 1px solid var(--t69-border);
          border-radius: 100px;
          white-space: nowrap;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          opacity: 0;
          animation: t69-pill-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Staggered animation for each pill */
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
        
        @keyframes t69-pill-in {
          from { 
            opacity: 0; 
            transform: translateY(12px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .t69-pill:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 8px 24px rgba(255,255,255,0.05),
            0 0 40px rgba(255,255,255,0.03);
        }
        
        [data-theme="light"] .t69-pill:hover {
          background: rgba(0,0,0,0.03);
          border-color: rgba(0,0,0,0.2);
          box-shadow: 
            0 8px 24px rgba(0,0,0,0.06),
            0 0 40px rgba(0,0,0,0.03);
        }
        
        /* Separator dot between sections - ultra subtle */
        .t69-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--t69-text);
          opacity: 0;
          align-self: center;
          margin: 0 4px;
          animation: t69-dot-in 0.6s ease forwards;
          animation-delay: 0.72s;
        }
        
        .t69-dot:nth-of-type(2) {
          animation-delay: 0.92s;
        }
        
        @keyframes t69-dot-in {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 0.15; transform: scale(1); }
        }

        /* Description - Floating elegantly */
        .t69-desc {
          font-size: clamp(12px, 2.2vw, 15px);
          font-weight: 300;
          letter-spacing: 0.01em;
          color: var(--t69-text);
          line-height: 1.7;
          text-align: center;
          max-width: 500px;
          opacity: 0;
          animation: t69-float-in 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
        
        .t69-desc em {
          font-style: normal;
          font-weight: 400;
          opacity: 1;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FLOATING NAVIGATION                                                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-nav {
          position: fixed;
          bottom: clamp(20px, 4vh, 36px);
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: clamp(80px, 25vw, 200px);
          z-index: 10;
          opacity: 0;
          animation: t69-float-in 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
        }
        
        .t69-nav a {
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 400;
          color: var(--t69-text);
          text-decoration: none;
          opacity: 0.75;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .t69-nav a:hover {
          opacity: 1;
          transform: translateX(4px);
        }
        
        .t69-nav a:first-child:hover {
          transform: translateX(-4px);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* OVERLAYS - Cinematic                                                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: t69-overlay-in 0.4s ease forwards;
        }
        
        @keyframes t69-overlay-in {
          to { background: rgba(0,0,0,0.95); }
        }
        
        [data-theme="light"] .t69-overlay {
          animation: t69-overlay-in-light 0.4s ease forwards;
        }
        
        @keyframes t69-overlay-in-light {
          to { background: rgba(245,245,240,0.98); }
        }
        
        .t69-close {
          position: fixed;
          bottom: clamp(20px, 4vh, 36px);
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 56px;
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
          transition: all 0.3s ease;
          opacity: 0;
          animation: t69-fade-in 0.4s ease 0.2s forwards;
        }
        
        [data-theme="light"] .t69-close {
          background: rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.1);
        }
        
        @keyframes t69-fade-in {
          to { opacity: 1; }
        }
        
        .t69-close:hover {
          background: rgba(255,255,255,0.2);
          transform: translateX(-50%) scale(1.1);
        }
        
        .t69-close svg {
          width: 24px;
          height: 24px;
          color: white;
        }
        
        [data-theme="light"] .t69-close svg {
          color: #1a1a1a;
        }

        /* Video Theater */
        .t69-theater {
          width: 92vw;
          max-width: 1000px;
          aspect-ratio: 16/9;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 40px 120px rgba(0,0,0,0.6);
          opacity: 0;
          transform: scale(0.95);
          animation: t69-zoom-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes t69-zoom-in {
          to { opacity: 1; transform: scale(1); }
        }
        
        .t69-theater video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Gallery Card */
        .t69-gallery-card {
          width: clamp(300px, 85vw, 420px);
          background: rgba(20, 20, 25, 0.9);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          padding: clamp(16px, 3vw, 24px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 40px 120px rgba(0,0,0,0.5);
          opacity: 0;
          animation: t69-zoom-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        [data-theme="light"] .t69-gallery-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0,0,0,0.08);
        }
        
        .t69-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(8px, 1.5vw, 12px);
        }
        
        .t69-gallery-item {
          aspect-ratio: 1;
          border-radius: clamp(8px, 1.5vw, 12px);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }
        
        .t69-gallery-item:hover {
          transform: scale(1.06);
        }
        
        .t69-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Architecture Card */
        .t69-arch-card {
          width: clamp(300px, 85vw, 420px);
          aspect-ratio: 1;
          background: linear-gradient(145deg, #0c0c12 0%, #08080c 100%);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 120px rgba(0,0,0,0.5);
          opacity: 0;
          animation: t69-zoom-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .t69-arch-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 25% 25%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 75%, rgba(79, 209, 197, 0.12) 0%, transparent 50%);
          pointer-events: none;
        }
        
        [data-theme="light"] .t69-arch-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8f8f6 100%);
          border: 1px solid rgba(0,0,0,0.08);
        }

        /* Image Expanded */
        .t69-image-full {
          max-width: calc(100vw - 32px);
          max-height: 80vh;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 40px 120px rgba(0,0,0,0.5);
          opacity: 0;
          animation: t69-zoom-in 0.4s ease forwards;
        }
        
        .t69-image-full img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* RESPONSIVE - Bigger on desktop                                                  */
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
          .t69-pills-container {
            gap: clamp(6px, 1vw, 10px);
          }
        }
        
        @media (max-height: 600px) {
          .t69-pill {
            padding: 5px 12px;
            font-size: 10px;
          }
          .t69-pills-container {
            gap: 6px;
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
                <polygon points="5 3 19 12 5 21" />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="t69-actions">
            <button className="t69-action-btn gallery" onClick={() => setGalleryOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span>Gallery</span>
            </button>

            <button className="t69-action-btn system" onClick={() => setArchOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>System</span>
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="t69-desc">
          End-to-end platform integrating <em>multi-source market intelligence</em>, machine learning, and <em>quantitative risk management</em> for autonomous trading.
        </p>

        {/* Floating Pills - Pure elegance */}
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
      {galleryOpen && !selectedImage && (
        <div className="t69-overlay" onClick={() => setGalleryOpen(false)}>
          <div className="t69-gallery-card" onClick={e => e.stopPropagation()}>
            <div className="t69-gallery-grid">
              {galleryImages.map((src, i) => (
                <div key={i} className="t69-gallery-item" onClick={() => setSelectedImage(src)}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </div>
          <button className="t69-close" onClick={() => setGalleryOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Image Expanded */}
      {selectedImage && (
        <div className="t69-overlay" onClick={() => setSelectedImage(null)}>
          <div className="t69-image-full">
            <img src={selectedImage} alt="" />
          </div>
          <button className="t69-close" onClick={() => setSelectedImage(null)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Architecture Overlay */}
      {archOpen && (
        <div className="t69-overlay" onClick={() => setArchOpen(false)}>
          <div className="t69-arch-card" onClick={e => e.stopPropagation()}>
            <svg viewBox="0 0 200 200" fill="none" style={{ width: '85%', height: '85%', position: 'relative', zIndex: 1 }}>
              {/* Central Core - Larger */}
              <circle cx="100" cy="100" r="28" stroke="var(--t69-text)" strokeWidth="1" fill="none" opacity="0.6" />
              <text x="100" y="103" textAnchor="middle" fill="var(--t69-text)" fontSize="9" fontWeight="300" opacity="0.9">CORE</text>

              {/* Orbiting nodes with connecting lines */}
              {/* Data - Top */}
              <circle cx="100" cy="35" r="20" stroke="var(--t69-text)" strokeWidth="0.75" fill="none" opacity="0.4" />
              <text x="100" y="38" textAnchor="middle" fill="var(--t69-text)" fontSize="8" fontWeight="300" opacity="0.7">Data</text>
              <line x1="100" y1="55" x2="100" y2="72" stroke="var(--t69-text)" strokeWidth="0.5" opacity="0.3" />

              {/* ML - Top Right */}
              <circle cx="158" cy="65" r="20" stroke="var(--t69-text)" strokeWidth="0.75" fill="none" opacity="0.4" />
              <text x="158" y="68" textAnchor="middle" fill="var(--t69-text)" fontSize="8" fontWeight="300" opacity="0.7">ML</text>
              <line x1="142" y1="77" x2="125" y2="88" stroke="var(--t69-text)" strokeWidth="0.5" opacity="0.3" />

              {/* Risk - Bottom Right */}
              <circle cx="158" cy="135" r="20" stroke="var(--t69-text)" strokeWidth="0.75" fill="none" opacity="0.4" />
              <text x="158" y="138" textAnchor="middle" fill="var(--t69-text)" fontSize="8" fontWeight="300" opacity="0.7">Risk</text>
              <line x1="142" y1="123" x2="125" y2="112" stroke="var(--t69-text)" strokeWidth="0.5" opacity="0.3" />

              {/* Exec - Bottom */}
              <circle cx="100" cy="165" r="20" stroke="var(--t69-text)" strokeWidth="0.75" fill="none" opacity="0.4" />
              <text x="100" y="168" textAnchor="middle" fill="var(--t69-text)" fontSize="8" fontWeight="300" opacity="0.7">Exec</text>
              <line x1="100" y1="145" x2="100" y2="128" stroke="var(--t69-text)" strokeWidth="0.5" opacity="0.3" />

              {/* HMM - Bottom Left */}
              <circle cx="42" cy="135" r="20" stroke="var(--t69-text)" strokeWidth="0.75" fill="none" opacity="0.4" />
              <text x="42" y="138" textAnchor="middle" fill="var(--t69-text)" fontSize="8" fontWeight="300" opacity="0.7">HMM</text>
              <line x1="58" y1="123" x2="75" y2="112" stroke="var(--t69-text)" strokeWidth="0.5" opacity="0.3" />

              {/* Sentiment - Top Left */}
              <circle cx="42" cy="65" r="20" stroke="var(--t69-text)" strokeWidth="0.75" fill="none" opacity="0.4" />
              <text x="42" y="68" textAnchor="middle" fill="var(--t69-text)" fontSize="8" fontWeight="300" opacity="0.7">Sent</text>
              <line x1="58" y1="77" x2="75" y2="88" stroke="var(--t69-text)" strokeWidth="0.5" opacity="0.3" />
            </svg>
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