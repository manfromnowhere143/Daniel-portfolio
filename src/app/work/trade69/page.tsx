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
        /* NAVIGATION - Pure white                                                         */
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
        /* OVERLAYS - Apple-smooth transitions                                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: t69-overlay-fade 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
        }
        
        @keyframes t69-overlay-fade {
          to { 
            background: rgba(0,0,0,0.92);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
          }
        }
        
        [data-theme="light"] .t69-overlay {
          animation: t69-overlay-fade-light 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        @keyframes t69-overlay-fade-light {
          to { 
            background: rgba(250,250,250,0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
          }
        }
        
        .t69-close {
          position: fixed;
          bottom: clamp(20px, 4vh, 36px);
          left: 50%;
          transform: translateX(-50%) scale(0.8);
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
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          opacity: 0;
          animation: t69-close-spring 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        }
        
        @keyframes t69-close-spring {
          0% { opacity: 0; transform: translateX(-50%) scale(0.5); }
          60% { transform: translateX(-50%) scale(1.1); }
          100% { opacity: 1; transform: translateX(-50%) scale(1); }
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

        /* Video Theater - Cinematic spring */
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
          transform: scale(0.9) translateY(20px);
          animation: t69-theater-spring 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @keyframes t69-theater-spring {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          60% { transform: scale(1.02) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .t69-theater video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Gallery Card - Spring entrance */
        .t69-gallery-card {
          width: clamp(300px, 85vw, 400px);
          background: rgba(10, 10, 12, 0.95);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          padding: clamp(14px, 2.5vw, 20px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 
            0 60px 160px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.05);
          opacity: 0;
          transform: scale(0.9) translateY(20px);
          animation: t69-card-spring 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @keyframes t69-card-spring {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          60% { transform: scale(1.02) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        [data-theme="light"] .t69-gallery-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 60px 160px rgba(0,0,0,0.2);
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
        
        .t69-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* 3D ARCHITECTURE - Orbital Neural Network                                        */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .t69-arch-card {
          width: clamp(320px, 85vw, 440px);
          aspect-ratio: 1;
          background: radial-gradient(ellipse at center, #0a0a0c 0%, #000000 100%);
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 60px 160px rgba(0,0,0,0.9),
            inset 0 0 120px rgba(255,255,255,0.02);
          opacity: 0;
          transform: scale(0.9) translateY(20px);
          animation: t69-card-spring 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        [data-theme="light"] .t69-arch-card {
          background: radial-gradient(ellipse at center, #ffffff 0%, #f5f5f3 100%);
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 60px 160px rgba(0,0,0,0.15);
        }
        
        /* 3D Scene */
        .t69-arch-scene {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Animated orbital rings */
        .t69-orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.06);
        }
        
        .t69-orbit-ring.ring-1 {
          width: 85%;
          height: 85%;
          animation: t69-orbit-rotate 40s linear infinite;
        }
        
        .t69-orbit-ring.ring-2 {
          width: 65%;
          height: 65%;
          animation: t69-orbit-rotate 30s linear infinite reverse;
        }
        
        .t69-orbit-ring.ring-3 {
          width: 45%;
          height: 45%;
          animation: t69-orbit-rotate 20s linear infinite;
        }
        
        @keyframes t69-orbit-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Central core with pulse */
        .t69-core {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, 
            rgba(255,255,255,0.12) 0%, 
            rgba(255,255,255,0.04) 50%,
            transparent 70%
          );
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: t69-core-breathe 4s ease-in-out infinite;
          z-index: 10;
        }
        
        @keyframes t69-core-breathe {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 
              0 0 40px rgba(255,255,255,0.05),
              0 0 80px rgba(255,255,255,0.02);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 
              0 0 60px rgba(255,255,255,0.08),
              0 0 100px rgba(255,255,255,0.04);
          }
        }
        
        .t69-core span {
          font-size: 11px;
          font-weight: 300;
          color: #FFFFFF;
          letter-spacing: 0.2em;
        }
        
        /* Floating nodes */
        .t69-node {
          position: absolute;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(8, 8, 12, 0.9);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }
        
        .t69-node:hover {
          transform: scale(1.2);
          border-color: rgba(255,255,255,0.25);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          z-index: 20;
        }
        
        .t69-node svg {
          width: 18px;
          height: 18px;
          color: #FFFFFF;
        }
        
        .t69-node span {
          font-size: 7px;
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        
        /* Node positions - hexagonal layout */
        .t69-node.data { top: 8%; left: 50%; transform: translateX(-50%); }
        .t69-node.ml { top: 28%; right: 10%; }
        .t69-node.risk { bottom: 28%; right: 10%; }
        .t69-node.exec { bottom: 8%; left: 50%; transform: translateX(-50%); }
        .t69-node.hmm { bottom: 28%; left: 10%; }
        .t69-node.sent { top: 28%; left: 10%; }
        
        .t69-node.data:hover, .t69-node.exec:hover { transform: translateX(-50%) scale(1.2); }
        
        /* Connection beams */
        .t69-beam {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 90px;
          background: linear-gradient(to bottom, 
            rgba(255,255,255,0.15) 0%, 
            rgba(255,255,255,0.02) 100%
          );
          transform-origin: top center;
          opacity: 0.6;
        }
        
        .t69-beam.to-data { transform: rotate(0deg) translateX(-50%); }
        .t69-beam.to-ml { transform: rotate(60deg) translateX(-50%); }
        .t69-beam.to-risk { transform: rotate(120deg) translateX(-50%); }
        .t69-beam.to-exec { transform: rotate(180deg) translateX(-50%); }
        .t69-beam.to-hmm { transform: rotate(240deg) translateX(-50%); }
        .t69-beam.to-sent { transform: rotate(300deg) translateX(-50%); }
        
        /* Floating particles */
        .t69-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255,255,255,0.4);
          border-radius: 50%;
          animation: t69-particle-float 8s ease-in-out infinite;
        }
        
        .t69-particle:nth-child(1) { top: 20%; left: 30%; animation-delay: 0s; }
        .t69-particle:nth-child(2) { top: 70%; left: 25%; animation-delay: 2s; }
        .t69-particle:nth-child(3) { top: 35%; right: 20%; animation-delay: 4s; }
        .t69-particle:nth-child(4) { bottom: 25%; right: 30%; animation-delay: 6s; }
        
        @keyframes t69-particle-float {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0); }
          20% { opacity: 1; transform: translateY(-10px) scale(1); }
          80% { opacity: 1; transform: translateY(-30px) scale(1); }
          100% { opacity: 0; transform: translateY(-40px) scale(0); }
        }

        /* Image Expanded - Spring */
        .t69-image-full {
          max-width: calc(100vw - 32px);
          max-height: 80vh;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.08),
            0 60px 160px rgba(0,0,0,0.9);
          opacity: 0;
          transform: scale(0.9);
          animation: t69-image-spring 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @keyframes t69-image-spring {
          0% { opacity: 0; transform: scale(0.9); }
          60% { transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
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

      {/* Architecture Overlay - 3D Orbital Neural Network */}
      {archOpen && (
        <div className="t69-overlay" onClick={() => setArchOpen(false)}>
          <div className="t69-arch-card" onClick={e => e.stopPropagation()}>
            <div className="t69-arch-scene">
              {/* Floating particles */}
              <div className="t69-particle" />
              <div className="t69-particle" />
              <div className="t69-particle" />
              <div className="t69-particle" />

              {/* Orbital rings */}
              <div className="t69-orbit-ring ring-1" />
              <div className="t69-orbit-ring ring-2" />
              <div className="t69-orbit-ring ring-3" />

              {/* Connection beams */}
              <div className="t69-beam to-data" />
              <div className="t69-beam to-ml" />
              <div className="t69-beam to-risk" />
              <div className="t69-beam to-exec" />
              <div className="t69-beam to-hmm" />
              <div className="t69-beam to-sent" />

              {/* Central core */}
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
                  <path d="M12 9v4m0 4h.01" />
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
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
                  <path d="M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
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