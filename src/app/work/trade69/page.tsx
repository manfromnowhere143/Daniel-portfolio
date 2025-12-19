"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Trade69() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [archOpen, setArchOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = '';
    setTimeout(() => setIsLoaded(true), 100);
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Gallery images - 9 screenshots with correct file names
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
        /* TRADE69 - VOID MACHINE AESTHETIC                                                */
        /* Deeper blacks, elegant shadows, pure sophistication                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --t69-bg: #030304;
          --t69-bg-elevated: #080809;
          --t69-bg-card: rgba(8, 8, 12, 0.85);
          --t69-text: #FAFAFA;
          --t69-text-soft: rgba(250, 250, 250, 0.85);
          --t69-text-muted: rgba(250, 250, 250, 0.5);
          --t69-glow: rgba(255, 255, 255, 0.04);
          --t69-border: rgba(255, 255, 255, 0.08);
          --t69-border-hover: rgba(255, 255, 255, 0.15);
        }
        
        [data-theme="light"] {
          --t69-bg: #F8F8F6;
          --t69-bg-elevated: #FFFFFF;
          --t69-bg-card: rgba(255, 255, 255, 0.92);
          --t69-text: #0a0a0a;
          --t69-text-soft: rgba(10, 10, 10, 0.85);
          --t69-text-muted: rgba(10, 10, 10, 0.45);
          --t69-glow: rgba(0, 0, 0, 0.03);
          --t69-border: rgba(0, 0, 0, 0.08);
          --t69-border-hover: rgba(0, 0, 0, 0.15);
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
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif;
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
        /* FLOATING TITLE - Ethereal presence                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-title {
          font-size: clamp(28px, 6vw, 52px);
          font-weight: 100;
          color: var(--t69-text);
          letter-spacing: 0.3em;
          margin: 0;
          text-transform: uppercase;
          opacity: 0;
          animation: t69-float-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        
        .t69-tagline {
          font-size: clamp(11px, 2vw, 14px);
          font-weight: 300;
          color: var(--t69-text-muted);
          letter-spacing: 0.2em;
          margin: clamp(-12px, -1.5vh, -8px) 0 0;
          text-transform: uppercase;
          opacity: 0;
          animation: t69-float-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        @keyframes t69-float-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* MEDIA SECTION - Video + Action Orbs                                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-media {
          display: flex;
          align-items: center;
          gap: clamp(16px, 3vw, 28px);
          opacity: 0;
          animation: t69-float-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
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
            0 0 0 1px rgba(255,255,255,0.06),
            0 24px 64px rgba(0,0,0,0.7),
            0 0 120px rgba(0,0,0,0.4),
            inset 0 0 60px rgba(0,0,0,0.3);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .t69-video-thumb:hover {
          transform: scale(1.02) translateY(-6px);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.1),
            0 32px 80px rgba(0,0,0,0.8),
            0 0 160px rgba(0,0,0,0.5),
            inset 0 0 60px rgba(0,0,0,0.3);
        }
        
        .t69-video-thumb video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }
        
        .t69-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(44px, 7vw, 56px);
          height: clamp(44px, 7vw, 56px);
          background: rgba(255,255,255,0.92);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 4px 20px rgba(0,0,0,0.4),
            0 0 40px rgba(255,255,255,0.1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
        }
        
        .t69-video-thumb:hover .t69-play-btn {
          transform: translate(-50%, -50%) scale(1.08);
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.5),
            0 0 60px rgba(255,255,255,0.15);
        }
        
        .t69-play-btn svg {
          width: clamp(16px, 2.5vw, 20px);
          height: clamp(16px, 2.5vw, 20px);
          margin-left: 2px;
          color: #000;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* ACTION ORBS - Deeper, more sophisticated                                        */
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
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        
        /* Gallery Orb - Deep violet cosmos */
        .t69-action-btn.gallery {
          background: linear-gradient(145deg, 
            #1a1033 0%, 
            #2d1f4e 30%,
            #3d2a6b 60%,
            #2d1f4e 100%
          );
          box-shadow: 
            0 0 0 1px rgba(138, 100, 200, 0.2),
            0 8px 32px rgba(45, 31, 78, 0.6),
            0 0 60px rgba(138, 100, 200, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }
        
        .t69-action-btn.gallery:hover {
          transform: scale(1.06) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(138, 100, 200, 0.3),
            0 16px 48px rgba(45, 31, 78, 0.7),
            0 0 80px rgba(138, 100, 200, 0.25),
            inset 0 1px 0 rgba(255,255,255,0.15),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }
        
        /* System Orb - Deep teal abyss */
        .t69-action-btn.system {
          background: linear-gradient(145deg, 
            #0a1f1f 0%, 
            #143333 30%,
            #1e4d4d 60%,
            #143333 100%
          );
          box-shadow: 
            0 0 0 1px rgba(45, 150, 150, 0.2),
            0 8px 32px rgba(20, 51, 51, 0.6),
            0 0 60px rgba(45, 150, 150, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }
        
        .t69-action-btn.system:hover {
          transform: scale(1.06) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(45, 150, 150, 0.3),
            0 16px 48px rgba(20, 51, 51, 0.7),
            0 0 80px rgba(45, 150, 150, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.12),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }
        
        .t69-action-btn:active {
          transform: scale(0.96);
        }
        
        .t69-action-btn svg {
          width: clamp(22px, 4vw, 30px);
          height: clamp(22px, 4vw, 30px);
          color: rgba(255,255,255,0.9);
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        
        .t69-action-btn span {
          font-size: clamp(8px, 1.3vw, 10px);
          font-weight: 500;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-shadow: 0 1px 3px rgba(0,0,0,0.4);
        }
        
        /* Subtle inner glow */
        .t69-action-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* FLOATING PILLS - Whisper thin elegance                                          */
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
          letter-spacing: 0.03em;
          color: var(--t69-text-soft);
          padding: clamp(6px, 1vh, 10px) clamp(14px, 2.5vw, 20px);
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--t69-border);
          border-radius: 100px;
          white-space: nowrap;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          opacity: 0;
          animation: t69-pill-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
        
        @keyframes t69-pill-in {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .t69-pill:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--t69-border-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        
        [data-theme="light"] .t69-pill:hover {
          background: rgba(0,0,0,0.03);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        
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
        
        .t69-dot:nth-of-type(2) { animation-delay: 0.92s; }
        
        @keyframes t69-dot-in {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 0.12; transform: scale(1); }
        }

        /* Description */
        .t69-desc {
          font-size: clamp(11px, 2vw, 14px);
          font-weight: 300;
          letter-spacing: 0.02em;
          color: var(--t69-text-muted);
          line-height: 1.7;
          text-align: center;
          max-width: 480px;
          opacity: 0;
          animation: t69-float-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
        
        .t69-desc em {
          font-style: normal;
          font-weight: 400;
          color: var(--t69-text-soft);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* NAVIGATION - Whisper links                                                      */
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
          animation: t69-float-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
        }
        
        .t69-nav a {
          font-size: clamp(11px, 1.8vw, 13px);
          font-weight: 400;
          color: var(--t69-text-muted);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .t69-nav a:hover {
          color: var(--t69-text);
          transform: translateX(4px);
        }
        
        .t69-nav a:first-child:hover {
          transform: translateX(-4px);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* OVERLAYS - Deep void aesthetic                                                  */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: t69-overlay-in 0.5s ease forwards;
        }
        
        @keyframes t69-overlay-in {
          to { background: rgba(0,0,0,0.96); }
        }
        
        [data-theme="light"] .t69-overlay {
          animation: t69-overlay-in-light 0.5s ease forwards;
        }
        
        @keyframes t69-overlay-in-light {
          to { background: rgba(248,248,246,0.98); }
        }
        
        .t69-close {
          position: fixed;
          bottom: clamp(20px, 4vh, 36px);
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
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
          background: rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.08);
        }
        
        @keyframes t69-fade-in {
          to { opacity: 1; }
        }
        
        .t69-close:hover {
          background: rgba(255,255,255,0.12);
          transform: translateX(-50%) scale(1.08);
        }
        
        .t69-close svg {
          width: 22px;
          height: 22px;
          color: rgba(255,255,255,0.8);
        }
        
        [data-theme="light"] .t69-close svg {
          color: rgba(0,0,0,0.7);
        }

        /* Video Theater */
        .t69-theater {
          width: 92vw;
          max-width: 1000px;
          aspect-ratio: 16/9;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.05),
            0 50px 140px rgba(0,0,0,0.8);
          opacity: 0;
          transform: scale(0.94);
          animation: t69-zoom-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes t69-zoom-in {
          to { opacity: 1; transform: scale(1); }
        }
        
        .t69-theater video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Gallery Card - Deep glass */
        .t69-gallery-card {
          width: clamp(300px, 85vw, 400px);
          background: rgba(12, 12, 16, 0.92);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          padding: clamp(14px, 2.5vw, 20px);
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 
            0 50px 140px rgba(0,0,0,0.7),
            inset 0 1px 0 rgba(255,255,255,0.05);
          opacity: 0;
          animation: t69-zoom-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        [data-theme="light"] .t69-gallery-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 50px 140px rgba(0,0,0,0.15);
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
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          position: relative;
        }
        
        .t69-gallery-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3));
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .t69-gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }
        
        .t69-gallery-item:hover::after {
          opacity: 1;
        }
        
        .t69-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* 3D ARCHITECTURE VISUALIZATION - Orbital System                                  */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-arch-card {
          width: clamp(320px, 85vw, 440px);
          aspect-ratio: 1;
          background: linear-gradient(145deg, #08080c 0%, #040406 100%);
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 50px 140px rgba(0,0,0,0.7),
            inset 0 1px 0 rgba(255,255,255,0.03);
          opacity: 0;
          animation: t69-zoom-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Ambient glow background */
        .t69-arch-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 30% 30%, rgba(80, 60, 140, 0.08) 0%, transparent 40%),
            radial-gradient(ellipse at 70% 70%, rgba(40, 120, 120, 0.06) 0%, transparent 40%);
          pointer-events: none;
        }
        
        [data-theme="light"] .t69-arch-card {
          background: linear-gradient(145deg, #ffffff 0%, #f4f4f2 100%);
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 50px 140px rgba(0,0,0,0.12);
        }
        
        /* 3D Scene Container */
        .t69-arch-scene {
          width: 88%;
          height: 88%;
          position: relative;
          perspective: 800px;
          transform-style: preserve-3d;
        }
        
        /* Central Core - Pulsing */
        .t69-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, 
            rgba(255,255,255,0.15) 0%, 
            rgba(255,255,255,0.05) 40%,
            transparent 70%
          );
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: t69-core-pulse 4s ease-in-out infinite;
        }
        
        @keyframes t69-core-pulse {
          0%, 100% { 
            box-shadow: 
              0 0 30px rgba(255,255,255,0.05),
              0 0 60px rgba(255,255,255,0.02);
          }
          50% { 
            box-shadow: 
              0 0 40px rgba(255,255,255,0.08),
              0 0 80px rgba(255,255,255,0.04);
          }
        }
        
        .t69-core span {
          font-size: 10px;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.15em;
        }
        
        /* Orbital Ring */
        .t69-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 280px;
          height: 280px;
          margin: -140px 0 0 -140px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.04);
          animation: t69-orbit-spin 60s linear infinite;
        }
        
        @keyframes t69-orbit-spin {
          from { transform: rotateX(65deg) rotateZ(0deg); }
          to { transform: rotateX(65deg) rotateZ(360deg); }
        }
        
        /* Satellite Nodes */
        .t69-node {
          position: absolute;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(12, 12, 18, 0.9);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          backdrop-filter: blur(8px);
          transition: all 0.4s ease;
        }
        
        .t69-node:hover {
          transform: scale(1.15);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        
        .t69-node svg {
          width: 16px;
          height: 16px;
          color: rgba(255,255,255,0.6);
        }
        
        .t69-node span {
          font-size: 7px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        /* Node positions */
        .t69-node.data { top: 8%; left: 50%; transform: translateX(-50%); }
        .t69-node.ml { top: 25%; right: 8%; }
        .t69-node.risk { bottom: 25%; right: 8%; }
        .t69-node.exec { bottom: 8%; left: 50%; transform: translateX(-50%); }
        .t69-node.hmm { bottom: 25%; left: 8%; }
        .t69-node.sent { top: 25%; left: 8%; }
        
        /* Connection lines */
        .t69-connection {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.08), transparent);
          transform-origin: top center;
        }
        
        .t69-connection.to-data { transform: rotate(0deg); }
        .t69-connection.to-ml { transform: rotate(60deg); }
        .t69-connection.to-risk { transform: rotate(120deg); }
        .t69-connection.to-exec { transform: rotate(180deg); }
        .t69-connection.to-hmm { transform: rotate(240deg); }
        .t69-connection.to-sent { transform: rotate(300deg); }

        /* Image Expanded */
        .t69-image-full {
          max-width: calc(100vw - 32px);
          max-height: 80vh;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.05),
            0 50px 140px rgba(0,0,0,0.7);
          opacity: 0;
          animation: t69-zoom-in 0.5s ease forwards;
        }
        
        .t69-image-full img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
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
          
          .t69-arch-scene {
            width: 90%;
            height: 90%;
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
                <circle cx="12" cy="12" r="8" strokeDasharray="2 4" />
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

      {/* Architecture Overlay - 3D Orbital System */}
      {archOpen && (
        <div className="t69-overlay" onClick={() => setArchOpen(false)}>
          <div className="t69-arch-card" onClick={e => e.stopPropagation()}>
            <div className="t69-arch-scene">
              {/* Connection lines */}
              <div className="t69-connection to-data" />
              <div className="t69-connection to-ml" />
              <div className="t69-connection to-risk" />
              <div className="t69-connection to-exec" />
              <div className="t69-connection to-hmm" />
              <div className="t69-connection to-sent" />

              {/* Orbital Ring */}
              <div className="t69-orbit" />

              {/* Central Core */}
              <div className="t69-core">
                <span>CORE</span>
              </div>

              {/* Satellite Nodes */}
              <div className="t69-node data">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>Data</span>
              </div>

              <div className="t69-node ml">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 4v4m0 8v4M4 12h4m8 0h4" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>ML</span>
              </div>

              <div className="t69-node risk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 9v2m0 4h.01M5.07 19A11 11 0 0112 2a11 11 0 016.93 17" />
                  <path d="M12 22l-3-3h6l-3 3z" />
                </svg>
                <span>Risk</span>
              </div>

              <div className="t69-node exec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Exec</span>
              </div>

              <div className="t69-node hmm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12h4l3-9 4 18 3-9h4" />
                </svg>
                <span>HMM</span>
              </div>

              <div className="t69-node sent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
                </svg>
                <span>Sent</span>
              </div>
            </div>
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