"use client";

import Link from "next/link";
import FadeImage from "@/components/FadeImage";

export default function Octopus() {
  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - THEME VARIABLES                                              */
        /* Making the world proud - elegant, refined, timeless                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --oc-bg: #050506;
          --oc-text: #FAFAF8;
          --oc-text-secondary: rgba(250, 250, 248, 0.7);
          --oc-text-muted: rgba(250, 250, 248, 0.5);
          --oc-border: rgba(255, 255, 255, 0.08);
          --oc-card-bg: #FAFAF8;
          --oc-node-bg: #050506;
        }
        
        [data-theme="light"] {
          --oc-bg: #F5F5F0;
          --oc-text: #1a1a1a;
          --oc-text-secondary: rgba(26, 26, 26, 0.7);
          --oc-text-muted: rgba(26, 26, 26, 0.5);
          --oc-border: rgba(0, 0, 0, 0.08);
          --oc-card-bg: #FFFFFF;
          --oc-node-bg: #F5F5F0;
        }

        .oc-page {
          min-height: 100vh;
          background: var(--oc-bg);
          padding-top: 60px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          overflow-x: hidden;
          overscroll-behavior: none;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* HERO SECTION                                                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .oc-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(20px, 4vh, 40px) 24px clamp(40px, 6vh, 60px);
          text-align: center;
        }

        .oc-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 200;
          color: var(--oc-text);
          margin-bottom: clamp(20px, 3vh, 32px);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .oc-hero-image {
          max-width: clamp(280px, 70vw, 500px);
          margin: 0 auto;
          box-shadow: 0 30px 80px rgba(0,0,0,0.3);
          border: 1px solid var(--oc-border);
          border-radius: 8px;
          overflow: hidden;
          background: var(--oc-card-bg);
        }

        [data-theme="dark"] .oc-hero-image {
          box-shadow: 0 30px 80px rgba(255,255,255,0.06);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STORY SECTION                                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .oc-story {
          max-width: 600px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
        }

        .oc-story p {
          font-size: clamp(14px, 1.8vw, 15px);
          color: var(--oc-text);
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 20px;
        }

        .oc-story p:last-child {
          margin-bottom: 0;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* ARCHITECTURE SECTION                                                            */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .oc-arch {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
        }

        .oc-section-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--oc-text);
          opacity: 0.5;
          margin-bottom: clamp(40px, 6vh, 56px);
          text-align: center;
        }

        .oc-arch-list {
          display: flex;
          flex-direction: column;
        }

        .oc-arch-item {
          display: flex;
          align-items: baseline;
          gap: clamp(12px, 3vw, 24px);
          padding: clamp(12px, 1.8vh, 16px) 0;
          border-bottom: 1px solid var(--oc-border);
        }

        .oc-arch-item:last-child {
          border-bottom: none;
        }

        .oc-arch-num {
          font-size: 10px;
          color: var(--oc-text-muted);
          font-family: 'SF Mono', Monaco, monospace;
          min-width: 20px;
          flex-shrink: 0;
        }

        .oc-arch-name {
          font-size: clamp(12px, 1.5vw, 14px);
          font-weight: 400;
          color: var(--oc-text);
          min-width: clamp(100px, 16vw, 140px);
          flex-shrink: 0;
        }

        .oc-arch-desc {
          font-size: clamp(11px, 1.3vw, 13px);
          color: var(--oc-text-secondary);
          font-weight: 300;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .oc-arch-item {
            flex-wrap: wrap;
          }
          .oc-arch-desc {
            flex-basis: 100%;
            padding-left: 32px;
            margin-top: 4px;
          }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* TRI-STORE MEMORY                                                                */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .oc-memory {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
        }

        .oc-memory-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: clamp(32px, 5vw, 48px);
        }

        .oc-memory-item {
          text-align: center;
        }

        .oc-memory-node {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid var(--oc-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto clamp(14px, 2vh, 20px);
          background: var(--oc-node-bg);
        }

        .oc-memory-num {
          font-size: 11px;
          color: var(--oc-text-secondary);
          font-family: 'SF Mono', Monaco, monospace;
        }

        .oc-memory-title {
          font-size: clamp(12px, 1.4vw, 13px);
          font-weight: 400;
          color: var(--oc-text);
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }

        .oc-memory-desc {
          font-size: 11px;
          color: var(--oc-text-secondary);
          line-height: 1.6;
          font-weight: 300;
          max-width: 220px;
          margin: 0 auto;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* SCREENSHOTS                                                                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .oc-screenshots {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
        }

        .oc-screenshots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
          gap: 24px;
        }

        .oc-screenshot {
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          border: 1px solid var(--oc-border);
          border-radius: 8px;
          overflow: hidden;
          background: var(--oc-card-bg);
        }

        [data-theme="dark"] .oc-screenshot {
          box-shadow: 0 20px 60px rgba(255,255,255,0.04);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* REFLECTION & STACK                                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .oc-reflection {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 80px) 24px;
          text-align: center;
        }

        .oc-reflection-text {
          font-size: 12px;
          color: var(--oc-text-secondary);
          line-height: 2.2;
          letter-spacing: 0.02em;
        }

        .oc-stack {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
          text-align: center;
        }

        .oc-stack-text {
          font-size: 12px;
          color: var(--oc-text-secondary);
          line-height: 2;
          letter-spacing: 0.02em;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* NAVIGATION                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */

        .oc-nav {
          border-top: 1px solid var(--oc-border);
          padding: 24px 20px;
        }

        .oc-nav-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .oc-nav-link {
          font-size: 10px;
          color: var(--oc-text);
          opacity: 0.5;
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: opacity 0.3s ease;
        }

        .oc-nav-link:hover {
          opacity: 1;
        }
      `}</style>

      <div className="oc-page">
        {/* Hero */}
        <div className="oc-hero">
          <h1 className="oc-title">Octopus</h1>
          <div className="oc-hero-image">
            <FadeImage
              src="/images/octopushero3.png"
              alt="Octopus Interface"
              width={500}
              height={350}
              priority
            />
          </div>
        </div>

        {/* Story */}
        <div className="oc-story">
          <p>
            This project is a strong reminder to me. Every time I doubt myself I should remember this. The vision was clear: a wrapped LLM that creates websites, Three.js games, Web3 applications. Nice, me and another million people. But that isn&apos;t the point.
          </p>
          <p>
            This was my first serious project. I didn&apos;t know what tests are. What backend is. Of course not database. But with intuition I managed to build my first API connection with an LLM, then round-robin pipelines, then the memory structure of Octopus. Days and nights breaking my head over it with no one actually noticing.
          </p>
          <p>
            Still a thing though. My nephew asked my mom to make him challah bread in an octopus shape, for me. This act will always remind me what good is. This fellow is Inbar.
          </p>
        </div>

        {/* Architecture */}
        <div className="oc-arch">
          <p className="oc-section-label">Core Architecture</p>
          <div className="oc-arch-list">
            {[
              { name: "Goal Parser", desc: "Natural language to structured goal with intent classification" },
              { name: "Task Decomposer", desc: "Top-down, bottom-up, hybrid, template, and learned strategies" },
              { name: "Plan Executor", desc: "Sequential, parallel, adaptive, priority, round-robin execution" },
              { name: "Task Graph", desc: "NetworkX DAG with dependency resolution and topological ordering" },
              { name: "Event Sourcing", desc: "Immutable cognitive events with causality chain tracking" },
              { name: "REST API", desc: "FastAPI endpoints for goal processing and system status" },
            ].map((item, i) => (
              <div key={i} className="oc-arch-item">
                <span className="oc-arch-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="oc-arch-name">{item.name}</span>
                <span className="oc-arch-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tri-Store Memory */}
        <div className="oc-memory">
          <p className="oc-section-label">Tri-Store Memory</p>
          <div className="oc-memory-grid">
            {[
              { num: "01", title: "Semantic", desc: "Facts, concepts, knowledge graph with similarity-based retrieval and importance scoring" },
              { num: "02", title: "Episodic", desc: "Time-ordered events with temporal context, emotional valence, and auto-summarization" },
              { num: "03", title: "Procedural", desc: "Workflow storage, execution tracking, pattern learning, and performance metrics" }
            ].map((item, i) => (
              <div key={i} className="oc-memory-item">
                <div className="oc-memory-node">
                  <span className="oc-memory-num">{item.num}</span>
                </div>
                <p className="oc-memory-title">{item.title}</p>
                <p className="oc-memory-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="oc-screenshots">
          <div className="oc-screenshots-grid">
            <div className="oc-screenshot">
              <FadeImage
                src="/images/ophoto1.jpg"
                alt="Octopus Planning View"
                width={600}
                height={400}
              />
            </div>
            <div className="oc-screenshot">
              <FadeImage
                src="/images/ophoto2.jpg"
                alt="Octopus Memory View"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Reflection System */}
        <div className="oc-reflection">
          <p className="oc-section-label">Reflection System</p>
          <p className="oc-reflection-text">
            Reflector · Meta-Reflector · Blind Spot Detector
          </p>
        </div>

        {/* Stack */}
        <div className="oc-stack">
          <p className="oc-section-label">Stack</p>
          <p className="oc-stack-text">
            Python · FastAPI · Motor · MongoDB · NetworkX · ChromaDB · Pydantic · structlog
          </p>
        </div>

        {/* Navigation */}
        <nav className="oc-nav">
          <div className="oc-nav-inner">
            <Link href="/work/megaagent" className="oc-nav-link">← MegaAgent</Link>
            <Link href="/work/overmind" className="oc-nav-link">Overmind →</Link>
          </div>
        </nav>
      </div>
    </>
  );
}