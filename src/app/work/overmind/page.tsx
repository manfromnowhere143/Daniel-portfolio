"use client";

import Link from "next/link";
import FadeImage from "@/components/FadeImage";

export default function Overmind() {
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

        .om-page {
          min-height: 100vh;
          background: var(--om-bg);
          padding-top: 60px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          overflow-x: hidden;
          overscroll-behavior: none;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* HERO SECTION                                                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .om-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(20px, 4vh, 40px) 24px clamp(16px, 3vh, 24px);
          text-align: center;
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
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
        }

        [data-theme="light"] .om-hero-image {
          box-shadow: 0 40px 100px rgba(0,0,0,0.15);
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
        <div className="om-hero">
          <h1 className="om-title">Overmind</h1>
          <div className="om-hero-image">
            <FadeImage
              src="/images/overmind-hero.png"
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