"use client";

import Link from "next/link";

export default function Work() {
  const projects = [
    {
      name: "Trade69",
      description: "Algorithmic trading platform with ML-powered signal detection",
      stats: "245 files • 32K+ lines • 11 data sources",
      href: "/work/trade69"
    },
    {
      name: "MegaAgent",
      description: "Multi-agent orchestration with portfolio optimization",
      stats: "365 files • 258K lines • 12 core modules",
      href: "/work/megaagent"
    },
    {
      name: "Octopus",
      description: "Cognitive agent framework with tri-store memory",
      stats: "5 strategies • 3 memory stores • NetworkX DAG",
      href: "/work/octopus"
    },
    {
      name: "Overmind",
      description: "Solana-based autonomous collective intelligence",
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
        padding: "clamp(20px, 4vh, 40px) 24px clamp(40px, 6vh, 60px)",
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
        <p style={{ 
          fontSize: "clamp(16px, 2vw, 18px)", 
          color: "#999999",
          lineHeight: 1.8,
          fontWeight: 300,
          letterSpacing: "0.01em"
        }}>
          Autonomous systems, algorithmic trading, and cognitive frameworks
        </p>
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
                    marginBottom: "clamp(12px, 2vh, 16px)",
                    letterSpacing: "-0.01em"
                  }}>
                    {project.name}
                  </h2>
                  <p style={{ 
                    fontSize: "clamp(15px, 1.9vw, 17px)", 
                    color: "#999999",
                    lineHeight: 1.7,
                    marginBottom: "clamp(12px, 2vh, 16px)",
                    fontWeight: 300,
                    letterSpacing: "0.01em"
                  }}>
                    {project.description}
                  </p>
                  <p style={{ 
                    fontSize: "clamp(13px, 1.6vw, 14px)", 
                    color: "#666666",
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

      {/* Back Link */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 100px)",
        textAlign: "center"
      }}>
        <Link href="/" style={{ 
          fontSize: "clamp(13px, 1.6vw, 14px)", 
          color: "#666666",
          textDecoration: "none",
          borderBottom: "1px solid #333333",
          paddingBottom: "2px",
          letterSpacing: "0.02em"
        }}>
          ← Back to About
        </Link>
      </div>

    </div>
  );
}
