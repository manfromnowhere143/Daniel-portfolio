import Link from "next/link";
import Image from "next/image";

export default function Octopus() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero Section */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "clamp(80px, 12vh, 120px) 24px clamp(60px, 8vh, 80px)",
        textAlign: "center"
      }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.3em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "clamp(20px, 3vh, 32px)"
        }}>
          Cognitive Agent Framework
        </p>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(40px, 6vw, 72px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(24px, 4vh, 40px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1
        }}>
          Octopus
        </h1>
        <p style={{ 
          fontSize: "clamp(15px, 2vw, 18px)", 
          color: "#B8B7B3", 
          lineHeight: 1.7,
          maxWidth: "700px",
          margin: "0 auto clamp(60px, 10vh, 100px)",
          fontWeight: 300
        }}>
          A modular cognitive architecture for autonomous goal decomposition, 
          task planning, and execution with tri-store memory and reflection.
        </p>
        
        {/* Floating Hero Image */}
        <div style={{ 
          maxWidth: "900px",
          margin: "0 auto clamp(60px, 10vh, 100px)",
          boxShadow: "0 30px 80px rgba(255,255,255,0.08)",
          border: "1px solid #1C1C1C",
          borderRadius: "2px",
          overflow: "hidden",
          backgroundColor: "#FAFAF8"
        }}>
          <Image 
            src="/images/ophoto4.png" 
            alt="Octopus Interface"
            width={900}
            height={560}
            priority
            style={{ 
              width: "100%", 
              height: "auto", 
              display: "block"
            }}
          />
        </div>

        {/* Stats Bar */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
          gap: "clamp(20px, 4vw, 40px)",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {[
            { value: "v0.1.0", label: "Version" },
            { value: "3", label: "Memory Stores" },
            { value: "5", label: "Decomposition Strategies" },
            { value: "5", label: "Execution Strategies" },
          ].map((stat, i) => (
            <div key={i}>
              <p style={{ 
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(28px, 5vw, 36px)", 
                fontWeight: 300,
                color: "#FAFAF8",
                marginBottom: "8px"
              }}>
                {stat.value}
              </p>
              <p style={{ 
                fontSize: "12px", 
                color: "#71706E",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(60px, 10vh, 100px) 24px"
      }}>
        <p style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(20px, 3vw, 28px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          lineHeight: 1.6,
          marginBottom: "24px"
        }}>
          Process high-level natural language goals, decompose them into executable 
          task graphs, manage persistent memory, and perform post-execution reflection.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#71706E", 
          lineHeight: 1.8 
        }}>
          Built on FastAPI with async MongoDB via Motor, NetworkX for DAG-based task graphs, 
          and ChromaDB for vector search. Event sourcing captures all cognitive activity 
          as immutable events with causality chain tracking.
        </p>
      </div>

      {/* Core Components */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "clamp(80px, 12vh, 120px) 24px"
      }}>
        <div style={{
          width: "60px",
          height: "1px",
          backgroundColor: "#1C1C1C",
          margin: "0 auto clamp(32px, 5vh, 48px)"
        }} />
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(28px, 4vw, 40px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(40px, 6vh, 60px)",
          textAlign: "center",
          letterSpacing: "-0.01em"
        }}>
          Core Components
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "24px"
        }}>
          {[
            { 
              name: "Goal Parser", 
              desc: "Natural language to structured goal with intent classification",
              status: "Functional"
            },
            { 
              name: "Task Decomposer", 
              desc: "5 strategies: top-down, bottom-up, hybrid, template, learned",
              status: "Functional"
            },
            { 
              name: "Plan Executor", 
              desc: "5 strategies: sequential, parallel, adaptive, priority, round-robin",
              status: "Functional"
            },
            { 
              name: "Task Graph", 
              desc: "NetworkX-based DAG with dependency resolution and topological ordering",
              status: "Functional"
            },
            { 
              name: "Event Sourcing", 
              desc: "Immutable cognitive events with causality chain tracking",
              status: "Functional"
            },
            { 
              name: "REST API", 
              desc: "FastAPI endpoints for goal processing and system status",
              status: "Functional"
            },
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: "28px",
              backgroundColor: "#0F0F0F",
              borderLeft: "1px solid #1C1C1C"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <h3 style={{ 
                  fontSize: "16px", 
                  fontWeight: 500,
                  color: "#FAFAF8",
                  letterSpacing: "0.02em"
                }}>
                  {item.name}
                </h3>
                <span style={{ 
                  fontSize: "10px", 
                  color: "#71706E", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.1em" 
                }}>
                  {item.status}
                </span>
              </div>
              <p style={{ 
                fontSize: "14px", 
                color: "#71706E",
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
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 24px clamp(80px, 12vh, 120px)"
      }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", 
          gap: "32px"
        }}>
          <div style={{ 
            boxShadow: "0 30px 80px rgba(255,255,255,0.08)",
            border: "1px solid #1C1C1C",
            borderRadius: "2px",
            overflow: "hidden",
            backgroundColor: "#FAFAF8"
          }}>
            <Image 
              src="/images/ophoto1.jpg" 
              alt="Octopus Planning View"
              width={600}
              height={400}
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block"
              }}
            />
          </div>
          <div style={{ 
            boxShadow: "0 30px 80px rgba(255,255,255,0.08)",
            border: "1px solid #1C1C1C",
            borderRadius: "2px",
            overflow: "hidden",
            backgroundColor: "#FAFAF8"
          }}>
            <Image 
              src="/images/ophoto2.jpg" 
              alt="Octopus Memory View"
              width={600}
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

      {/* Tri-Store Memory */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "clamp(80px, 12vh, 120px) 24px"
      }}>
        <div style={{
          width: "60px",
          height: "1px",
          backgroundColor: "#1C1C1C",
          margin: "0 auto clamp(32px, 5vh, 48px)"
        }} />
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(28px, 4vw, 40px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(40px, 6vh, 60px)",
          textAlign: "center",
          letterSpacing: "-0.01em"
        }}>
          Tri-Store Memory System
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {[
            {
              title: "Semantic Memory",
              desc: "Facts, concepts, and knowledge graph with inference capabilities. Supports similarity-based retrieval, concept relationships, and knowledge consolidation with importance scoring and decay."
            },
            {
              title: "Episodic Memory",
              desc: "Time-ordered events with temporal context and retrieval. Captures experiences with emotional valence, temporal relationships, and automatic summarization of event sequences."
            },
            {
              title: "Procedural Memory",
              desc: "Workflow storage, execution tracking, and performance metrics. Learns patterns from execution history for the 'learned' decomposition strategy. Tracks success rates and optimization hints."
            }
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: "32px",
              backgroundColor: "#0F0F0F",
              borderLeft: "2px solid #1C1C1C"
            }}>
              <h3 style={{ 
                fontSize: "20px", 
                fontWeight: 400,
                color: "#FAFAF8",
                marginBottom: "16px",
                letterSpacing: "0.01em"
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: "15px", 
                color: "#71706E",
                lineHeight: 1.7
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reflection System */}
      <div style={{ 
        backgroundColor: "#000000",
        padding: "clamp(80px, 12vh, 120px) 24px"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{
            width: "60px",
            height: "1px",
            backgroundColor: "#1C1C1C",
            margin: "0 auto clamp(32px, 5vh, 48px)"
          }} />
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(28px, 4vw, 40px)", 
            fontWeight: 300,
            color: "#FAFAF8",
            marginBottom: "clamp(24px, 4vh, 32px)",
            textAlign: "center",
            letterSpacing: "-0.01em"
          }}>
            Reflection System
          </h2>
          <p style={{ 
            fontSize: "16px", 
            color: "#71706E",
            lineHeight: 1.7,
            textAlign: "center",
            marginBottom: "clamp(32px, 6vh, 48px)",
            maxWidth: "700px",
            margin: "0 auto clamp(32px, 6vh, 48px)"
          }}>
            Post-execution analysis for continuous improvement through pattern recognition 
            and recursive self-analysis.
          </p>
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px"
          }}>
            {[
              { name: "Reflector", desc: "Performance analysis and insight generation" },
              { name: "Meta-Reflector", desc: "Recursive self-analysis and pattern detection" },
              { name: "Blind Spot Detector", desc: "Identifies analysis gaps and biases" },
            ].map((item, i) => (
              <div key={i} style={{ 
                padding: "28px",
                backgroundColor: "#0A0A0A",
                border: "1px solid #1C1C1C"
              }}>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#FAFAF8", 
                  marginBottom: "12px",
                  fontWeight: 500
                }}>
                  {item.name}
                </p>
                <p style={{ 
                  fontSize: "14px", 
                  color: "#71706E", 
                  lineHeight: 1.6
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Endpoints */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "clamp(80px, 12vh, 120px) 24px"
      }}>
        <div style={{
          width: "60px",
          height: "1px",
          backgroundColor: "#1C1C1C",
          margin: "0 auto clamp(32px, 5vh, 48px)"
        }} />
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(28px, 4vw, 40px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(40px, 6vh, 60px)",
          textAlign: "center",
          letterSpacing: "-0.01em"
        }}>
          REST API
        </h2>
        <div style={{ 
          backgroundColor: "#0F0F0F",
          padding: "clamp(20px, 3vw, 28px)",
          borderRadius: "2px",
          border: "1px solid #1C1C1C",
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontFamily: "Monaco, Courier, monospace", fontSize: "14px" }}>
            {[
              { method: "POST", path: "/api/v1/goal", desc: "Process a goal" },
              { method: "GET", path: "/api/v1/goal/examples", desc: "Example goals" },
              { method: "GET", path: "/api/v1/status", desc: "System status" },
              { method: "GET", path: "/api/v1/status/metrics", desc: "Performance metrics" },
            ].map((endpoint, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ color: "#FAFAF8", fontWeight: 600, minWidth: "60px" }}>{endpoint.method}</span>
                <span style={{ color: "#B8B7B3", flex: 1, minWidth: "200px" }}>{endpoint.path}</span>
                <span style={{ color: "#71706E", fontSize: "13px" }}>{endpoint.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "0 24px clamp(80px, 12vh, 120px)"
      }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "clamp(24px, 4vh, 32px)",
          textAlign: "center"
        }}>
          Technology Stack
        </p>
        <p style={{ 
          fontSize: "15px", 
          color: "#71706E",
          lineHeight: 1.8,
          textAlign: "center"
        }}>
          Python 3.11+ · FastAPI · Motor · MongoDB · NetworkX · ChromaDB · Pydantic · structlog · tenacity
        </p>
      </div>

      {/* Navigation */}
      <div style={{ 
        borderTop: "1px solid #1C1C1C",
        padding: "clamp(60px, 10vh, 80px) 24px"
      }}>
        <div style={{ 
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <Link href="/work/megaagent" style={{ 
            fontSize: "13px", 
            color: "#71706E", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            ← Previous: MegaAgent
          </Link>
          <Link href="/work/overmind" style={{ 
            fontSize: "13px", 
            color: "#71706E", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            Next: Overmind →
          </Link>
        </div>
      </div>

    </div>
  );
}
