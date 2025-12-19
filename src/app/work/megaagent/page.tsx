"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';

const MetatronCube = dynamic(() => import('@/components/MetatronCube'), {
  ssr: false,
  loading: () => <div style={{ width: '120px', height: '120px', margin: '0 auto' }} />
});

export default function MegaAgent() {
  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - THEME VARIABLES                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --ma-bg: #050506;
          --ma-text: #FAFAF8;
          --ma-text-secondary: rgba(250, 250, 248, 0.7);
          --ma-text-muted: rgba(250, 250, 248, 0.5);
          --ma-border: rgba(255, 255, 255, 0.08);
          --ma-card: #0a0a0b;
        }
        
        [data-theme="light"] {
          --ma-bg: #F5F5F0;
          --ma-text: #1a1a1a;
          --ma-text-secondary: rgba(26, 26, 26, 0.7);
          --ma-text-muted: rgba(26, 26, 26, 0.5);
          --ma-border: rgba(0, 0, 0, 0.08);
          --ma-card: #FFFFFF;
        }

        .ma-page {
          min-height: 100vh;
          background: var(--ma-bg);
          padding-top: 60px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          overflow-x: hidden;
          overscroll-behavior: none;
        }

        .ma-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(20px, 4vh, 40px) 24px clamp(24px, 4vh, 32px);
          text-align: center;
        }

        .ma-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 200;
          color: var(--ma-text);
          margin-bottom: clamp(20px, 3vh, 32px);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .ma-cube-container {
          margin: clamp(16px, 3vh, 28px) 0;
        }

        .ma-story {
          max-width: 600px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
        }

        .ma-story p {
          font-size: clamp(14px, 1.8vw, 15px);
          color: var(--ma-text);
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 20px;
        }

        .ma-story p:last-child {
          margin-bottom: 0;
        }

        .ma-section {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
        }

        .ma-section-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ma-text);
          opacity: 0.5;
          margin-bottom: clamp(48px, 8vh, 64px);
          text-align: center;
        }

        .ma-arch-container {
          position: relative;
        }

        .ma-arch-line {
          position: absolute;
          left: 24px;
          top: 24px;
          bottom: 24px;
          width: 1px;
          background: var(--ma-border);
        }

        .ma-arch-item {
          display: flex;
          align-items: flex-start;
          gap: clamp(24px, 4vw, 40px);
          margin-bottom: clamp(32px, 5vh, 48px);
          position: relative;
        }

        .ma-arch-item:last-child {
          margin-bottom: 0;
        }

        .ma-arch-node {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid var(--ma-border);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--ma-bg);
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .ma-arch-num {
          font-size: 11px;
          color: var(--ma-text-secondary);
          font-family: 'SF Mono', Monaco, monospace;
        }

        .ma-arch-content {
          padding-top: 4px;
        }

        .ma-arch-title {
          font-size: clamp(13px, 1.6vw, 15px);
          font-weight: 400;
          color: var(--ma-text);
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }

        .ma-arch-desc {
          font-size: clamp(12px, 1.4vw, 13px);
          color: var(--ma-text-secondary);
          line-height: 1.6;
          font-weight: 300;
          max-width: 500px;
        }

        .ma-caps-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 100px) 24px;
        }

        .ma-caps-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ma-text);
          opacity: 0.5;
          margin-bottom: clamp(40px, 6vh, 56px);
          text-align: center;
        }

        .ma-caps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--ma-border);
        }

        @media (max-width: 600px) {
          .ma-caps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .ma-cap-item {
          padding: clamp(20px, 3vw, 32px);
          background: var(--ma-bg);
          text-align: center;
        }

        .ma-cap-name {
          font-size: clamp(12px, 1.4vw, 13px);
          font-weight: 400;
          color: var(--ma-text);
          margin-bottom: 8px;
        }

        .ma-cap-desc {
          font-size: 11px;
          color: var(--ma-text-secondary);
          line-height: 1.5;
        }

        .ma-feeds-section {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(60px, 10vh, 80px) 24px;
          text-align: center;
        }

        .ma-feeds-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ma-text);
          opacity: 0.5;
          margin-bottom: clamp(16px, 3vh, 24px);
        }

        .ma-feeds-desc {
          font-size: clamp(14px, 1.8vw, 15px);
          color: var(--ma-text);
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: clamp(32px, 5vh, 40px);
        }

        .ma-feeds-list {
          font-size: 12px;
          color: var(--ma-text-secondary);
          line-height: 2.2;
          letter-spacing: 0.02em;
        }

        .ma-stats-section {
          max-width: 600px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
        }

        .ma-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        @media (max-width: 400px) {
          .ma-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        .ma-stat-item {
          text-align: center;
        }

        .ma-stat-value {
          font-size: 16px;
          font-weight: 300;
          color: var(--ma-text);
          letter-spacing: -0.01em;
          margin-bottom: 2px;
        }

        .ma-stat-label {
          font-size: 8px;
          color: var(--ma-text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .ma-stack-section {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 60px) 24px;
          text-align: center;
        }

        .ma-stack-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ma-text);
          opacity: 0.5;
          margin-bottom: clamp(16px, 3vh, 24px);
        }

        .ma-stack-list {
          font-size: 12px;
          color: var(--ma-text-secondary);
          line-height: 2;
          letter-spacing: 0.02em;
        }

        .ma-nav {
          border-top: 1px solid var(--ma-border);
          padding: 24px 20px;
        }

        .ma-nav-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .ma-nav-link {
          font-size: 10px;
          color: var(--ma-text);
          opacity: 0.5;
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: opacity 0.3s ease;
        }

        .ma-nav-link:hover {
          opacity: 1;
        }
      `}</style>

      <div className="ma-page">
        {/* Hero Section */}
        <div className="ma-hero">
          <h1 className="ma-title">MegaAgent</h1>
          <div className="ma-cube-container">
            <MetatronCube />
          </div>
        </div>

        {/* Personal Story */}
        <div className="ma-story">
          <p>
            Back in July-August I was still lost in space. Lack of confidence and hiding from the world, I couldn&apos;t find what I&apos;m good at. So I said okay, let&apos;s build agents that will tell me what&apos;s profitable. That&apos;s how it started.
          </p>
          <p>
            This project touched my software development the most. It started with finding the most efficient way to work as a solo developer, structuring my own environment, accelerating by automating everything. Pre-commit, ruff, tests... I actually started testing seriously here. 3,200 tests, 100% passing.
          </p>
          <p>
            Honestly, I don&apos;t know what I was trying to improve or for who. Kind of what I&apos;m doing now. So later I wanted to deploy the 15 agents, 8 models, all the services. Building the tree and tests like blind. Wait, I actually built 30 opportunity scrapers trying to cover the entire internet. All for one reason: find billion-dollar opportunities and build solutions for them.
          </p>
          <p>
            Anyway, this is when I learned how to properly work with GitHub. Became an API expert and did that for about three months. Learned Docker, Poetry for dependencies, Kubernetes for dynamic deployment. And I found out I don&apos;t need to be a math genius to use state-of-the-art mathematics that&apos;s already there. Markov models, Thompson sampling, Kelly criterion and many more. I just need to know what mathematics belongs where.
          </p>
          <p>
            I was that ambitious and ignorant. Well, MegaAgent does deploy Notion pages, create Stripe products, find opportunities apparently, but I never bothered making it actually build SaaS. Science fiction, right?
          </p>
        </div>

        {/* Architecture */}
        <div className="ma-section">
          <p className="ma-section-label">Architecture</p>
          <div className="ma-arch-container">
            <div className="ma-arch-line" />
            {[
              { layer: "Orchestration", desc: "Central coordinator managing agent lifecycle with health monitoring and graceful degradation" },
              { layer: "Economic Brain", desc: "Dynamic factor models with 50+ economic indicators and automatic feature selection" },
              { layer: "Learning Engine", desc: "LinUCB algorithm with ridge regression for exploration-exploitation balance" },
              { layer: "Portfolio Optimizer", desc: "Markowitz mean-variance with efficient frontier and maximum Sharpe ratio selection" },
              { layer: "Resilience Layer", desc: "Circuit breaker with three states, sliding window failure rate calculation" }
            ].map((item, i) => (
              <div key={i} className="ma-arch-item">
                <div className="ma-arch-node">
                  <span className="ma-arch-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="ma-arch-content">
                  <p className="ma-arch-title">{item.layer}</p>
                  <p className="ma-arch-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="ma-caps-section">
          <p className="ma-caps-label">Capabilities</p>
          <div className="ma-caps-grid">
            {[
              { name: "Multi-Agent DAG", desc: "Task dependencies and priority queues" },
              { name: "Portfolio Theory", desc: "CVaR risk constraints optimization" },
              { name: "Reinforcement Learning", desc: "Thompson Sampling exploration" },
              { name: "Bayesian Networks", desc: "Belief propagation inference" },
              { name: "Circuit Breaker", desc: "Z-score anomaly detection" },
              { name: "Revenue Engine", desc: "End-to-end execution pipeline" },
            ].map((item, i) => (
              <div key={i} className="ma-cap-item">
                <p className="ma-cap-name">{item.name}</p>
                <p className="ma-cap-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunity Feeds */}
        <div className="ma-feeds-section">
          <p className="ma-feeds-label">30 Opportunity Feeds</p>
          <p className="ma-feeds-desc">
            Automated scanning across multiple domains with standardized scoring pipelines.
          </p>
          <p className="ma-feeds-list">
            GitHub Trending · Market Intelligence · Business Signals · Technical Analysis · Sentiment Feeds · Economic Indicators
          </p>
        </div>

        {/* Stats */}
        <div className="ma-stats-section">
          <div className="ma-stats-grid">
            {[
              { value: "365", label: "Files" },
              { value: "258K", label: "Lines" },
              { value: "3,200", label: "Tests" },
              { value: "100%", label: "Passing" }
            ].map((item, i) => (
              <div key={i} className="ma-stat-item">
                <p className="ma-stat-value">{item.value}</p>
                <p className="ma-stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="ma-stack-section">
          <p className="ma-stack-label">Stack</p>
          <p className="ma-stack-list">
            Python · FastAPI · SQLAlchemy · PostgreSQL · Redis · PyTorch · scikit-learn · scipy · cvxpy · Pydantic
          </p>
        </div>

        {/* Navigation */}
        <nav className="ma-nav">
          <div className="ma-nav-inner">
            <Link href="/work/trade69" className="ma-nav-link">← Trade69</Link>
            <Link href="/work/octopus" className="ma-nav-link">Octopus →</Link>
          </div>
        </nav>
      </div>
    </>
  );
}