import Link from "next/link";

export default function Octopus() {
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
            Multi-Agent Systems
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "52px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "24px"
          }}>
            Octopus
          </h1>
          <p style={{ 
            fontSize: "19px", 
            color: "#71706E", 
            lineHeight: 1.8,
            maxWidth: "700px"
          }}>
            A multi-agent orchestrator that coordinates specialized AI agents to solve 
            complex problems through collaborative intelligence.
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
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Agent Orchestration</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Status</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Active</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Stack</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Python, LangChain</p>
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
              Concept
            </h2>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              Complex problems rarely have simple solutions. They require multiple perspectives, 
              different types of expertise, and coordinated effort. Octopus applies this principle 
              to AI systems — instead of one monolithic agent, it orchestrates multiple specialized 
              agents that collaborate like a team.
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
              How It Works
            </h2>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              When a task arrives, the orchestrator analyzes its requirements and decomposes it 
              into subtasks. Each subtask is assigned to the agent best suited for that type of 
              work — a researcher, a coder, an analyst, a writer. The agents work in parallel 
              where possible, share context where needed, and synthesize their outputs into a 
              coherent result.
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
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Orchestrator</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Central coordinator that decomposes tasks and manages dependencies</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Agent Pool</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Specialized agents: research, code, analysis, writing, data processing</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Context Bus</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Shared memory allowing agents to access relevant information</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Synthesizer</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Combines outputs from multiple agents into unified results</span>
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
              {["Python", "LangChain", "OpenAI API", "Claude API", "Redis", "Graph Execution"].map((tech) => (
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
          <Link href="/work/megaagent" style={{ fontSize: "14px", color: "#1C1C1C", textDecoration: "none" }}>
            ← Previous: MegaAgent
          </Link>
          <Link href="/work/overmind" style={{ fontSize: "14px", color: "#1C1C1C", textDecoration: "none" }}>
            Next: Overmind →
          </Link>
        </div>

      </div>
    </div>
  );
}
