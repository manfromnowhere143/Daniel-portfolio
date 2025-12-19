"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FadeImage from "@/components/FadeImage";

export default function Overmind() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = '';
    setTimeout(() => setIsLoaded(true), 100);
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Story paragraphs
  const storyParagraphs = [
    "The token I made is nothing serious, just a meme token, a simple smart contract deployed on Solana and BNB Smart Chain because of the low fees. But for me, it was an important step in learning blockchain deployments, smart-contract interaction, and the whole process end to end.",
    "It represents the intersection of philosophy and technology—exploring decentralized systems while questioning what gives anything value in the first place."
  ];

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* OVERMIND - COSMIC VOID ELEGANCE                                                 */
        /* "Second star to the right, and straight on till morning"                        */
        /* Making Disney, Pixar, Elon, and Sam proud                                       */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --om-bg: #000000;
          --om-text: #FFFFFF;
          --om-text-soft: rgba(255, 255, 255, 0.75);
          --om-text-muted: rgba(255, 255, 255, 0.4);
          --om-border: rgba(255, 255, 255, 0.1);
        }
        
        [data-theme="light"] {
          --om-bg: #FAFAFA;
          --om-text: #000000;
          --om-text-soft: rgba(0, 0, 0, 0.7);
          --om-text-muted: rgba(0, 0, 0, 0.4);
          --om-border: rgba(0, 0, 0, 0.1);
        }

        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          overscroll-behavior: none;
          overflow: hidden;
          touch-action: none;
        }

        .om-page {
          position: fixed !important;
          inset: 0 !important;
          background: var(--om-bg);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(14px, 2.5vh, 24px);
          padding: 60px 20px 80px;
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          -webkit-font-smoothing: antialiased;
        }
        
        .om-page.loaded { opacity: 1; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* COSMIC STAR FIELD - Pixar magic                                                 */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .om-stars {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }
        
        .om-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FFFFFF;
          border-radius: 50%;
          animation: om-twinkle 3s ease-in-out infinite;
        }
        
        .om-star:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; opacity: 0.6; }
        .om-star:nth-child(2) { top: 25%; left: 85%; animation-delay: 0.5s; opacity: 0.4; }
        .om-star:nth-child(3) { top: 60%; left: 20%; animation-delay: 1s; opacity: 0.5; }
        .om-star:nth-child(4) { top: 80%; left: 75%; animation-delay: 1.5s; opacity: 0.3; }
        .om-star:nth-child(5) { top: 40%; left: 92%; animation-delay: 2s; opacity: 0.5; }
        .om-star:nth-child(6) { top: 10%; left: 50%; animation-delay: 2.5s; opacity: 0.4; }
        .om-star:nth-child(7) { top: 70%; left: 8%; animation-delay: 0.3s; opacity: 0.6; }
        .om-star:nth-child(8) { top: 90%; left: 40%; animation-delay: 1.8s; opacity: 0.35; }
        
        @keyframes om-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        
        [data-theme="light"] .om-stars {
          display: none;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* TITLE                                                                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .om-title {
          font-size: clamp(28px, 6vw, 52px);
          font-weight: 100;
          color: var(--om-text);
          letter-spacing: 0.3em;
          margin: 0;
          text-transform: uppercase;
          opacity: 0;
          animation: om-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
          position: relative;
          z-index: 1;
        }
        
        .om-tagline {
          font-size: clamp(10px, 1.8vw, 13px);
          font-weight: 300;
          color: var(--om-text);
          letter-spacing: 0.15em;
          margin: clamp(-6px, -1vh, -2px) 0 0;
          text-transform: uppercase;
          opacity: 0;
          animation: om-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          position: relative;
          z-index: 1;
        }
        
        @keyframes om-spring-up {
          0% { opacity: 0; transform: translateY(30px) scale(0.96); }
          60% { transform: translateY(-4px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* HERO IMAGE + ACTIONS                                                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .om-media {
          display: flex;
          align-items: center;
          gap: clamp(20px, 4vw, 36px);
          opacity: 0;
          animation: om-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
          position: relative;
          z-index: 1;
        }

        .om-hero-image {
          width: clamp(160px, 32vw, 240px);
          height: clamp(110px, 22vw, 160px);
          border-radius: clamp(12px, 2.5vw, 20px);
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        /* Magical glow ring */
        .om-hero-image::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: inherit;
          background: linear-gradient(135deg, 
            rgba(100, 150, 255, 0.4) 0%, 
            rgba(255, 100, 200, 0.3) 33%,
            rgba(100, 255, 200, 0.3) 66%,
            rgba(255, 200, 100, 0.4) 100%);
          opacity: 0.6;
          z-index: -1;
          animation: om-glow-rotate 8s linear infinite;
          filter: blur(8px);
        }
        
        @keyframes om-glow-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .om-hero-image::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.1),
            0 30px 80px rgba(0,0,0,0.5),
            inset 0 0 60px rgba(100, 150, 255, 0.1);
          pointer-events: none;
        }
        
        .om-hero-image:hover {
          transform: scale(1.05) translateY(-4px);
        }
        
        .om-hero-image:hover::before {
          opacity: 0.9;
          filter: blur(12px);
        }
        
        .om-hero-image:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
        
        .om-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        [data-theme="light"] .om-hero-image::before {
          opacity: 0.3;
        }
        
        [data-theme="light"] .om-hero-image::after {
          box-shadow: 
            0 0 0 1px rgba(0,0,0,0.08),
            0 30px 80px rgba(0,0,0,0.15);
        }

        .om-actions {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.5vw, 14px);
        }
        
        .om-action-btn {
          width: clamp(56px, 10vw, 72px);
          height: clamp(56px, 10vw, 72px);
          border-radius: clamp(14px, 2.5vw, 18px);
          border: none;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          overflow: hidden;
        }
        
        /* Story Button - Deep indigo */
        .om-action-btn.story {
          background: linear-gradient(145deg, 
            #0a0814 0%, 
            #14102d 40%,
            #1e1848 70%,
            #14102d 100%
          );
          box-shadow: 
            0 0 0 1px rgba(80, 70, 160, 0.25),
            0 10px 40px rgba(20, 16, 45, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }
        
        .om-action-btn.story:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(80, 70, 160, 0.4),
            0 20px 60px rgba(20, 16, 45, 0.9),
            0 0 60px rgba(80, 70, 160, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }
        
        /* Launch Button - Cosmic gradient with image */
        .om-action-btn.launch {
          background: linear-gradient(145deg, 
            #0a0a14 0%, 
            #141428 40%,
            #1e1e48 70%,
            #141428 100%
          );
          box-shadow: 
            0 0 0 1px rgba(100, 100, 200, 0.3),
            0 10px 40px rgba(20, 20, 40, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.1);
          padding: 0;
          overflow: hidden;
        }
        
        .om-action-btn.launch::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(135deg, 
            rgba(100, 150, 255, 0.3) 0%, 
            rgba(255, 100, 200, 0.2) 50%,
            rgba(100, 255, 200, 0.2) 100%);
          opacity: 0;
          z-index: 0;
          transition: opacity 0.4s ease;
          animation: om-glow-rotate 6s linear infinite;
        }
        
        .om-action-btn.launch:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(100, 100, 200, 0.5),
            0 20px 60px rgba(20, 20, 40, 0.9),
            0 0 80px rgba(100, 150, 255, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.15);
        }
        
        .om-action-btn.launch:hover::before {
          opacity: 0.8;
        }
        
        .om-launch-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          width: 100%;
          height: 100%;
        }
        
        .om-launch-icon {
          width: clamp(28px, 5vw, 36px);
          height: clamp(28px, 5vw, 36px);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        
        .om-launch-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .om-action-btn:active {
          transform: scale(0.95) !important;
          transition: transform 0.1s ease !important;
        }
        
        .om-action-btn svg {
          width: clamp(20px, 3.5vw, 26px);
          height: clamp(20px, 3.5vw, 26px);
          color: #FFFFFF;
        }
        
        .om-action-btn span {
          font-size: clamp(7px, 1.2vw, 9px);
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* QUOTE - The magic                                                               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .om-quote {
          text-align: center;
          max-width: 500px;
          opacity: 0;
          animation: om-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
          position: relative;
          z-index: 1;
        }
        
        .om-quote-text {
          font-size: clamp(14px, 2.5vw, 18px);
          font-weight: 200;
          color: var(--om-text);
          line-height: 1.7;
          letter-spacing: 0.06em;
          font-style: italic;
          margin: 0 0 clamp(8px, 1.5vh, 12px);
        }
        
        .om-quote-author {
          font-size: clamp(9px, 1.4vw, 11px);
          font-weight: 400;
          color: var(--om-text-muted);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* TECH PILLS                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .om-pills {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(6px, 1vw, 10px);
          justify-content: center;
          max-width: 500px;
          opacity: 0;
          animation: om-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
          position: relative;
          z-index: 1;
        }
        
        .om-pill {
          font-size: clamp(9px, 1.6vw, 12px);
          font-weight: 300;
          letter-spacing: 0.04em;
          color: var(--om-text);
          padding: clamp(5px, 0.8vh, 8px) clamp(12px, 2vw, 18px);
          background: transparent;
          border: 1px solid var(--om-border);
          border-radius: 100px;
          white-space: nowrap;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }
        
        .om-pill:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
        
        [data-theme="light"] .om-pill:hover {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.15);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* NAVIGATION                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .om-nav {
          position: fixed;
          bottom: clamp(20px, 4vh, 36px);
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: clamp(80px, 25vw, 200px);
          z-index: 10;
          opacity: 0;
          animation: om-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
        }
        
        .om-nav a {
          font-size: clamp(11px, 1.8vw, 13px);
          font-weight: 400;
          color: var(--om-text);
          text-decoration: none;
          letter-spacing: 0.05em;
          opacity: 0.6;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .om-nav a:hover {
          opacity: 1;
          transform: translateX(5px);
        }
        
        .om-nav a:first-child:hover {
          transform: translateX(-5px);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* OVERLAYS                                                                        */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .om-overlay {
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
          animation: om-overlay-fade 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: opacity;
          transform: translateZ(0);
        }
        
        @keyframes om-overlay-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        [data-theme="light"] .om-overlay {
          background: rgba(250,250,250,0.98);
        }
        
        .om-close {
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
          animation: om-close-fade 0.3s ease 0.15s forwards;
        }
        
        @keyframes om-close-fade {
          from { opacity: 0; transform: translateX(-50%) scale(0.9); }
          to { opacity: 1; transform: translateX(-50%) scale(1); }
        }
        
        [data-theme="light"] .om-close {
          background: rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.1);
        }
        
        .om-close:hover {
          background: rgba(255,255,255,0.2);
          transform: translateX(-50%) scale(1.08);
        }
        
        .om-close svg {
          width: 22px;
          height: 22px;
          color: #FFFFFF;
        }
        
        [data-theme="light"] .om-close svg {
          color: #000000;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STORY CARD                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .om-story-card {
          width: clamp(300px, 85vw, 500px);
          max-height: 70vh;
          background: rgba(10, 10, 12, 0.95);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 
            0 60px 160px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.05);
          opacity: 0;
          transform: scale(0.96);
          animation: om-card-smooth 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          overflow: hidden;
          position: relative;
        }
        
        @keyframes om-card-smooth {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        [data-theme="light"] .om-story-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 60px 160px rgba(0,0,0,0.2);
        }
        
        .om-card-header {
          padding: clamp(16px, 3vw, 24px) clamp(20px, 4vw, 28px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-align: center;
        }
        
        [data-theme="light"] .om-card-header {
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        
        .om-card-title {
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 400;
          color: var(--om-text);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }
        
        .om-card-scroll {
          position: relative;
          max-height: calc(70vh - 80px);
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .om-card-scroll::-webkit-scrollbar {
          display: none;
        }
        
        .om-card-content {
          padding: clamp(20px, 4vw, 32px) clamp(20px, 4vw, 28px);
        }
        
        .om-card-content p {
          font-size: clamp(13px, 2vw, 15px);
          font-weight: 300;
          color: var(--om-text);
          line-height: 1.8;
          margin: 0 0 clamp(16px, 3vw, 24px);
          letter-spacing: 0.01em;
        }
        
        .om-card-content p:last-child {
          margin-bottom: 0;
        }
        
        /* Fade overlays */
        .om-fade-top {
          position: absolute;
          top: 60px;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(to bottom, 
            rgba(10, 10, 12, 0.95) 0%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 10;
        }
        
        .om-fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to top, 
            rgba(10, 10, 12, 0.95) 0%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 10;
        }
        
        [data-theme="light"] .om-fade-top {
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.98) 0%,
            transparent 100%
          );
        }
        
        [data-theme="light"] .om-fade-bottom {
          background: linear-gradient(to top, 
            rgba(255, 255, 255, 0.98) 0%,
            transparent 100%
          );
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* RESPONSIVE                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 768px) {
          .om-actions {
            flex-direction: row;
            gap: clamp(16px, 2.5vw, 24px);
          }
        }
        
        @media (max-height: 700px) {
          .om-page {
            gap: clamp(10px, 2vh, 16px);
            padding: 50px 20px 70px;
          }
        }
        
        @media (max-height: 600px) {
          .om-quote {
            display: none;
          }
          .om-pill {
            padding: 4px 10px;
            font-size: 9px;
          }
        }
      `}</style>

      <div className={`om-page ${isLoaded ? 'loaded' : ''}`}>
        {/* Cosmic Star Field */}
        <div className="om-stars">
          <div className="om-star" />
          <div className="om-star" />
          <div className="om-star" />
          <div className="om-star" />
          <div className="om-star" />
          <div className="om-star" />
          <div className="om-star" />
          <div className="om-star" />
        </div>

        {/* Title */}
        <h1 className="om-title">Overmind</h1>
        <p className="om-tagline">Solana Meme Token</p>

        {/* Hero Image + Actions */}
        <div className="om-media">
          <div className="om-hero-image">
            <FadeImage
              src="/images/twinkle.png"
              alt="Overmind"
              width={240}
              height={160}
              priority
            />
          </div>

          <div className="om-actions">
            <button className="om-action-btn story" onClick={() => setStoryOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 6v12M6 12h12" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>Story</span>
            </button>

            <a
              href="https://overmind.surge.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="om-action-btn launch"
            >
              <div className="om-launch-inner">
                <div className="om-launch-icon">
                  <img src="/images/twinkle.png" alt="Launch" />
                </div>
                <span>Launch</span>
              </div>
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className="om-quote">
          <p className="om-quote-text">"Second star to the right, and straight on till morning."</p>
          <p className="om-quote-author">Peter Pan</p>
        </div>

        {/* Tech Pills */}
        <div className="om-pills">
          {["Solana", "BNB Chain", "SPL Token", "React", "Surge"].map((tech, i) => (
            <span key={i} className="om-pill">{tech}</span>
          ))}
        </div>

        {/* Navigation */}
        <nav className="om-nav">
          <Link href="/work/octopus">← Octopus</Link>
          <Link href="/work">All Work</Link>
        </nav>
      </div>

      {/* Story Overlay */}
      {storyOpen && (
        <div className="om-overlay" onClick={() => setStoryOpen(false)}>
          <div className="om-story-card" onClick={e => e.stopPropagation()}>
            <div className="om-card-header">
              <h2 className="om-card-title">The Story</h2>
            </div>
            <div className="om-fade-top" />
            <div className="om-card-scroll">
              <div className="om-card-content">
                {storyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="om-fade-bottom" />
          </div>
          <button className="om-close" onClick={() => setStoryOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}