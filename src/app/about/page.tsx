export default function About() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <p style={{ 
            fontSize: "12px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            About
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "52px", 
            fontWeight: 400,
            color: "#1C1C1C"
          }}>
            Daniel Dahan
          </h1>
        </div>

        {/* Main Content */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "2fr 1fr", 
          gap: "80px",
          paddingTop: "40px",
          borderTop: "1px solid #E0DED6"
        }}>
          
          {/* Left Column - Story */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <p style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "24px", 
              color: "#1C1C1C",
              lineHeight: 1.5
            }}>
              I build systems that think for themselves.
            </p>

            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              My path here was not linear. I built a business, became a millionaire, 
              then lost everything. What remained was an obsession with understanding 
              systems — how they work, how they fail, and how to build ones that survive.
            </p>

            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              I rebuilt through mathematics, programming, and an almost unhealthy 
              fascination with autonomous decision-making. Today I work at the 
              intersection of algorithmic trading, multi-agent AI systems, and 
              software that operates independently.
            </p>

            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              I am entirely self-taught. No CS degree, no formal training in quantitative 
              finance. Just an unrelenting drive to understand how things work and build 
              them better.
            </p>

            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              Outside of building, I study mathematics with aspirations of eventually 
              teaching it. I am drawn to Buddhist philosophy, particularly the teachings 
              of Milarepa — persistence, transformation, and the dissolution of ego.
            </p>
          </div>

          {/* Right Column - Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            
            <div>
              <h3 style={{ 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "20px"
              }}>
                Focus Areas
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Algorithmic Trading</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Multi-Agent Systems</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Autonomous Software</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Machine Learning</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Blockchain / Web3</li>
              </ul>
            </div>

            <div>
              <h3 style={{ 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "20px"
              }}>
                Technologies
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Python</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>PostgreSQL</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>LLM APIs</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>Solana / Web3</li>
                <li style={{ fontSize: "15px", color: "#1C1C1C" }}>React / TypeScript</li>
              </ul>
            </div>

            <div>
              <h3 style={{ 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "20px"
              }}>
                Contact
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li>
                  <a href="mailto:daniel@example.com" style={{ fontSize: "15px", color: "#1C1C1C", textDecoration: "none", borderBottom: "1px solid #1C1C1C", paddingBottom: "2px" }}>
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" style={{ fontSize: "15px", color: "#1C1C1C", textDecoration: "none", borderBottom: "1px solid #1C1C1C", paddingBottom: "2px" }}>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Quote */}
        <div style={{ 
          marginTop: "80px", 
          paddingTop: "60px", 
          borderTop: "1px solid #E0DED6",
          textAlign: "center"
        }}>
          <blockquote style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "28px", 
            fontStyle: "italic",
            color: "#1C1C1C",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.5
          }}>
            "The goal is intelligence that scales — systems that can adapt, decide, 
            and execute without waiting for permission."
          </blockquote>
        </div>

      </div>
    </div>
  );
}
