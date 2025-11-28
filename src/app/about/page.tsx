export default function About() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "80px 24px",
        textAlign: "center"
      }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.3em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "20px"
        }}>
          About
        </p>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(40px, 8vw, 56px)", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "24px"
        }}>
          Daniel Wahnich
        </h1>
        <p style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "20px", 
          fontStyle: "italic",
          color: "#71706E",
          letterSpacing: "0.05em"
        }}>
          Ostinato Rigore
        </p>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
        
        {/* Intro */}
        <div style={{ 
          paddingBottom: "60px",
          borderBottom: "1px solid #E0DED6"
        }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "28px", 
            color: "#1C1C1C",
            lineHeight: 1.5,
            marginBottom: "32px"
          }}>
            I build systems that think for themselves.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              My path wasn't linear. Built a business, made a fortune, lost it all. 
              What stayed was an obsession with systems. How they work. How they break. 
              How to build ones that last.
            </p>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              I rebuilt through math, code, and an unhealthy fascination with autonomous 
              decision-making. Now I work at the intersection of algorithmic trading, 
              multi-agent AI, and software that runs itself.
            </p>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              Self-taught. No CS degree. No finance background. Just stubborn rigor 
              and an obsessive need to understand how things work.
            </p>
          </div>
        </div>

        {/* What I Build */}
        <div style={{ padding: "60px 0", borderBottom: "1px solid #E0DED6" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "12px"
          }}>
            What I Build
          </p>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "28px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "32px"
          }}>
            Autonomous Systems
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div style={{ padding: "24px", backgroundColor: "#F2F1ED" }}>
              <h3 style={{ fontSize: "16px", color: "#1C1C1C", marginBottom: "8px" }}>Trade69</h3>
              <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.8 }}>
                Algorithmic trading platform. 245 Python files, 32K+ lines of code. 
                11 data sources including StockTwits, Reddit, dark pools, and SEC filings. 
                Hidden Markov Models for regime detection. Kelly Criterion for position sizing.
              </p>
            </div>

            <div style={{ padding: "24px", backgroundColor: "#F2F1ED" }}>
              <h3 style={{ fontSize: "16px", color: "#1C1C1C", marginBottom: "8px" }}>MegaAgent</h3>
              <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.8 }}>
                Multi-agent autonomous system. 365 Python files, 258K lines of code. 
                Markowitz portfolio optimization with CVaR constraints. LinUCB and Thompson Sampling 
                for reinforcement learning. Circuit breaker patterns with anomaly detection.
              </p>
            </div>

            <div style={{ padding: "24px", backgroundColor: "#F2F1ED" }}>
              <h3 style={{ fontSize: "16px", color: "#1C1C1C", marginBottom: "8px" }}>Octopus</h3>
              <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.8 }}>
                Cognitive agent framework. Goal decomposition with 5 strategies. 
                Tri-store memory system: semantic, episodic, procedural. 
                NetworkX DAG for task graphs. Meta-reflection with blind spot detection.
              </p>
            </div>

          </div>
        </div>

        {/* Technical Focus */}
        <div style={{ padding: "60px 0", borderBottom: "1px solid #E0DED6" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "40px" 
          }}>
            
            <div>
              <p style={{ 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "16px"
              }}>
                Focus Areas
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Algorithmic Trading</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Multi-Agent Systems</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Autonomous Software</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Machine Learning</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Cognitive Architecture</li>
              </ul>
            </div>

            <div>
              <p style={{ 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "16px"
              }}>
                Core Stack
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Python</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>PostgreSQL / MongoDB</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>FastAPI</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>scikit-learn / PyTorch</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Redis</li>
              </ul>
            </div>

            <div>
              <p style={{ 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "16px"
              }}>
                Techniques
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Hidden Markov Models</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Kelly Criterion</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Contextual Bandits</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Portfolio Optimization</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Event Sourcing</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Philosophy */}
        <div style={{ padding: "60px 0", borderBottom: "1px solid #E0DED6" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "12px"
          }}>
            Beyond Code
          </p>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "28px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "24px"
          }}>
            Philosophy
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
            Outside of building, I study mathematics with aspirations of eventually teaching it. 
            Drawn to Buddhist philosophy, especially Milarepa. Persistence. Transformation. Letting go. 
            The same principles that make systems resilient make people resilient.
          </p>
        </div>

        {/* Contact */}
        <div style={{ padding: "60px 0" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "24px"
          }}>
            Get In Touch
          </p>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <a 
              href="mailto:cogitoergosum143@gmail.com" 
              style={{ 
                fontSize: "16px", 
                color: "#1C1C1C", 
                textDecoration: "none",
                borderBottom: "1px solid #1C1C1C",
                paddingBottom: "4px"
              }}
            >
              cogitoergosum143@gmail.com
            </a>
            <a 
              href="https://github.com/manfromnowhere143" 
              target="_blank"
              style={{ 
                fontSize: "16px", 
                color: "#1C1C1C", 
                textDecoration: "none",
                borderBottom: "1px solid #1C1C1C",
                paddingBottom: "4px"
              }}
            >
              GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Footer Quote */}
      <div style={{ 
        backgroundColor: "#1C1C1C",
        padding: "80px 24px"
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontStyle: "italic",
            color: "#FAFAF8",
            lineHeight: 1.6
          }}>
            "Intelligence that scales. Systems that adapt, decide, and execute 
            without waiting for permission."
          </p>
        </div>
      </div>

    </div>
  );
}
