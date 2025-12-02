import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "80px", textAlign: "center" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.25em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            About
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(40px, 8vw, 56px)", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "12px"
          }}>
            Daniel Wahnich
          </h1>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "20px", 
            fontStyle: "italic",
            color: "#71706E"
          }}>
            Ostinato Rigore
          </p>
        </div>

        {/* Intro */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ 
            fontSize: "clamp(28px, 5vw, 36px)", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "24px"
          }}>
            I build systems that think for themselves.
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            My path wasn't linear. Built a business, made a fortune, lost it all. What stayed was an obsession with systems. How they work. How they break. How to build ones that last.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            I rebuilt through math, code, and an unhealthy fascination with autonomous decision-making. Now I work at the intersection of algorithmic trading, multi-agent AI, and software that runs itself.
          </p>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8 }}>
            Self-taught. No CS degree. No finance background. Just stubborn rigor and an obsessive need to understand how things work.
          </p>
        </div>

        {/* What I Build */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ 
            fontSize: "24px", 
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#1C1C1C",
            marginBottom: "40px"
          }}>
            What I Build
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            
            <div style={{ 
              padding: "32px", 
              backgroundColor: "#F2F1ED",
              border: "1px solid #E0DED6"
            }}>
              <h3 style={{ 
                fontSize: "18px", 
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "12px"
              }}>
                Trade69
              </h3>
              <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.6 }}>
                Algorithmic trading platform. 245 Python files, 32K+ lines, 11 data sources. HMM regime detection, Random Forest classifiers, Kelly Criterion sizing.
              </p>
            </div>

            <div style={{ 
              padding: "32px", 
              backgroundColor: "#F2F1ED",
              border: "1px solid #E0DED6"
            }}>
              <h3 style={{ 
                fontSize: "18px", 
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "12px"
              }}>
                MegaAgent
              </h3>
              <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.6 }}>
                Multi-agent autonomous system. 365 Python files, 258K lines. Markowitz portfolio optimization with CVaR, LinUCB Thompson Sampling, circuit breaker patterns.
              </p>
            </div>

            <div style={{ 
              padding: "32px", 
              backgroundColor: "#F2F1ED",
              border: "1px solid #E0DED6"
            }}>
              <h3 style={{ 
                fontSize: "18px", 
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "12px"
              }}>
                Octopus
              </h3>
              <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.6 }}>
                Cognitive agent framework. 5 decomposition strategies, tri-store memory (semantic, episodic, procedural), NetworkX DAG, meta-reflection with blind spot detection.
              </p>
            </div>

          </div>
        </div>

        {/* Technical Focus */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ 
            fontSize: "24px", 
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#1C1C1C",
            marginBottom: "40px"
          }}>
            Technical Focus
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
            
            <div>
              <h3 style={{ 
                fontSize: "14px", 
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#71706E",
                marginBottom: "16px"
              }}>
                Focus Areas
              </h3>
              <p style={{ fontSize: "15px", color: "#1C1C1C", lineHeight: 1.8 }}>
                Algorithmic Trading<br/>
                Multi-Agent Systems<br/>
                Autonomous Software<br/>
                Machine Learning<br/>
                Cognitive Architecture
              </p>
            </div>

            <div>
              <h3 style={{ 
                fontSize: "14px", 
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#71706E",
                marginBottom: "16px"
              }}>
                Core Stack
              </h3>
              <p style={{ fontSize: "15px", color: "#1C1C1C", lineHeight: 1.8 }}>
                Python<br/>
                PostgreSQL / MongoDB<br/>
                FastAPI<br/>
                scikit-learn / PyTorch<br/>
                Redis
              </p>
            </div>

            <div>
              <h3 style={{ 
                fontSize: "14px", 
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#71706E",
                marginBottom: "16px"
              }}>
                Techniques
              </h3>
              <p style={{ fontSize: "15px", color: "#1C1C1C", lineHeight: 1.8 }}>
                Hidden Markov Models<br/>
                Kelly Criterion<br/>
                Contextual Bandits<br/>
                Portfolio Optimization<br/>
                Event Sourcing
              </p>
            </div>

          </div>
        </div>

        {/* Philosophy */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ 
            fontSize: "24px", 
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#1C1C1C",
            marginBottom: "24px"
          }}>
            Beyond Code
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.8, marginBottom: "16px" }}>
            Outside of building, I study mathematics with aspirations of eventually teaching it. Drawn to Buddhist philosophy, especially Milarepa. Persistence. Transformation. Letting go. The same principles that make systems resilient make people resilient.
          </p>
          <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.8, fontStyle: "italic" }}>
            <Link href="/story" style={{ color: "#1C1C1C", textDecoration: "none", borderBottom: "1px solid #1C1C1C" }}>
              → Read my full story
            </Link>
          </p>
        </div>

        {/* Contact */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            fontSize: "24px", 
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#1C1C1C",
            marginBottom: "24px"
          }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: "16px", color: "#1C1C1C", lineHeight: 1.8 }}>
            <a href="mailto:cogitoergosum143@gmail.com" style={{ color: "#1C1C1C", textDecoration: "none", borderBottom: "1px solid #1C1C1C" }}>
              cogitoergosum143@gmail.com
            </a>
          </p>
          <p style={{ fontSize: "16px", color: "#1C1C1C", lineHeight: 1.8 }}>
            <a href="https://github.com/manfromnowhere143" target="_blank" rel="noopener noreferrer" style={{ color: "#1C1C1C", textDecoration: "none", borderBottom: "1px solid #1C1C1C" }}>
              https://github.com/manfromnowhere143
            </a>
          </p>
        </div>

      </div>

      {/* Footer */}
      <div style={{ 
        backgroundColor: "#1C1C1C",
        padding: "60px 24px"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontSize: "18px", 
            color: "#FAFAF8",
            lineHeight: 1.8
          }}>
            "Intelligence that scales. Systems that adapt, decide, and execute without waiting for permission."
          </p>
        </div>
      </div>

    </div>
  );
}
