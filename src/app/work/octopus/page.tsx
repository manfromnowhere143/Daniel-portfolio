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
          maxWidth: "clamp(280px, 70vw, 500px)",
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
            width={500}
            height={350}
            priority
          />
        </div>
      </div>

      {/* Personal Story */}
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#FAFAF8",
          lineHeight: 1.9,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          This project is a strong reminder to me. Every time I doubt myself I should remember this. The vision was clear: a wrapped LLM that creates websites, Three.js games, Web3 applications. Nice, me and another million people. But that isn&apos;t the point.
        </p>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#FAFAF8",
          lineHeight: 1.9,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          This was my first serious project. I didn&apos;t know what tests are. What backend is. Of course not database. But with intuition I managed to build my first API connection with an LLM, then round-robin pipelines, then the memory structure of Octopus. Days and nights breaking my head over it with no one actually noticing.
        </p>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#FAFAF8",
          lineHeight: 1.9,
          fontWeight: 300
        }}>
          Still a thing though. My nephew asked my mom to make him challah bread in an octopus shape, for me. This act will always remind me what good is. This fellow is Inbar.
        </p>
      </div>

      {/* Architecture - Elegant numbered list like Trade69 */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "clamp(60px, 10vh, 100px) 24px"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(40px, 6vh, 56px)",
          textAlign: "center"
        }}>
          Core Architecture
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column"
        }}>
          {[
            { name: "Goal Parser", desc: "Natural language to structured goal with intent classification" },
            { name: "Task Decomposer", desc: "Top-down, bottom-up, hybrid, template, and learned strategies" },
            { name: "Plan Executor", desc: "Sequential, parallel, adaptive, priority, round-robin execution" },
            { name: "Task Graph", desc: "NetworkX DAG with dependency resolution and topological ordering" },
            { name: "Event Sourcing", desc: "Immutable cognitive events with causality chain tracking" },
            { name: "REST API", desc: "FastAPI endpoints for goal processing and system status" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "baseline",
              gap: "clamp(12px, 3vw, 24px)",
              padding: "clamp(12px, 1.8vh, 16px) 0",
              borderBottom: i < 5 ? "1px solid #1A1A1A" : "none"
            }}>
              <span style={{
                fontSize: "10px",
                color: "#FAFAF8",
                opacity: 0.4,
                fontFamily: "Monaco, Courier, monospace",
                minWidth: "20px",
                flexShrink: 0
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontWeight: 400,
                color: "#FAFAF8",
                minWidth: "clamp(100px, 16vw, 140px)",
                flexShrink: 0
              }}>
                {item.name}
              </span>
              <span style={{
                fontSize: "clamp(11px, 1.3vw, 13px)",
                color: "#FAFAF8",
                fontWeight: 300,
                lineHeight: 1.5
              }}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tri-Store Memory - Circular nodes like MegaAgent Intelligence */}
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "clamp(60px, 10vh, 100px) 24px"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(40px, 6vh, 56px)",
          textAlign: "center"
        }}>
          Tri-Store Memory
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "clamp(32px, 5vw, 48px)"
        }}>
          {[
            {
              num: "01",
              title: "Semantic",
              desc: "Facts, concepts, knowledge graph with similarity-based retrieval and importance scoring"
            },
            {
              num: "02",
              title: "Episodic",
              desc: "Time-ordered events with temporal context, emotional valence, and auto-summarization"
            },
            {
              num: "03",
              title: "Procedural",
              desc: "Workflow storage, execution tracking, pattern learning, and performance metrics"
            }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid #2A2A28",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto clamp(14px, 2vh, 20px)",
                backgroundColor: "#0A0A0A"
              }}>
                <span style={{
                  fontSize: "11px",
                  color: "#FAFAF8",
                  fontFamily: "Monaco, Courier, monospace"
                }}>
                  {item.num}
                </span>
              </div>
              <p style={{
                fontSize: "clamp(12px, 1.4vw, 13px)",
                fontWeight: 400,
                color: "#FAFAF8",
                marginBottom: "8px",
                letterSpacing: "0.01em"
              }}>
                {item.title}
              </p>
              <p style={{
                fontSize: "11px",
                color: "#FAFAF8",
                lineHeight: 1.6,
                fontWeight: 300,
                maxWidth: "220px",
                margin: "0 auto"
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
              width={600}
              height={400}
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
              width={600}
              height={400}
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
          marginBottom: "clamp(24px, 4vh, 32px)"
        }}>
          Reflection System
        </p>

        <p style={{
          fontSize: "12px",
          color: "#FAFAF8",
          lineHeight: 2.2,
          letterSpacing: "0.02em"
        }}>
          Reflector · Meta-Reflector · Blind Spot Detector
        </p>
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