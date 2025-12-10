import Link from "next/link";
import FadeImage from "@/components/FadeImage";

export default function Octopus() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero Section */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "clamp(20px, 4vh, 40px) 24px clamp(40px, 6vh, 60px)",
        textAlign: "center"
      }}>
                <h1 style={{ 
          fontSize: "clamp(32px, 5vw, 52px)", 
          fontWeight: 200,
          color: "#FAFAF8",
          marginBottom: "clamp(20px, 3vh, 32px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1
        }}>
          Octopus
        </h1>
        
        {/* Floating Hero Image */}
        <div style={{ 
          maxWidth: "500px",
          margin: "0 auto",
          boxShadow: "0 30px 80px rgba(255,255,255,0.08)",
          border: "1px solid #1C1C1C",
          borderRadius: "2px",
          overflow: "hidden",
          backgroundColor: "#FAFAF8"
        }}>
          <FadeImage 
            src="/images/octopushero3.png" 
            alt="Octopus Interface"
            width={500} aspectRatio={500/350}
            height={350}
            priority
            style={{ 
              width: "100%", 
              height: "auto", 
              display: "block"
            }}
          />
        </div>
      </div>

      {/* Overview */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(60px, 10vh, 80px) 24px"
      }}>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          A modular cognitive architecture for autonomous goal decomposition, 
          task planning, and execution with tri-store memory and reflection.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          Process high-level natural language goals, decompose them into executable 
          task graphs, manage persistent memory, and perform post-execution reflection.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 300
        }}>
          Built on FastAPI with async MongoDB via Motor, NetworkX for DAG-based task graphs, 
          and ChromaDB for vector search. Event sourcing captures all cognitive activity 
          as immutable events with causality chain tracking.
        </p>
      </div>

      {/* Core Components */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(24px, 4vh, 32px)",
          textAlign: "center"
        }}>
          Core Components
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "1px",
          backgroundColor: "#0A0A0A"
        }}>
          {[
            { name: "Goal Parser", desc: "Natural language to structured goal with intent classification" },
            { name: "Task Decomposer", desc: "Top-down, bottom-up, hybrid, template, learned strategies" },
            { name: "Plan Executor", desc: "Sequential, parallel, adaptive, priority, round-robin execution" },
            { name: "Task Graph", desc: "NetworkX DAG with dependency resolution and topological ordering" },
            { name: "Event Sourcing", desc: "Immutable cognitive events with causality chain tracking" },
            { name: "REST API", desc: "FastAPI endpoints for goal processing and system status" },
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: "20px",
              backgroundColor: "#0A0A0A",
              borderLeft: "1px solid #1A1A1A"
            }}>
              <p style={{ 
                fontSize: "13px", 
                fontWeight: 400,
                color: "#FAFAF8",
                marginBottom: "6px"
              }}>
                {item.name}
              </p>
              <p style={{ 
                fontSize: "12px", 
                color: "#FAFAF8",
                lineHeight: 1.5
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tri-Store Memory */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(24px, 4vh, 32px)",
          textAlign: "center"
        }}>
          Tri-Store Memory System
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: "24px"
        }}>
          {[
            {
              title: "Semantic Memory",
              desc: "Facts, concepts, knowledge graph with similarity-based retrieval and importance scoring"
            },
            {
              title: "Episodic Memory",
              desc: "Time-ordered events with temporal context, emotional valence, and auto-summarization"
            },
            {
              title: "Procedural Memory",
              desc: "Workflow storage, execution tracking, pattern learning, and performance metrics"
            }
          ].map((item, i) => (
            <div key={i} style={{ 
              borderLeft: "1px solid #2A2A28",
              paddingLeft: "20px"
            }}>
              <p style={{ 
                fontSize: "13px", 
                fontWeight: 400,
                color: "#FAFAF8",
                marginBottom: "8px"
              }}>
                {item.title}
              </p>
              <p style={{ 
                fontSize: "12px", 
                color: "#FAFAF8",
                lineHeight: 1.6
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshots Section */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", 
          gap: "24px"
        }}>
          <div style={{ 
            boxShadow: "0 20px 60px rgba(255,255,255,0.05)",
            border: "1px solid #1C1C1C",
            borderRadius: "2px",
            overflow: "hidden",
            backgroundColor: "#FAFAF8"
          }}>
            <FadeImage 
              src="/images/ophoto1.jpg" 
              alt="Octopus Planning View"
              width={600} aspectRatio={600/400}
              height={400}
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block"
              }}
            />
          </div>
          <div style={{ 
            boxShadow: "0 20px 60px rgba(255,255,255,0.05)",
            border: "1px solid #1C1C1C",
            borderRadius: "2px",
            overflow: "hidden",
            backgroundColor: "#FAFAF8"
          }}>
            <FadeImage 
              src="/images/ophoto2.jpg" 
              alt="Octopus Memory View"
              width={600} aspectRatio={600/400}
              height={400}
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block"
              }}
            />
          </div>
        </div>
      </div>

      {/* Reflection System */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(60px, 10vh, 80px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 3vh, 24px)"
        }}>
          Reflection System
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 1.8vw, 15px)", 
          color: "#FAFAF8",
          lineHeight: 1.7,
          marginBottom: "clamp(24px, 4vh, 32px)"
        }}>
          Post-execution analysis for continuous improvement through pattern recognition 
          and recursive self-analysis.
        </p>
        <div style={{ 
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px"
        }}>
          {[
            "Reflector", "Meta-Reflector", "Blind Spot Detector"
          ].map((item, i) => (
            <span key={i} style={{ 
              fontSize: "12px",
              color: "#FAFAF8",
              padding: "8px 16px",
              border: "1px solid #2A2A28",
              borderRadius: "2px"
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* REST API */}
      <div style={{ 
        maxWidth: "700px", 
        margin: "0 auto", 
        padding: "clamp(40px, 6vh, 60px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 3vh, 24px)"
        }}>
          REST API
        </p>
        <div style={{ 
          backgroundColor: "#0F0F0F",
          padding: "20px 24px",
          borderRadius: "2px",
          border: "1px solid #1C1C1C",
          display: "inline-block",
          textAlign: "left"
        }}>
          <code style={{ 
            fontSize: "12px", 
            color: "#FAFAF8",
            fontFamily: "Monaco, Courier, monospace",
            lineHeight: 2,
            display: "block"
          }}>
            POST /api/v1/goal<br/>
            GET /api/v1/goal/examples<br/>
            GET /api/v1/status
          </code>
        </div>
      </div>

      {/* Technology Stack */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(40px, 6vh, 60px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 3vh, 24px)"
        }}>
          Stack
        </p>
        <p style={{ 
          fontSize: "12px", 
          color: "#FAFAF8",
          lineHeight: 2,
          letterSpacing: "0.02em"
        }}>
          Python · FastAPI · Motor · MongoDB · NetworkX · ChromaDB · Pydantic · structlog
        </p>
      </div>

      {/* Navigation */}
      <div style={{ 
        borderTop: "1px solid #1C1C1C",
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <div style={{ 
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <Link href="/work/megaagent" style={{ 
            fontSize: "12px", 
            color: "#FAFAF8", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            ← MegaAgent
          </Link>
          <Link href="/work/overmind" style={{ 
            fontSize: "12px", 
            color: "#FAFAF8", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            Overmind →
          </Link>
        </div>
      </div>

    </div>
  );
}
