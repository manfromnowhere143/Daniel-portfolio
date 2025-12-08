"use client";

import Link from "next/link";

export default function Work() {
  const projects = [
    {
      name: "Trade69",
      description: "End-to-end algorithmic trading platform integrating multi-source market intelligence, machine learning, and quantitative risk management. Combines social sentiment, news APIs, dark pool activity, and market data to generate autonomous trading signals. Employs Hidden Markov Models for market regime detection, Random Forest classifiers for signal prediction, and Kelly Criterion for position sizing.",
      stats: "245 files • 32K+ lines • 11 data sources",
      href: "/work/trade69"
    },
    {
      name: "MegaAgent",
      description: "Multi-agent autonomous system with sophisticated portfolio management. Implements Markowitz portfolio optimization with CVaR constraints, LinUCB Thompson Sampling for adaptive learning, and circuit breaker patterns for fault tolerance. Coordinates multiple specialized agents through event-driven architecture with comprehensive monitoring and recovery mechanisms.",
      stats: "365 files • 258K lines • 12 core modules",
      href: "/work/megaagent"
    },
    {
      name: "Octopus",
      description: "Cognitive agent framework with advanced memory architecture and reasoning capabilities. Features 5 decomposition strategies for complex problem-solving, tri-store memory system (semantic, episodic, procedural), NetworkX-based directed acyclic graphs for task management, and meta-reflection with blind spot detection for continuous improvement.",
      stats: "5 strategies • 3 memory stores • NetworkX DAG",
      href: "/work/octopus"
    },
    {
      name: "Overmind",
      description: "Solana-based cryptocurrency project implementing autonomous collective intelligence through decentralized systems. Features token economics design, DeFi protocol integration, and blockchain-native governance mechanisms. Explores the intersection of artificial intelligence and distributed ledger technology.",
      stats: "Blockchain • Token economics • DeFi integration",
      href: "/work/overmind"
    }
  ];

  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "clamp(20px, 4vh, 40px) 24px clamp(20px, 3vh, 32px)",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(42px, 6vw, 58px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(20px, 3vh, 28px)",
          letterSpacing: "-0.01em",
          lineHeight: 1.1
        }}>
          Work
        </h1>
      </div>

      {/* Vertical Divider - White */}
      <div style={{
        width: "1px",
        height: "40px",
        backgroundColor: "#FAFAF8",
        margin: "0 auto clamp(40px, 6vh, 60px)"
      }} />

      {/* Projects List */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)"
      }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "1px",
          backgroundColor: "#1A1A1A"
        }}>
          {projects.map((project, index) => (
            <Link 
              key={index}
              href={project.href}
              style={{ 
                textDecoration: "none",
                display: "block",
                backgroundColor: "#0A0A0A",
                padding: "clamp(40px, 6vw, 56px) clamp(32px, 5vw, 48px)",
                transition: "background-color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0F0F0F"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0A0A0A"}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "flex-start",
                gap: "32px",
                flexWrap: "wrap"
              }}>
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <h2 style={{ 
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontSize: "clamp(24px, 3vw, 32px)", 
                    fontWeight: 300,
                    color: "#FAFAF8",
                    marginBottom: "clamp(16px, 2.5vh, 20px)",
                    letterSpacing: "-0.01em"
                  }}>
                    {project.name}
                  </h2>
                  <p style={{ 
                    fontSize: "clamp(15px, 1.9vw, 17px)", 
                    color: "#FAFAF8",
                    lineHeight: 1.8,
                    marginBottom: "clamp(16px, 2.5vh, 20px)",
                    fontWeight: 300,
                    letterSpacing: "0.01em"
                  }}>
                    {project.description}
                  </p>
                  <p style={{ 
                    fontSize: "clamp(13px, 1.6vw, 14px)", 
                    color: "#FAFAF8",
                    letterSpacing: "0.02em",
                    fontWeight: 300
                  }}>
                    {project.stats}
                  </p>
                </div>
                <div style={{ 
                  fontSize: "clamp(20px, 2.5vw, 24px)", 
                  color: "#FAFAF8",
                  marginTop: "8px"
                }}>
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Vertical Divider - White */}
      <div style={{
        width: "1px",
        height: "50px",
        backgroundColor: "#FAFAF8",
        margin: "clamp(60px, 10vh, 80px) auto"
      }} />

      {/* Technical Focus - Ultra Minimal */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px clamp(60px, 10vh, 80px)"
      }}>
        <h2 style={{
          fontSize: "clamp(11px, 1.4vw, 13px)",
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(64px, 10vh, 96px)",
          textAlign: "center"
        }}>
          Technical Focus
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(56px, 9vw, 96px)"
        }}>

          <div style={{ textAlign: "center" }}>
            <h3 style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FAFAF8",
              marginBottom: "clamp(28px, 5vh, 40px)"
            }}>
              Focus Areas
            </h3>
            <p style={{
              fontSize: "clamp(15px, 1.9vw, 17px)",
              color: "#FAFAF8",
              lineHeight: 2.2,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Algorithmic Trading<br/>
              Multi-Agent Systems<br/>
              Autonomous Software<br/>
              Machine Learning<br/>
              Cognitive Architecture
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3 style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FAFAF8",
              marginBottom: "clamp(28px, 5vh, 40px)"
            }}>
              Core Stack
            </h3>
            <p style={{
              fontSize: "clamp(15px, 1.9vw, 17px)",
              color: "#FAFAF8",
              lineHeight: 2.2,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Python<br/>
              PostgreSQL / MongoDB<br/>
              FastAPI<br/>
              scikit-learn / PyTorch<br/>
              Redis
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3 style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FAFAF8",
              marginBottom: "clamp(28px, 5vh, 40px)"
            }}>
              Techniques
            </h3>
            <p style={{
              fontSize: "clamp(15px, 1.9vw, 17px)",
              color: "#FAFAF8",
              lineHeight: 2.2,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Hidden Markov Models<br/>
              Kelly Criterion<br/>
              Contextual Bandits<br/>
              Portfolio Optimization<br/>
              Event Sourcing
            </p>
          </div>

        </div>
      </div>

      {/* Vertical Divider - White */}
      <div style={{
        width: "1px",
        height: "50px",
        backgroundColor: "#FAFAF8",
        margin: "clamp(60px, 10vh, 80px) auto"
      }} />

      {/* Back Link */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 100px)",
        textAlign: "center"
      }}>
        <Link href="/" style={{ 
          fontSize: "clamp(13px, 1.6vw, 14px)", 
          color: "#FAFAF8",
          textDecoration: "none",
          borderBottom: "1px solid #666666",
          paddingBottom: "2px",
          letterSpacing: "0.02em"
        }}>
          ← Back to About
        </Link>
      </div>

    </div>
  );
}
