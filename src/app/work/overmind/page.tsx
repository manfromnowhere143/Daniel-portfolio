"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FadeImage from "@/components/FadeImage";

export default function Overmind() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - THEME VARIABLES                                              */
        /* Nikola Tesla would be proud - elegant, refined, timeless                        */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --om-bg: #050506;
          --om-text: #FAFAF8;
          --om-text-secondary: rgba(250, 250, 248, 0.7);
          --om-text-muted: rgba(250, 250, 248, 0.5);
          --om-border: rgba(255, 255, 255, 0.08);
          --om-card: rgba(40, 40, 45, 0.4);
          --om-btn-bg: #FAFAF8;
          --om-btn-text: #0A0A0A;
        }
        
        [data-theme="light"] {
          --om-bg: #F5F5F0;
          --om-text: #1a1a1a;
          --om-text-secondary: rgba(26, 26, 26, 0.7);
          --om-text-muted: rgba(26, 26, 26, 0.5);
          --om-border: rgba(0, 0, 0, 0.08);
          --om-card: rgba(255, 255, 255, 0.6);
          --om-btn-bg: #1a1a1a;
          --om-btn-text: #FAFAF8;
        }

        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        
        html, body {
          overscroll-behavior: none;
          overscroll-behavior-y: none;
          -webkit-overflow-scrolling: touch;
        }

        .om-page {
          min-height: 100vh;
          background: var(--om-bg);
          padding-top: 60px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          overflow-x: hidden;
          overscroll-behavior: none;
          overscroll-behavior-y: none;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* HERO SECTION                                                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .om-hero {
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
        
        .om-hero.loaded {
          opacity: 1;
          transform: translateZ(0) translateY(0);
        }

        .om-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 200;
          color: var(--om-text);
          margin-bottom: clamp(20px, 3vh, 32px);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .om-hero-image {
          max-width: clamp(260px, 65vw, 500px);
          margin: 0 auto;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5),
                      0 0 0 1px rgba(255,255,255,0.08);
          background: linear-gradient(145deg, rgba(20,20,25,0.8), rgba(10,10,15,0.9));
          position: relative;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s ease;
        }
        
        /* Subtle glow animation */
        .om-hero-image::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          background: linear-gradient(135deg, 
            rgba(100, 120, 255, 0.15) 0%, 
            rgba(255, 100, 150, 0.1) 50%,
            rgba(100, 200, 255, 0.12) 100%);
          opacity: 0.6;
          z-index: -1;
          animation: om-heroGlow 4s ease-in-out infinite alternate;
        }
        
        @keyframes om-heroGlow {
          0% { opacity: 0.4; transform: scale(1); }
          100% { opacity: 0.7; transform: scale(1.02); }
        }
        
        .om-hero-image:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 50px 120px rgba(0,0,0,0.6),
                      0 0 0 1px rgba(255,255,255,0.12);
        }

        [data-theme="light"] .om-hero-image {
          box-shadow: 0 40px 100px rgba(0,0,0,0.15),
                      0 0 0 1px rgba(0,0,0,0.06);
          background: linear-gradient(145deg, rgba(255,255,255,0.9), rgba(248,248,245,0.95));
        }
        
        [data-theme="light"] .om-hero-image::before {
          background: linear-gradient(135deg, 
            rgba(100, 120, 255, 0.08) 0%, 
            rgba(255, 100, 150, 0.05) 50%,
            rgba(100, 200, 255, 0.06) 100%);
        }
        
        [data-theme="light"] .om-hero-image:hover {
          box-shadow: 0 50px 120px rgba(0,0,0,0.2),
                      0 0 0 1px rgba(0,0,0,0.08);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STORY SECTION                                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .om-story {
          max-width: 600px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
        }

        .om-story p {
          font-size: clamp(14px, 1.8vw, 15px);
          color: var(--om-text);
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 20px;
        }

        .om-story p:last-child {
          margin-bottom: 0;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* IMPLEMENTATION SECTION                                                          */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .om-tech {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 80px) 24px;
          text-align: center;
        }

        .om-section-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--om-text);
          opacity: 0.5;
          margin-bottom: clamp(24px, 4vh, 32px);
        }

        .om-tech-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: clamp(40px, 6vh, 56px);
        }

        .om-tech-item {
          font-size: 12px;
          color: var(--om-text);
          padding: 10px 20px;
          border: 1px solid var(--om-border);
          border-radius: 4px;
          background: var(--om-card);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .om-tech-item:hover {
          border-color: var(--om-text-muted);
        }

        .om-cta-btn {
          display: inline-block;
          padding: 14px 44px;
          background: var(--om-btn-bg);
          color: var(--om-btn-text);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .om-cta-btn:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }

        .om-cta-btn:active {
          transform: translateY(0);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* QUOTE SECTION                                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .om-quote {
          max-width: 700px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 80px) 24px;
          text-align: center;
        }

        .om-quote-text {
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 200;
          color: var(--om-text);
          line-height: 1.8;
          margin-bottom: clamp(16px, 3vh, 24px);
          letter-spacing: 0.08em;
          font-style: italic;
        }

        .om-quote-author {
          font-size: 10px;
          color: var(--om-text-muted);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* NAVIGATION                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .om-nav {
          border-top: 1px solid var(--om-border);
          padding: 24px 20px;
        }

        .om-nav-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .om-nav-link {
          font-size: 10px;
          color: var(--om-text);
          opacity: 0.5;
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: opacity 0.3s ease;
        }

        .om-nav-link:hover {
          opacity: 1;
        }
      `}</style>

      <div className="om-page">
        {/* Hero */}
        <div className={`om-hero ${isLoaded ? 'loaded' : ''}`}>
          <h1 className="om-title">Overmind</h1>
          <div className="om-hero-image">
            <FadeImage
              src="/images/twinkle.png"
              alt="Overmind"
              width={640}
              height={420}
              priority
            />
          </div>
        </div>

        {/* Story */}
        <div className="om-story">
          <p>
            The token I made is nothing serious, just a meme token, a simple smart contract deployed on Solana and BNB Smart Chain because of the low fees. But for me, it was an important step in learning blockchain deployments, smart-contract interaction, and the whole process end to end.
          </p>
          <p>
            It represents the intersection of philosophy and technology—exploring decentralized systems while questioning what gives anything value in the first place.
          </p>
        </div>

        {/* Technical Section */}
        <div className="om-tech">
          <p className="om-section-label">Implementation</p>
          <div className="om-tech-grid">
            {["Solana", "BNB Smart Chain", "SPL Token", "React", "Surge"].map((item, i) => (
              <span key={i} className="om-tech-item">{item}</span>
            ))}
          </div>
          <a
            href="https://overmind.surge.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="om-cta-btn"
          >
            Visit Overmind
          </a>
        </div>

        {/* Quote */}
        <div className="om-quote">
          <p className="om-quote-text">
            "Second star to the right, and straight on till morning."
          </p>
          <p className="om-quote-author">Peter Pan</p>
        </div>

        {/* Navigation */}
        <nav className="om-nav">
          <div className="om-nav-inner">
            <Link href="/work/octopus" className="om-nav-link">← Octopus</Link>
            <Link href="/work" className="om-nav-link">All Work</Link>
          </div>
        </nav>
      </div>
    </>
  );
}