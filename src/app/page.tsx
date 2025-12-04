import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero Section - Whisper Quiet */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "clamp(20px, 4vh, 40px) 24px clamp(60px, 10vh, 80px)",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(42px, 6vw, 58px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 2vh, 20px)",
          letterSpacing: "-0.01em",
          lineHeight: 1.1
        }}>
          Daniel Wahnich
        </h1>
        <p style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(16px, 2vw, 20px)", 
          fontStyle: "italic",
          fontWeight: 300,
          color: "#666666",
          letterSpacing: "0.15em",
          marginBottom: "clamp(32px, 5vh, 48px)"
        }}>
          Ostinato Rigore
        </p>
        <p style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(18px, 2.5vw, 24px)", 
          fontWeight: 300,
          color: "#999999",
          letterSpacing: "0.05em",
          lineHeight: 1.4
        }}>
          Artist, Autodidact, Builder
        </p>
      </div>

      {/* Subtle Divider - White */}
      <div style={{
        width: "1px",
        height: "40px",
        backgroundColor: "#FAFAF8",
        margin: "0 auto clamp(50px, 8vh, 70px)"
      }} />

      {/* Main Statement - Breathing Room */}
      <div style={{ 
        maxWidth: "720px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)"
      }}>
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(28px, 4vw, 38px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          lineHeight: 1.5,
          marginBottom: "clamp(48px, 8vh, 72px)",
          letterSpacing: "-0.01em",
          textAlign: "center"
        }}>
          I build systems that think for themselves
        </h2>
        
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "clamp(32px, 5vh, 48px)" 
        }}>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            My path wasn't linear. Built a business, made a fortune, lost it all. What stayed was an obsession with systems. How they work. How they break. How to build ones that last.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            I rebuilt through math, code, and an unhealthy fascination with autonomous decision-making. Now I work at the intersection of algorithmic trading, multi-agent AI, and software that runs itself.
          </p>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: "#999999", 
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            Self-taught. No CS degree. No finance background. Just stubborn rigor and an obsessive need to understand how things work.
          </p>
        </div>
      </div>

      {/* Vertical Divider - White */}
      <div style={{
        width: "1px",
        height: "50px",
        backgroundColor: "#FAFAF8",
        margin: "0 auto clamp(60px, 10vh, 80px)"
      }} />

      {/* What I Build - Minimalist Grid */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)"
      }}>
        <h2 style={{ 
          fontSize: "clamp(11px, 1.4vw, 13px)", 
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#4D4D4D",
          marginBottom: "clamp(64px, 10vh, 96px)",
          textAlign: "center"
        }}>
          Selected Work
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", 
          gap: "1px",
          backgroundColor: "#1A1A1A"
        }}>
          
          <div style={{ 
            padding: "clamp(48px, 7vw, 64px)",
            backgroundColor: "#0A0A0A"
          }}>
            <h3 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "clamp(20px, 3vh, 24px)",
              letterSpacing: "-0.01em"
            }}>
              Trade69
            </h3>
            <p style={{ 
              fontSize: "clamp(14px, 1.8vw, 15px)", 
              color: "#666666", 
              lineHeight: 1.8,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Algorithmic trading platform. 245 Python files, 32K+ lines, 11 data sources. HMM regime detection, Random Forest classifiers, Kelly Criterion sizing.
            </p>
          </div>

          <div style={{ 
            padding: "clamp(48px, 7vw, 64px)",
            backgroundColor: "#0A0A0A"
          }}>
            <h3 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "clamp(20px, 3vh, 24px)",
              letterSpacing: "-0.01em"
            }}>
              MegaAgent
            </h3>
            <p style={{ 
              fontSize: "clamp(14px, 1.8vw, 15px)", 
              color: "#666666", 
              lineHeight: 1.8,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Multi-agent autonomous system. 365 Python files, 258K lines. Markowitz portfolio optimization with CVaR, LinUCB Thompson Sampling, circuit breaker patterns.
            </p>
          </div>

          <div style={{ 
            padding: "clamp(48px, 7vw, 64px)",
            backgroundColor: "#0A0A0A"
          }}>
            <h3 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "clamp(20px, 3vh, 24px)",
              letterSpacing: "-0.01em"
            }}>
              Octopus
            </h3>
            <p style={{ 
              fontSize: "clamp(14px, 1.8vw, 15px)", 
              color: "#666666", 
              lineHeight: 1.8,
              fontWeight: 300,
              letterSpacing: "0.01em"
            }}>
              Cognitive agent framework. 5 decomposition strategies, tri-store memory (semantic, episodic, procedural), NetworkX DAG, meta-reflection with blind spot detection.
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
          color: "#4D4D4D",
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
              color: "#4D4D4D",
              marginBottom: "clamp(28px, 5vh, 40px)"
            }}>
              Focus Areas
            </h3>
            <p style={{ 
              fontSize: "clamp(15px, 1.9vw, 17px)", 
              color: "#808080", 
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
              color: "#4D4D4D",
              marginBottom: "clamp(28px, 5vh, 40px)"
            }}>
              Core Stack
            </h3>
            <p style={{ 
              fontSize: "clamp(15px, 1.9vw, 17px)", 
              color: "#808080", 
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
              color: "#4D4D4D",
              marginBottom: "clamp(28px, 5vh, 40px)"
            }}>
              Techniques
            </h3>
            <p style={{ 
              fontSize: "clamp(15px, 1.9vw, 17px)", 
              color: "#808080", 
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

      {/* Philosophy - Centered Elegance */}
      <div style={{ 
        maxWidth: "700px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)",
        textAlign: "center"
      }}>
        <h2 style={{ 
          fontSize: "clamp(11px, 1.4vw, 13px)", 
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#4D4D4D",
          marginBottom: "clamp(48px, 8vh, 64px)"
        }}>
          Beyond Code
        </h2>
        <p style={{ 
          fontSize: "clamp(16px, 2vw, 18px)", 
          color: "#999999", 
          lineHeight: 1.9,
          marginBottom: "clamp(48px, 8vh, 64px)",
          fontWeight: 300,
          letterSpacing: "0.01em"
        }}>
          Outside of building, I study mathematics with aspirations of eventually teaching it. Drawn to Buddhist philosophy, especially Milarepa. Persistence. Transformation. Letting go. The same principles that make systems resilient make people resilient.
        </p>
        <Link href="/story" style={{ 
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#CCCCCC", 
          textDecoration: "none", 
          borderBottom: "1px solid #333333",
          paddingBottom: "3px",
          letterSpacing: "0.02em",
          fontStyle: "italic"
        }}>
          Read my full story
        </Link>
      </div>

      {/* Contact - Minimal */}
      <div style={{ 
        maxWidth: "700px", 
        margin: "0 auto", 
        padding: "0 24px clamp(60px, 10vh, 80px)",
        textAlign: "center"
      }}>
        <h2 style={{ 
          fontSize: "clamp(11px, 1.4vw, 13px)", 
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#4D4D4D",
          marginBottom: "clamp(48px, 8vh, 64px)"
        }}>
          Contact
        </h2>
        <p style={{ 
          fontSize: "clamp(15px, 1.9vw, 17px)", 
          color: "#808080",
          marginBottom: "clamp(24px, 4vh, 32px)",
          letterSpacing: "0.01em"
        }}>
          <a href="mailto:cogitoergosum143@gmail.com" style={{ 
            color: "#CCCCCC", 
            textDecoration: "none", 
            borderBottom: "1px solid #333333",
            paddingBottom: "2px"
          }}>
            cogitoergosum143@gmail.com
          </a>
        </p>
        <p style={{ 
          fontSize: "clamp(15px, 1.9vw, 17px)", 
          color: "#808080",
          letterSpacing: "0.01em"
        }}>
          <a href="https://github.com/manfromnowhere143" target="_blank" rel="noopener noreferrer" style={{ 
            color: "#CCCCCC", 
            textDecoration: "none", 
            borderBottom: "1px solid #333333",
            paddingBottom: "2px"
          }}>
            GitHub
          </a>
        </p>
      </div>

      {/* Final Statement - Whisper */}
      <div style={{ 
        backgroundColor: "#000000",
        padding: "clamp(100px, 15vh, 140px) 24px"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(24px, 4vw, 36px)", 
            fontWeight: 300,
            color: "#E6E6E6",
            lineHeight: 1.6,
            letterSpacing: "-0.01em"
          }}>
            Intelligence that scales.<br/>Systems that adapt, decide, and execute<br/>without waiting for permission.
          </p>
        </div>
      </div>

    </div>
  );
}
