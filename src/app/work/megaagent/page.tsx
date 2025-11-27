import Link from "next/link";

export default function MegaAgent() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section */}
      <div style={{ 
        width: "100%",
        backgroundColor: "#1C1C1C",
        padding: "60px 24px"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ 
            fontSize: "10px", 
            letterSpacing: "0.3em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            Autonomous Systems
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(36px, 10vw, 64px)", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px",
            lineHeight: 1.1
          }}>
            MegaAgent
          </h1>
          <p style={{ 
            fontSize: "16px", 
            color: "#A0A0A0", 
            lineHeight: 1.8,
            maxWidth: "500px"
          }}>
            An autonomous opportunity engine that identifies, evaluates, 
            and acts on emerging possibilities without human intervention.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
        
        {/* Meta Info */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", 
          gap: "24px",
          padding: "32px 0",
          borderTop: "1px solid #E0DED6",
          borderBottom: "1px solid #E0DED6",
          marginBottom: "60px"
        }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Year</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>2025</p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Type</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Autonomous Agent</p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Status</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>In Development</p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Stack</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Python, LLMs</p>
          </div>
        </div>

        {/* Vision & Concept */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: "40px",
          marginBottom: "60px"
        }}>
          <div>
            <h2 style={{ 
              fontSize: "12px", 
              fontWeight: 400,
              color: "#71706E",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "16px"
            }}>
              Vision
            </h2>
            <p style={{ fontSize: "15px", color: "#1C1C1C", lineHeight: 1.9 }}>
              MegaAgent represents a step toward truly autonomous software. Systems that don't 
              just respond to commands but actively seek out opportunities. Rather than waiting 
              for human direction, it continuously scans, evaluates, and acts on possibilities.
            </p>
          </div>
          <div>
            <h2 style={{ 
              fontSize: "12px", 
              fontWeight: 400,
              color: "#71706E",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "16px"
            }}>
              Core Concept
            </h2>
            <p style={{ fontSize: "15px", color: "#1C1C1C", lineHeight: 1.9 }}>
              The system operates on a simple but powerful loop: observe, evaluate, decide, act. 
              It monitors various data streams for patterns that indicate opportunity, then 
              autonomously determines whether and how to act.
            </p>
          </div>
        </div>

        {/* Architecture */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "28px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "12px"
          }}>
            Architecture
          </h2>
        </div>

        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1px",
          backgroundColor: "#E0DED6",
          border: "1px solid #E0DED6",
          marginBottom: "60px"
        }}>
          {[
            { title: "Observer", desc: "Data Streams" },
            { title: "Evaluator", desc: "LLM Assessment" },
            { title: "Decision", desc: "Go/No-Go" },
            { title: "Executor", desc: "Safe Actions" },
          ].map((item, i) => (
            <div key={i} style={{ 
              backgroundColor: "#FAFAF8",
              padding: "24px 16px",
              textAlign: "center"
            }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>
                {item.title}
              </p>
              <p style={{ fontSize: "13px", color: "#1C1C1C" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#71706E", marginBottom: "20px" }}>
            Built With
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {["Python", "OpenAI API", "Claude API", "LangChain", "PostgreSQL", "Redis"].map((tech) => (
              <span key={tech} style={{ 
                padding: "10px 18px", 
                border: "1px solid #E0DED6",
                fontSize: "12px", 
                color: "#1C1C1C"
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginTop: "80px",
          paddingTop: "24px",
          borderTop: "1px solid #E0DED6"
        }}>
          <Link href="/work/trade69" style={{ fontSize: "13px", color: "#1C1C1C", textDecoration: "none" }}>
            ← Previous: Trade69
          </Link>
          <Link href="/work/octopus" style={{ fontSize: "13px", color: "#1C1C1C", textDecoration: "none" }}>
            Next: Octopus →
          </Link>
        </div>

      </div>
    </div>
  );
}
