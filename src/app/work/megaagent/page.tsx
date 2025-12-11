"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';

const MetatronCube = dynamic(() => import('@/components/MetatronCube'), {
  ssr: false,
  loading: () => <div style={{ width: '160px', height: '160px', margin: '0 auto' }} />
});

export default function MegaAgent() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero Section */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(20px, 4vh, 40px) 24px clamp(24px, 4vh, 32px)",
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
          MegaAgent
        </h1>

        {/* Hero - Metatron's Cube */}
        <div style={{ margin: "clamp(24px, 4vh, 40px) 0", animation: "fadeIn 0.6s ease-out" }}>
          <MetatronCube />
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
          Back in July-August I was still lost in space. Lack of confidence and hiding from the world, I couldn&apos;t find what I&apos;m good at. So I said okay, let&apos;s build agents that will tell me what&apos;s profitable. That&apos;s how it started.
        </p>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#FAFAF8",
          lineHeight: 1.9,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          This project touched my software development the most. It started with finding the most efficient way to work as a solo developer, structuring my own environment, accelerating by automating everything. Pre-commit, ruff, tests... I actually started testing seriously here. 3,200 tests, 100% passing.
        </p>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#FAFAF8",
          lineHeight: 1.9,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          Honestly, I don&apos;t know what I was trying to improve or for who. Kind of what I&apos;m doing now. So later I wanted to deploy the 15 agents, 8 models, all the services. Building the tree and tests like blind. Wait, I actually built 30 opportunity scrapers trying to cover the entire internet. All for one reason: find billion-dollar opportunities and build solutions for them.
        </p>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#FAFAF8",
          lineHeight: 1.9,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          Anyway, this is when I learned how to properly work with GitHub. Became an API expert and did that for about three months. Learned Docker, Poetry for dependencies, Kubernetes for dynamic deployment. And I found out I don&apos;t need to be a math genius to use state-of-the-art mathematics that&apos;s already there. Markov models, Thompson sampling, Kelly criterion and many more. I just need to know what mathematics belongs where.
        </p>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#FAFAF8",
          lineHeight: 1.9,
          fontWeight: 300
        }}>
          I was that ambitious and ignorant. Well, MegaAgent does deploy Notion pages, create Stripe products, find opportunities apparently, but I never bothered making it actually build SaaS. Science fiction, right?
        </p>
      </div>

      {/* Architecture Layers - Vertical flow */}
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
          marginBottom: "clamp(48px, 8vh, 64px)",
          textAlign: "center"
        }}>
          Architecture
        </p>

        {/* Vertical stack with connecting line */}
        <div style={{ position: "relative" }}>
          {/* Vertical connecting line */}
          <div style={{
            position: "absolute",
            left: "24px",
            top: "24px",
            bottom: "24px",
            width: "1px",
            background: "linear-gradient(180deg, #2A2A28 0%, #2A2A28 100%)"
          }} />

          {[
            {
              layer: "Orchestration",
              desc: "Central coordinator managing agent lifecycle with health monitoring and graceful degradation"
            },
            {
              layer: "Economic Brain",
              desc: "Dynamic factor models with 50+ economic indicators and automatic feature selection"
            },
            {
              layer: "Learning Engine",
              desc: "LinUCB algorithm with ridge regression for exploration-exploitation balance"
            },
            {
              layer: "Portfolio Optimizer",
              desc: "Markowitz mean-variance with efficient frontier and maximum Sharpe ratio selection"
            },
            {
              layer: "Resilience Layer",
              desc: "Circuit breaker with three states, sliding window failure rate calculation"
            }
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(24px, 4vw, 40px)",
              marginBottom: i < 4 ? "clamp(32px, 5vh, 48px)" : 0,
              position: "relative"
            }}>
              {/* Node */}
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid #2A2A28",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0A0A0A",
                flexShrink: 0,
                position: "relative",
                zIndex: 1
              }}>
                <span style={{
                  fontSize: "11px",
                  color: "#FAFAF8",
                  fontFamily: "Monaco, Courier, monospace"
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div style={{ paddingTop: "4px" }}>
                <p style={{
                  fontSize: "clamp(13px, 1.6vw, 15px)",
                  fontWeight: 400,
                  color: "#FAFAF8",
                  marginBottom: "8px",
                  letterSpacing: "0.01em"
                }}>
                  {item.layer}
                </p>
                <p style={{
                  fontSize: "clamp(12px, 1.4vw, 13px)",
                  color: "#FAFAF8",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  maxWidth: "500px"
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Capabilities - Horizontal cards */}
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
          Capabilities
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          backgroundColor: "#1A1A1A"
        }}>
          {[
            { name: "Multi-Agent DAG", desc: "Task dependencies and priority queues" },
            { name: "Portfolio Theory", desc: "CVaR risk constraints optimization" },
            { name: "Reinforcement Learning", desc: "Thompson Sampling exploration" },
            { name: "Bayesian Networks", desc: "Belief propagation inference" },
            { name: "Circuit Breaker", desc: "Z-score anomaly detection" },
            { name: "Revenue Engine", desc: "End-to-end execution pipeline" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "clamp(20px, 3vw, 32px)",
              backgroundColor: "#0A0A0A",
              textAlign: "center"
            }}>
              <p style={{
                fontSize: "clamp(12px, 1.4vw, 13px)",
                fontWeight: 400,
                color: "#FAFAF8",
                marginBottom: "8px"
              }}>
                {item.name}
              </p>
              <p style={{
                fontSize: "11px",
                color: "#FAFAF8",
                opacity: 0.7,
                lineHeight: 1.5
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunity Feeds */}
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
          30 Opportunity Feeds
        </p>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 15px)",
          color: "#FAFAF8",
          lineHeight: 1.7,
          fontWeight: 300,
          marginBottom: "clamp(32px, 5vh, 40px)"
        }}>
          Automated scanning across multiple domains with standardized scoring pipelines.
        </p>

        {/* Feed list - elegant inline */}
        <p style={{
          fontSize: "12px",
          color: "#FAFAF8",
          lineHeight: 2.2,
          letterSpacing: "0.02em"
        }}>
          GitHub Trending · Market Intelligence · Business Signals · Technical Analysis · Sentiment Feeds · Economic Indicators
        </p>
      </div>

      {/* Scale - Compact */}
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px"
        }}>
          {[
            { value: "365", label: "Files" },
            { value: "258K", label: "Lines" },
            { value: "3,200", label: "Tests" },
            { value: "100%", label: "Passing" }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p style={{
                fontSize: "16px",
                fontWeight: 300,
                color: "#FAFAF8",
                letterSpacing: "-0.01em",
                marginBottom: "2px"
              }}>
                {item.value}
              </p>
              <p style={{
                fontSize: "8px",
                color: "#FAFAF8",
                opacity: 0.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}>
                {item.label}
              </p>
            </div>
          ))}
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
          Python · FastAPI · SQLAlchemy · PostgreSQL · Redis · PyTorch · scikit-learn · scipy · cvxpy · Pydantic
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
          <Link href="/work/trade69" style={{
            fontSize: "12px",
            color: "#FAFAF8",
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            ← Trade69
          </Link>
          <Link href="/work/octopus" style={{
            fontSize: "12px",
            color: "#FAFAF8",
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            Octopus →
          </Link>
        </div>
      </div>

    </div>
  );
}