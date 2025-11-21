import Link from "next/link";

export default function MegaAgent() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>
        
        {/* Back Link */}
        <Link href="/work" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          color: "#71706E",
          textDecoration: "none",
          marginBottom: "60px"
        }}>
          ← Back to Work
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <p style={{ 
            fontSize: "12px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            Autonomous Systems
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "52px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "24px"
          }}>
            MegaAgent
          </h1>
          <p style={{ 
            fontSize: "19px", 
            color: "#71706E", 
            lineHeight: 1.8,
            maxWidth: "700px"
          }}>
            An autonomous opportunity engine designed to identify, evaluate, and act on 
            emerging possibilities without human intervention.
          </p>
        </div>

        {/* Meta Info */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "32px",
          padding: "32px 0",
          borderTop: "1px solid #E0DED6",
          borderBottom: "1px solid #E0DED6",
          marginBottom: "60px"
        }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Year</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>2024</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Type</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Autonomous Agent</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Status</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>In Development</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Stack</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Python, LLMs</p>
          </div>
        </div>

        {/* Content Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          
          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "20px"
            }}>
              Vision
            </h2>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              MegaAgent represents a step toward truly autonomous software — systems that don't 
              just respond to commands but actively seek out opportunities. Rather than waiting 
              for human direction, it continuously scans, evaluates, and acts on possibilities 
              that meet defined criteria.
            </p>
          </section>

          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "20px"
            }}>
              Core Concept
            </h2>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              The system operates on a simple but powerful loop: observe, evaluate, decide, act. 
              It monitors various data streams for patterns that indicate opportunity — whether 
              in markets, information arbitrage, or emerging trends — then autonomously determines 
              whether and how to act.
            </p>
          </section>

          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "24px"
            }}>
              Architecture
            </h2>
            <div style={{ backgroundColor: "#F2F1ED", padding: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Observer</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Continuous monitoring of defined data streams and signal sources</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Evaluator</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>LLM-powered assessment of opportunity quality, risk, and potential</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Decision Engine</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Autonomous go/no-go determination based on configurable thresholds</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Executor</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Action execution with built-in safeguards and rollback capabilities</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "24px"
            }}>
              Technology
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {["Python", "OpenAI API", "Claude API", "LangChain", "PostgreSQL", "Redis"].map((tech) => (
                <span key={tech} style={{ 
                  padding: "10px 20px", 
                  backgroundColor: "#F2F1ED", 
                  fontSize: "13px", 
                  color: "#1C1C1C" 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>

        {/* Navigation */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginTop: "80px",
          paddingTop: "32px",
          borderTop: "1px solid #E0DED6"
        }}>
          <Link href="/work/trade69" style={{ fontSize: "14px", color: "#1C1C1C", textDecoration: "none" }}>
            ← Previous: Trade69
          </Link>
          <Link href="/work/octopus" style={{ fontSize: "14px", color: "#1C1C1C", textDecoration: "none" }}>
            Next: Octopus →
          </Link>
        </div>

      </div>
    </div>
  );
}
