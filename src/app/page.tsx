import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero Section */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "clamp(100px, 15vh, 180px) 24px clamp(80px, 12vh, 120px)",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(56px, 9vw, 88px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(28px, 5vh, 48px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.05
        }}>
          Daniel Wahnich
        </h1>
        <p style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(22px, 3.5vw, 32px)", 
          fontStyle: "italic",
          fontWeight: 300,
          color: "#71706E",
          marginBottom: "clamp(80px, 12vh, 140px)",
          letterSpacing: "0.08em"
        }}>
          Ostinato Rigore
        </p>
        
        <div style={{
          width: "100px",
          height: "1px",
          backgroundColor: "#1C1C1C",
          margin: "0 auto"
        }} />
      </div>

      {/* Main Statement */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "0 24px clamp(100px, 15vh, 160px)"
      }}>
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(36px, 6vw, 56px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          lineHeight: 1.25,
          marginBottom: "clamp(40px, 8vh, 64px)",
          letterSpacing: "-0.025em",
          textAlign: "center"
        }}>
          I build systems that think for themselves.
        </h2>
        
        <div style={{ 
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex", 
          flexDirection: "column", 
          gap: "clamp(28px, 5vh, 40px)" 
        }}>
          <p style={{ 
            fontSize: "clamp(17px, 2.4vw, 22px)", 
            color: "#B8B7B3", 
            lineHeight: 1.75,
            fontWeight: 300,
            textAlign: "center"
          }}>
            My path wasn't linear. Built a business, made a fortune, lost it all. What stayed was an obsession with systems. How they work. How they break. How to build ones that last.
          </p>
          <p style={{ 
            fontSize: "clamp(17px, 2.4vw, 22px)", 
            color: "#B8B7B3", 
            lineHeight: 1.75,
            fontWeight: 300,
            textAlign: "center"
          }}>
            I rebuilt through math, code, and an unhealthy fascination with autonomous decision-making. Now I work at the intersection of algorithmic trading, multi-agent AI, and software that runs itself.
          </p>
          <p style={{ 
            fontSize: "clamp(17px, 2.4vw, 22px)", 
            color: "#B8B7B3", 
            lineHeight: 1.75,
            fontWeight: 300,
            textAlign: "center"
          }}>
            Self-taught. No CS degree. No finance background. Just stubborn rigor and an obsessive need to understand how things work.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        width: "100px",
        height: "1px",
        backgroundColor: "#1C1C1C",
        margin: "0 auto clamp(100px, 15vh, 160px)"
      }} />

      {/* What I Build */}
      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto", 
        padding: "0 24px clamp(100px, 15vh, 160px)"
      }}>
        <h2 style={{ 
          fontSize: "clamp(15px, 2.2vw, 18px)", 
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#71706E",
          marginBottom: "clamp(60px, 10vh, 100px)",
          textAlign: "center"
        }}>
          What I Build
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", 
          gap: "clamp(40px, 6vw, 60px)"
        }}>
          
          <div style={{ 
            padding: "clamp(40px, 6vw, 56px)",
            backgroundColor: "#0F0F0F",
            border: "1px solid #1C1C1C"
          }}>
            <h3 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 36px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "clamp(20px, 4vh, 28px)",
              letterSpacing: "-0.015em"
            }}>
              Trade69
            </h3>
            <p style={{ 
              fontSize: "clamp(15px, 2vw, 17px)", 
              color: "#71706E", 
              lineHeight: 1.8,
              fontWeight: 300
            }}>
              Algorithmic trading platform. 245 Python files, 32K+ lines, 11 data sources. HMM regime detection, Random Forest classifiers, Kelly Criterion sizing.
            </p>
          </div>

          <div style={{ 
            padding: "clamp(40px, 6vw, 56px)",
            backgroundColor: "#0F0F0F",
            border: "1px solid #1C1C1C"
          }}>
            <h3 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 36px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "clamp(20px, 4vh, 28px)",
              letterSpacing: "-0.015em"
            }}>
              MegaAgent
            </h3>
            <p style={{ 
              fontSize: "clamp(15px, 2vw, 17px)", 
              color: "#71706E", 
              lineHeight: 1.8,
              fontWeight: 300
            }}>
              Multi-agent autonomous system. 365 Python files, 258K lines. Markowitz portfolio optimization with CVaR, LinUCB Thompson Sampling, circuit breaker patterns.
            </p>
          </div>

          <div style={{ 
            padding: "clamp(40px, 6vw, 56px)",
            backgroundColor: "#0F0F0F",
            border: "1px solid #1C1C1C"
          }}>
            <h3 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 36px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "clamp(20px, 4vh, 28px)",
              letterSpacing: "-0.015em"
            }}>
              Octopus
            </h3>
            <p style={{ 
              fontSize: "clamp(15px, 2vw, 17px)", 
              color: "#71706E", 
              lineHeight: 1.8,
              fontWeight: 300
            }}>
              Cognitive agent framework. 5 decomposition strategies, tri-store memory (semantic, episodic, procedural), NetworkX DAG, meta-reflection with blind spot detection.
            </p>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div style={{
        width: "100px",
        height: "1px",
        backgroundColor: "#1C1C1C",
        margin: "clamp(100px, 15vh, 160px) auto"
      }} />

      {/* Technical Focus */}
      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto", 
        padding: "0 24px clamp(100px, 15vh, 160px)"
      }}>
        <h2 style={{ 
          fontSize: "clamp(15px, 2.2vw, 18px)", 
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#71706E",
          marginBottom: "clamp(60px, 10vh, 100px)",
          textAlign: "center"
        }}>
          Technical Focus
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", 
          gap: "clamp(50px, 8vw, 80px)"
        }}>
          
          <div style={{ textAlign: "center" }}>
            <h3 style={{ 
              fontSize: "clamp(14px, 1.8vw, 16px)", 
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#71706E",
              marginBottom: "clamp(24px, 4vh, 32px)"
            }}>
              Focus Areas
            </h3>
            <p style={{ 
              fontSize: "clamp(16px, 2.2vw, 19px)", 
              color: "#B8B7B3", 
              lineHeight: 2,
              fontWeight: 300
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
              fontSize: "clamp(14px, 1.8vw, 16px)", 
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#71706E",
              marginBottom: "clamp(24px, 4vh, 32px)"
            }}>
              Core Stack
            </h3>
            <p style={{ 
              fontSize: "clamp(16px, 2.2vw, 19px)", 
              color: "#B8B7B3", 
              lineHeight: 2,
              fontWeight: 300
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
              fontSize: "clamp(14px, 1.8vw, 16px)", 
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#71706E",
              marginBottom: "clamp(24px, 4vh, 32px)"
            }}>
              Techniques
            </h3>
            <p style={{ 
              fontSize: "clamp(16px, 2.2vw, 19px)", 
              color: "#B8B7B3", 
              lineHeight: 2,
              fontWeight: 300
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

      {/* Divider */}
      <div style={{
        width: "100px",
        height: "1px",
        backgroundColor: "#1C1C1C",
        margin: "clamp(100px, 15vh, 160px) auto"
      }} />

      {/* Philosophy */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "0 24px clamp(100px, 15vh, 160px)",
        textAlign: "center"
      }}>
        <h2 style={{ 
          fontSize: "clamp(15px, 2.2vw, 18px)", 
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#71706E",
          marginBottom: "clamp(40px, 7vh, 60px)"
        }}>
          Beyond Code
        </h2>
        <p style={{ 
          fontSize: "clamp(17px, 2.4vw, 22px)", 
          color: "#B8B7B3", 
          lineHeight: 1.75,
          marginBottom: "clamp(40px, 7vh, 60px)",
          fontWeight: 300
        }}>
          Outside of building, I study mathematics with aspirations of eventually teaching it. Drawn to Buddhist philosophy, especially Milarepa. Persistence. Transformation. Letting go. The same principles that make systems resilient make people resilient.
        </p>
        <p style={{ 
          fontSize: "clamp(15px, 2vw, 17px)", 
          color: "#71706E", 
          lineHeight: 1.8,
          fontStyle: "italic"
        }}>
          <Link href="/story" style={{ 
            color: "#FAFAF8", 
            textDecoration: "none", 
            borderBottom: "1px solid #FAFAF8",
            paddingBottom: "2px",
            transition: "opacity 0.3s"
          }}>
            Read my full story
          </Link>
        </p>
      </div>

      {/* Contact */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "0 24px clamp(100px, 15vh, 160px)",
        textAlign: "center"
      }}>
        <h2 style={{ 
          fontSize: "clamp(15px, 2.2vw, 18px)", 
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#71706E",
          marginBottom: "clamp(40px, 7vh, 60px)"
        }}>
          Get In Touch
        </h2>
        <p style={{ 
          fontSize: "clamp(16px, 2.2vw, 19px)", 
          color: "#B8B7B3",
          marginBottom: "clamp(20px, 4vh, 28px)"
        }}>
          <a href="mailto:cogitoergosum143@gmail.com" style={{ 
            color: "#FAFAF8", 
            textDecoration: "none", 
            borderBottom: "1px solid #FAFAF8",
            paddingBottom: "2px",
            transition: "opacity 0.3s"
          }}>
            cogitoergosum143@gmail.com
          </a>
        </p>
        <p style={{ 
          fontSize: "clamp(16px, 2.2vw, 19px)", 
          color: "#B8B7B3"
        }}>
          <a href="https://github.com/manfromnowhere143" target="_blank" rel="noopener noreferrer" style={{ 
            color: "#FAFAF8", 
            textDecoration: "none", 
            borderBottom: "1px solid #FAFAF8",
            paddingBottom: "2px",
            transition: "opacity 0.3s"
          }}>
            GitHub
          </a>
        </p>
      </div>

      {/* Final Statement */}
      <div style={{ 
        backgroundColor: "#000000",
        padding: "clamp(100px, 15vh, 180px) 24px"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(28px, 5vw, 48px)", 
            fontWeight: 300,
            color: "#FAFAF8",
            lineHeight: 1.35,
            letterSpacing: "-0.02em"
          }}>
            Intelligence that scales. Systems that adapt, decide, and execute without waiting for permission.
          </p>
        </div>
      </div>

    </div>
  );
}
