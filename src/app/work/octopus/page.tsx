import Link from "next/link";
import Image from "next/image";

export default function Octopus() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section */}
      <div style={{ 
        width: "100%",
        backgroundColor: "#1C1C1C",
        padding: "80px 24px"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.3em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "20px"
          }}>
            Cognitive Agent Framework
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(40px, 10vw, 72px)", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px",
            lineHeight: 1.1
          }}>
            Octopus
          </h1>
          <p style={{ 
            fontSize: "17px", 
            color: "#A0A0A0", 
            lineHeight: 1.8,
            maxWidth: "540px",
            margin: "0 auto"
          }}>
            A modular cognitive architecture for autonomous goal decomposition, 
            task planning, and execution with tri-store memory and reflection.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "-60px auto 0",
        padding: "0 24px"
      }}>
        <div style={{ 
          boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#1C1C1C"
        }}>
          <Image 
            src="/images/ophoto4.png" 
            alt="Octopus Interface"
            width={900}
            height={560}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px 0" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
          gap: "40px",
          paddingBottom: "60px",
          borderBottom: "1px solid #E0DED6"
        }}>
          {[
            { value: "v0.1.0", label: "Version" },
            { value: "3", label: "Memory Stores" },
            { value: "5", label: "Decomposition Strategies" },
            { value: "5", label: "Execution Strategies" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p style={{ 
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "32px", 
                color: "#1C1C1C",
                marginBottom: "8px"
              }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ maxWidth: "600px" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            color: "#1C1C1C",
            lineHeight: 1.6,
            marginBottom: "24px"
          }}>
            Process high-level natural language goals, decompose them into executable 
            task graphs, manage persistent memory, and perform post-execution reflection.
          </p>
          <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.9 }}>
            Built on FastAPI with async MongoDB via Motor, NetworkX for DAG-based task graphs, 
            and ChromaDB for vector search. Event sourcing captures all cognitive activity 
            as immutable events with causality chain tracking.
          </p>
        </div>
      </div>

      {/* Core Components */}
      <div style={{ backgroundColor: "#F2F1ED", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "12px",
            textAlign: "center"
          }}>
            Verified From Code Audit
          </p>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "32px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "48px",
            textAlign: "center"
          }}>
            Core Components
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
            gap: "16px" 
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
                backgroundColor: "#FAFAF8"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <p style={{ fontSize: "16px", color: "#1C1C1C", fontWeight: 500 }}>
                    {item.name}
                  </p>
                  <span style={{ fontSize: "10px", color: "#71706E", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {item.status}
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px"
        }}>
          <div style={{ 
            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
            borderRadius: "6px",
            overflow: "hidden",
            backgroundColor: "#1C1C1C"
          }}>
            <Image 
              src="/images/ophoto1.jpg" 
              alt="Octopus Planning View"
              width={450}
              height={300}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div style={{ 
            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
            borderRadius: "6px",
            overflow: "hidden",
            backgroundColor: "#1C1C1C"
          }}>
            <Image 
              src="/images/ophoto2.jpg" 
              alt="Octopus Memory View"
              width={450}
              height={300}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* Tri-Store Memory */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "12px"
        }}>
          Cognitive Architecture
        </p>
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "32px", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "40px"
        }}>
          Tri-Store Memory System
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Semantic Memory
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Facts, concepts, and knowledge graph with inference capabilities. 
              Supports similarity-based retrieval, concept relationships, 
              and knowledge consolidation with importance scoring and decay.
            </p>
          </div>

          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Episodic Memory
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Time-ordered events with temporal context and retrieval. 
              Captures experiences with emotional valence, temporal relationships, 
              and automatic summarization of event sequences.
            </p>
          </div>

          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Procedural Memory
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Workflow storage, execution tracking, and performance metrics. 
              Learns patterns from execution history for the "learned" 
              decomposition strategy. Tracks success rates and optimization hints.
            </p>
          </div>

        </div>
      </div>

      {/* Reflection System */}
      <div style={{ backgroundColor: "#1C1C1C", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "12px"
          }}>
            Self-Improvement
          </p>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "32px", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px"
          }}>
            Reflection System
          </h2>
          <p style={{ fontSize: "15px", color: "#A0A0A0", lineHeight: 1.9, marginBottom: "32px" }}>
            Post-execution analysis for continuous improvement through pattern recognition 
            and recursive self-analysis.
          </p>
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px"
          }}>
            {[
              { name: "Reflector", desc: "Performance analysis and insight generation" },
              { name: "Meta-Reflector", desc: "Recursive self-analysis and pattern detection" },
              { name: "Blind Spot Detector", desc: "Identifies analysis gaps and biases" },
            ].map((item, i) => (
              <div key={i} style={{ 
                padding: "24px",
                backgroundColor: "#2a2a2a",
                borderRadius: "4px"
              }}>
                <p style={{ fontSize: "15px", color: "#FAFAF8", marginBottom: "8px" }}>{item.name}</p>
                <p style={{ fontSize: "13px", color: "#A0A0A0", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Endpoints */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "12px"
        }}>
          REST API
        </p>
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "32px", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "32px"
        }}>
          Endpoints
        </h2>
        <div style={{ 
          backgroundColor: "#F2F1ED",
          padding: "24px",
          borderRadius: "4px",
          fontFamily: "monospace",
          fontSize: "14px"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <span style={{ color: "#1C1C1C", fontWeight: 600, width: "60px" }}>POST</span>
              <span style={{ color: "#71706E" }}>/api/v1/goal</span>
              <span style={{ color: "#A0A0A0", marginLeft: "auto" }}>Process a goal</span>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <span style={{ color: "#1C1C1C", fontWeight: 600, width: "60px" }}>GET</span>
              <span style={{ color: "#71706E" }}>/api/v1/goal/examples</span>
              <span style={{ color: "#A0A0A0", marginLeft: "auto" }}>Example goals</span>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <span style={{ color: "#1C1C1C", fontWeight: 600, width: "60px" }}>GET</span>
              <span style={{ color: "#71706E" }}>/api/v1/status</span>
              <span style={{ color: "#A0A0A0", marginLeft: "auto" }}>System status</span>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <span style={{ color: "#1C1C1C", fontWeight: 600, width: "60px" }}>GET</span>
              <span style={{ color: "#71706E" }}>/api/v1/status/metrics</span>
              <span style={{ color: "#A0A0A0", marginLeft: "auto" }}>Performance metrics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 40px" }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "24px",
          textAlign: "center"
        }}>
          Technology Stack
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          {[
            "Python 3.11+", "FastAPI", "Motor", "MongoDB", "NetworkX",
            "ChromaDB", "Pydantic", "structlog", "tenacity"
          ].map((tech) => (
            <span key={tech} style={{ 
              padding: "12px 24px", 
              border: "1px solid #E0DED6",
              fontSize: "13px", 
              color: "#1C1C1C"
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Status */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 40px" }}>
        <div style={{ 
          padding: "32px",
          backgroundColor: "#F2F1ED",
          textAlign: "center"
        }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>
            Current Status
          </p>
          <p style={{ fontSize: "18px", color: "#1C1C1C" }}>
            v0.1.0 Alpha — Core Architecture Implemented
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          paddingTop: "32px",
          borderTop: "1px solid #E0DED6"
        }}>
          <Link href="/work/megaagent" style={{ fontSize: "13px", color: "#1C1C1C", textDecoration: "none" }}>
            ← Previous: MegaAgent
          </Link>
          <Link href="/work/overmind" style={{ fontSize: "13px", color: "#1C1C1C", textDecoration: "none" }}>
            Next: Overmind →
          </Link>
        </div>
      </div>

    </div>
  );
}
