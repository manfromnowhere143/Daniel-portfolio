"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MetatronCube = dynamic(() => import("@/components/MetatronCube"), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="ma-spinner" />
    </div>
  )
});

export default function MegaAgent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [archOpen, setArchOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = '';
    setTimeout(() => setIsLoaded(true), 100);
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Story paragraphs
  const storyParagraphs = [
    "Back in July-August I was still lost in space. Lack of confidence and hiding from the world, I couldn't find what I'm good at. So I said okay, let's build agents that will tell me what's profitable. That's how it started.",
    "This project touched my software development the most. It started with finding the most efficient way to work as a solo developer, structuring my own environment, accelerating by automating everything. Pre-commit, ruff, tests... I actually started testing seriously here. 3,200 tests, 100% passing.",
    "Honestly, I don't know what I was trying to improve or for who. Kind of what I'm doing now. So later I wanted to deploy the 15 agents, 8 models, all the services. Building the tree and tests like blind. Wait, I actually built 30 opportunity scrapers trying to cover the entire internet. All for one reason: find billion-dollar opportunities and build solutions for them.",
    "Anyway, this is when I learned how to properly work with GitHub. Became an API expert and did that for about three months. Learned Docker, Poetry for dependencies, Kubernetes for dynamic deployment. And I found out I don't need to be a math genius to use state-of-the-art mathematics that's already there. Markov models, Thompson sampling, Kelly criterion and many more. I just need to know what mathematics belongs where.",
    "I was that ambitious and ignorant. Well, MegaAgent does deploy Notion pages, create Stripe products, find opportunities apparently, but I never bothered making it actually build SaaS. Science fiction, right?"
  ];

  // Architecture layers
  const archLayers = [
    { name: "Orchestration", desc: "Central coordinator managing agent lifecycle with health monitoring and graceful degradation" },
    { name: "Economic Brain", desc: "Dynamic factor models with 50+ economic indicators and automatic feature selection" },
    { name: "Learning Engine", desc: "LinUCB algorithm with ridge regression for exploration-exploitation balance" },
    { name: "Portfolio Optimizer", desc: "Markowitz mean-variance with efficient frontier and maximum Sharpe ratio selection" },
    { name: "Resilience Layer", desc: "Circuit breaker with three states, sliding window failure rate calculation" }
  ];

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* MEGAAGENT - VOID ELEGANCE                                                       */
        /* Fixed viewport, floating elements, pure white on black                          */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --ma-bg: #000000;
          --ma-text: #FFFFFF;
          --ma-text-soft: rgba(255, 255, 255, 0.75);
          --ma-text-muted: rgba(255, 255, 255, 0.4);
          --ma-border: rgba(255, 255, 255, 0.1);
        }
        
        [data-theme="light"] {
          --ma-bg: #FAFAFA;
          --ma-text: #000000;
          --ma-text-soft: rgba(0, 0, 0, 0.7);
          --ma-text-muted: rgba(0, 0, 0, 0.4);
          --ma-border: rgba(0, 0, 0, 0.1);
        }

        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          overscroll-behavior: none;
          overflow: hidden;
          touch-action: none;
        }

        .ma-page {
          position: fixed !important;
          inset: 0 !important;
          background: var(--ma-bg);
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
        
        .ma-page.loaded { opacity: 1; }

        .ma-spinner {
          width: 24px;
          height: 24px;
          border: 1px solid rgba(255,255,255,0.2);
          border-top-color: rgba(255,255,255,0.6);
          border-radius: 50%;
          animation: ma-spin 1s linear infinite;
        }
        
        @keyframes ma-spin {
          to { transform: rotate(360deg); }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* TITLE                                                                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .ma-title {
          font-size: clamp(28px, 6vw, 52px);
          font-weight: 100;
          color: var(--ma-text);
          letter-spacing: 0.25em;
          margin: 0;
          text-transform: uppercase;
          opacity: 0;
          animation: ma-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
        }
        
        .ma-tagline {
          font-size: clamp(10px, 1.8vw, 13px);
          font-weight: 300;
          color: var(--ma-text);
          letter-spacing: 0.15em;
          margin: clamp(-6px, -1vh, -2px) 0 0;
          text-transform: uppercase;
          opacity: 0;
          animation: ma-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        }
        
        @keyframes ma-spring-up {
          0% { opacity: 0; transform: translateY(30px) scale(0.96); }
          60% { transform: translateY(-4px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* CUBE + ACTION BUTTONS                                                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .ma-media {
          display: flex;
          align-items: center;
          gap: clamp(20px, 4vw, 36px);
          opacity: 0;
          animation: ma-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
        }

        .ma-cube-container {
          width: clamp(90px, 18vw, 130px);
          height: clamp(90px, 18vw, 130px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ma-actions {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.5vw, 14px);
        }
        
        .ma-action-btn {
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
        
        /* Story Button - Deep purple */
        .ma-action-btn.story {
          background: linear-gradient(145deg, 
            #0f0818 0%, 
            #1a0d28 40%,
            #251438 70%,
            #1a0d28 100%
          );
          box-shadow: 
            0 0 0 1px rgba(100, 60, 140, 0.25),
            0 10px 40px rgba(26, 13, 40, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }
        
        .ma-action-btn.story:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(100, 60, 140, 0.4),
            0 20px 60px rgba(26, 13, 40, 0.9),
            0 0 60px rgba(100, 60, 140, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }
        
        /* Architecture Button - Deep blue */
        .ma-action-btn.arch {
          background: linear-gradient(145deg, 
            #050a14 0%, 
            #0a1428 40%,
            #0f1e3d 70%,
            #0a1428 100%
          );
          box-shadow: 
            0 0 0 1px rgba(40, 80, 140, 0.25),
            0 10px 40px rgba(10, 20, 40, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        
        .ma-action-btn.arch:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(40, 80, 140, 0.4),
            0 20px 60px rgba(10, 20, 40, 0.9),
            0 0 60px rgba(40, 80, 140, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }
        
        .ma-action-btn:active {
          transform: scale(0.95) !important;
          transition: transform 0.1s ease !important;
        }
        
        .ma-action-btn svg {
          width: clamp(20px, 3.5vw, 26px);
          height: clamp(20px, 3.5vw, 26px);
          color: #FFFFFF;
        }
        
        .ma-action-btn span {
          font-size: clamp(7px, 1.2vw, 9px);
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        
        .ma-action-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATS ROW                                                                       */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .ma-stats {
          display: flex;
          gap: clamp(24px, 6vw, 48px);
          opacity: 0;
          animation: ma-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
        }
        
        .ma-stat {
          text-align: center;
        }
        
        .ma-stat-value {
          font-size: clamp(16px, 3vw, 22px);
          font-weight: 200;
          color: var(--ma-text);
          letter-spacing: -0.02em;
        }
        
        .ma-stat-label {
          font-size: clamp(8px, 1.3vw, 10px);
          font-weight: 400;
          color: var(--ma-text-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* TECH PILLS                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .ma-pills {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(6px, 1vw, 10px);
          justify-content: center;
          max-width: 600px;
          opacity: 0;
          animation: ma-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
        }
        
        .ma-pill {
          font-size: clamp(9px, 1.6vw, 12px);
          font-weight: 300;
          letter-spacing: 0.04em;
          color: var(--ma-text);
          padding: clamp(5px, 0.8vh, 8px) clamp(12px, 2vw, 18px);
          background: transparent;
          border: 1px solid var(--ma-border);
          border-radius: 100px;
          white-space: nowrap;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }
        
        .ma-pill:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
        
        [data-theme="light"] .ma-pill:hover {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.15);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* NAVIGATION                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .ma-nav {
          position: fixed;
          bottom: clamp(20px, 4vh, 36px);
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: clamp(80px, 25vw, 200px);
          z-index: 10;
          opacity: 0;
          animation: ma-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
        }
        
        .ma-nav a {
          font-size: clamp(11px, 1.8vw, 13px);
          font-weight: 400;
          color: var(--ma-text);
          text-decoration: none;
          letter-spacing: 0.05em;
          opacity: 0.6;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .ma-nav a:hover {
          opacity: 1;
          transform: translateX(5px);
        }
        
        .ma-nav a:first-child:hover {
          transform: translateX(-5px);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* OVERLAYS                                                                        */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .ma-overlay {
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
          animation: ma-overlay-fade 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: opacity;
          transform: translateZ(0);
        }
        
        @keyframes ma-overlay-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        [data-theme="light"] .ma-overlay {
          background: rgba(250,250,250,0.98);
        }
        
        .ma-close {
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
          animation: ma-close-fade 0.3s ease 0.15s forwards;
        }
        
        @keyframes ma-close-fade {
          from { opacity: 0; transform: translateX(-50%) scale(0.9); }
          to { opacity: 1; transform: translateX(-50%) scale(1); }
        }
        
        [data-theme="light"] .ma-close {
          background: rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.1);
        }
        
        .ma-close:hover {
          background: rgba(255,255,255,0.2);
          transform: translateX(-50%) scale(1.08);
        }
        
        .ma-close svg {
          width: 22px;
          height: 22px;
          color: #FFFFFF;
        }
        
        [data-theme="light"] .ma-close svg {
          color: #000000;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STORY CARD - Floating text container like About page                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .ma-story-card {
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
          animation: ma-card-smooth 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          overflow: hidden;
          position: relative;
        }
        
        @keyframes ma-card-smooth {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        [data-theme="light"] .ma-story-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 60px 160px rgba(0,0,0,0.2);
        }
        
        .ma-story-header {
          padding: clamp(16px, 3vw, 24px) clamp(20px, 4vw, 28px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-align: center;
        }
        
        [data-theme="light"] .ma-story-header {
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        
        .ma-story-title {
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 400;
          color: var(--ma-text);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }
        
        .ma-story-scroll {
          position: relative;
          max-height: calc(70vh - 80px);
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .ma-story-scroll::-webkit-scrollbar {
          display: none;
        }
        
        .ma-story-content {
          padding: clamp(20px, 4vw, 32px) clamp(20px, 4vw, 28px);
        }
        
        .ma-story-content p {
          font-size: clamp(13px, 2vw, 15px);
          font-weight: 300;
          color: var(--ma-text);
          line-height: 1.8;
          margin: 0 0 clamp(16px, 3vw, 24px);
          letter-spacing: 0.01em;
        }
        
        .ma-story-content p:last-child {
          margin-bottom: 0;
        }
        
        /* Fade overlays */
        .ma-story-fade-top {
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
        
        .ma-story-fade-bottom {
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
        
        [data-theme="light"] .ma-story-fade-top {
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.98) 0%,
            transparent 100%
          );
        }
        
        [data-theme="light"] .ma-story-fade-bottom {
          background: linear-gradient(to top, 
            rgba(255, 255, 255, 0.98) 0%,
            transparent 100%
          );
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* ARCHITECTURE CARD                                                               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .ma-arch-card {
          width: clamp(300px, 85vw, 480px);
          max-height: 75vh;
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
          animation: ma-card-smooth 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          overflow: hidden;
        }
        
        [data-theme="light"] .ma-arch-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 60px 160px rgba(0,0,0,0.2);
        }
        
        .ma-arch-header {
          padding: clamp(16px, 3vw, 24px) clamp(20px, 4vw, 28px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-align: center;
        }
        
        [data-theme="light"] .ma-arch-header {
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        
        .ma-arch-title {
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 400;
          color: var(--ma-text);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }
        
        .ma-arch-scroll {
          max-height: calc(75vh - 80px);
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: clamp(20px, 4vw, 28px);
        }
        
        .ma-arch-scroll::-webkit-scrollbar {
          display: none;
        }
        
        .ma-arch-list {
          position: relative;
        }
        
        .ma-arch-line {
          position: absolute;
          left: 18px;
          top: 28px;
          bottom: 28px;
          width: 1px;
          background: rgba(255,255,255,0.1);
        }
        
        [data-theme="light"] .ma-arch-line {
          background: rgba(0,0,0,0.1);
        }
        
        .ma-arch-item {
          display: flex;
          gap: clamp(16px, 3vw, 24px);
          margin-bottom: clamp(20px, 4vw, 28px);
          position: relative;
        }
        
        .ma-arch-item:last-child {
          margin-bottom: 0;
        }
        
        .ma-arch-node {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        
        [data-theme="light"] .ma-arch-node {
          border: 1px solid rgba(0,0,0,0.15);
          background: rgba(255,255,255,0.8);
        }
        
        .ma-arch-num {
          font-size: 11px;
          font-weight: 400;
          color: var(--ma-text);
          font-family: 'SF Mono', Monaco, monospace;
        }
        
        .ma-arch-info {
          padding-top: 2px;
        }
        
        .ma-arch-name {
          font-size: clamp(13px, 2vw, 15px);
          font-weight: 400;
          color: var(--ma-text);
          margin: 0 0 6px;
          letter-spacing: 0.02em;
        }
        
        .ma-arch-desc {
          font-size: clamp(11px, 1.6vw, 13px);
          font-weight: 300;
          color: var(--ma-text-soft);
          line-height: 1.6;
          margin: 0;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* RESPONSIVE                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 768px) {
          .ma-actions {
            flex-direction: row;
            gap: clamp(16px, 2.5vw, 24px);
          }
        }
        
        @media (max-height: 700px) {
          .ma-page {
            gap: clamp(10px, 2vh, 16px);
            padding: 50px 20px 70px;
          }
        }
        
        @media (max-height: 600px) {
          .ma-stats {
            display: none;
          }
          .ma-pill {
            padding: 4px 10px;
            font-size: 9px;
          }
        }
      `}</style>

      <div className={`ma-page ${isLoaded ? 'loaded' : ''}`}>
        {/* Title */}
        <h1 className="ma-title">MegaAgent</h1>
        <p className="ma-tagline">Multi-Agent Intelligence System</p>

        {/* Cube + Actions */}
        <div className="ma-media">
          <div className="ma-cube-container">
            <MetatronCube />
          </div>

          <div className="ma-actions">
            <button className="ma-action-btn story" onClick={() => setStoryOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 6v12M6 12h12" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>Story</span>
            </button>

            <button className="ma-action-btn arch" onClick={() => setArchOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>System</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="ma-stats">
          {[
            { value: "365", label: "Files" },
            { value: "258K", label: "Lines" },
            { value: "3,200", label: "Tests" },
            { value: "100%", label: "Passing" }
          ].map((stat, i) => (
            <div key={i} className="ma-stat">
              <div className="ma-stat-value">{stat.value}</div>
              <div className="ma-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Pills */}
        <div className="ma-pills">
          {["Python", "FastAPI", "PostgreSQL", "Redis", "PyTorch", "scikit-learn", "Pydantic"].map((tech, i) => (
            <span key={i} className="ma-pill">{tech}</span>
          ))}
        </div>

        {/* Navigation */}
        <nav className="ma-nav">
          <Link href="/work/trade69">← Trade69</Link>
          <Link href="/work/octopus">Octopus →</Link>
        </nav>
      </div>

      {/* Story Overlay */}
      {storyOpen && (
        <div className="ma-overlay" onClick={() => setStoryOpen(false)}>
          <div className="ma-story-card" onClick={e => e.stopPropagation()}>
            <div className="ma-story-header">
              <h2 className="ma-story-title">The Story</h2>
            </div>
            <div className="ma-story-fade-top" />
            <div className="ma-story-scroll">
              <div className="ma-story-content">
                {storyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="ma-story-fade-bottom" />
          </div>
          <button className="ma-close" onClick={() => setStoryOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Architecture Overlay */}
      {archOpen && (
        <div className="ma-overlay" onClick={() => setArchOpen(false)}>
          <div className="ma-arch-card" onClick={e => e.stopPropagation()}>
            <div className="ma-arch-header">
              <h2 className="ma-arch-title">Architecture</h2>
            </div>
            <div className="ma-arch-scroll">
              <div className="ma-arch-list">
                <div className="ma-arch-line" />
                {archLayers.map((layer, i) => (
                  <div key={i} className="ma-arch-item">
                    <div className="ma-arch-node">
                      <span className="ma-arch-num">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="ma-arch-info">
                      <p className="ma-arch-name">{layer.name}</p>
                      <p className="ma-arch-desc">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="ma-close" onClick={() => setArchOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}