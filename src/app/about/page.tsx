export default function About() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
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
            fontSize: "clamp(32px, 8vw, 42px)", 
            fontWeight: 400,
            color: "#1C1C1C"
          }}>
            Daniel Wahnich
          </h1>
        </div>

        {/* Main Content */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: "60px"
        }}>
          
          {/* Story */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "600px" }}>
            <p style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "20px", 
              color: "#1C1C1C",
              lineHeight: 1.5
            }}>
              I build systems that think for themselves.
            </p>

            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.9 }}>
              My path wasn't linear. Built a business, made a fortune, lost it all. 
              What stayed was an obsession with systems. How they work. How they break. 
              How to build ones that last.
            </p>

            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.9 }}>
              I rebuilt through math, code, and an unhealthy fascination with autonomous 
              decision-making. Now I work at the intersection of algorithmic trading, 
              multi-agent AI, and software that runs itself.
            </p>

            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.9 }}>
              Self-taught. No CS degree. No finance background. Just an obsessive need 
              to understand how things work and make them better.
            </p>

            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.9 }}>
              Outside of building, I study mathematics. Drawn to Buddhist philosophy, 
              especially Milarepa. Persistence. Transformation. Letting go.
            </p>
          </div>

          {/* Details Grid */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "40px"
          }}>
            
            <div>
              <h3 style={{ 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "16px"
              }}>
                Focus
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>Algorithmic Trading</li>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>Multi-Agent Systems</li>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>Autonomous Software</li>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>Machine Learning</li>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>Blockchain</li>
              </ul>
            </div>

            <div>
              <h3 style={{ 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "16px"
              }}>
                Stack
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>Python</li>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>PostgreSQL</li>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>LLM APIs</li>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>Solana</li>
                <li style={{ fontSize: "14px", color: "#1C1C1C" }}>React / TypeScript</li>
              </ul>
            </div>

            <div>
              <h3 style={{ 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "16px"
              }}>
                Contact
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>
                  <a href="mailto:cogitoergosum143@gmail.com" style={{ fontSize: "14px", color: "#1C1C1C", textDecoration: "none", borderBottom: "1px solid #1C1C1C", paddingBottom: "2px" }}>
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://github.com/manfromnowhere143" target="_blank" style={{ fontSize: "14px", color: "#1C1C1C", textDecoration: "none", borderBottom: "1px solid #1C1C1C", paddingBottom: "2px" }}>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Quote */}
          <div style={{ textAlign: "center", paddingTop: "40px" }}>
            <p style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "18px", 
              fontStyle: "italic",
              color: "#71706E",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.6
            }}>
              Intelligence that scales. Systems that adapt, decide, and execute.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
