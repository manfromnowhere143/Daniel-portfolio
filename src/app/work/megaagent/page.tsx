"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';

const MetatronCube = dynamic(() => import('@/components/MetatronCube'), {
  ssr: false,
  loading: () => <div style={{ width: '300px', height: '300px', margin: '0 auto' }} />
});

export default function MegaAgent() {
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
          MegaAgent
        </h1>

        {/* Hero - Metatron's Cube */}
        <div style={{ margin: "clamp(32px, 5vh, 48px) 0 clamp(24px, 4vh, 32px)" }}>
        <MetatronCube />
        </div>
      </div>

      {/* Overview */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(32px, 5vh, 48px) 24px"
      }}>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          Production-grade autonomous agent system for business opportunity discovery, 
          evaluation, and execution using portfolio theory and reinforcement learning.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          A multi-agent system combining DAG-based orchestration, Markowitz portfolio optimization, 
          and contextual bandits for intelligent autonomous operations.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 300
        }}>
          The system implements Byzantine fault tolerance, circuit breaker patterns with 
          statistical anomaly detection, and Bayesian inference for opportunity assessment.
        </p>
      </div>

      {/* Core Capabilities */}
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
          Core Capabilities
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "1px",
          backgroundColor: "#0A0A0A"
        }}>
          {[
            { name: "Multi-Agent Orchestration", desc: "DAG-based workflow with task dependencies and priority queues" },
            { name: "Portfolio Optimization", desc: "Markowitz mean-variance with CVaR risk constraints" },
            { name: "Reinforcement Learning", desc: "LinUCB with ridge regression, Thompson Sampling" },
            { name: "Economic Brain", desc: "Bayesian belief networks, Kelly Criterion allocation" },
            { name: "Circuit Breaker", desc: "Three-state pattern with z-score anomaly detection" },
            { name: "Revenue Engine", desc: "End-to-end opportunity discovery and execution" },
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

      {/* System Components */}
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
          System Components
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: "24px"
        }}>
          {[
            {
              title: "Orchestrator Layer",
              desc: "Central coordinator managing agent lifecycle with health monitoring and graceful degradation"
            },
            {
              title: "Economic Brain",
              desc: "Dynamic factor models with 50+ economic indicators and automatic feature selection"
            },
            {
              title: "Contextual Bandits",
              desc: "LinUCB algorithm with ridge regression for exploration-exploitation balance"
            },
            {
              title: "Resilience Patterns",
              desc: "Circuit breaker with three states, sliding window failure rate calculation"
            },
            {
              title: "Portfolio Optimization",
              desc: "Markowitz mean-variance with efficient frontier and maximum Sharpe ratio selection"
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

      {/* Opportunity Feeds */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(32px, 5vh, 48px) 24px",
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
          marginBottom: "clamp(24px, 4vh, 32px)"
        }}>
          Automated scanning across multiple domains including GitHub trending repositories, 
          market data feeds, and business intelligence sources with standardized scoring pipelines.
        </p>
        <div style={{ 
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px"
        }}>
          {[
            "GitHub Trending", "Market Intelligence", "Business Signals", 
            "Technical Analysis", "Sentiment Feeds", "Economic Indicators"
          ].map((feed, i) => (
            <span key={i} style={{ 
              fontSize: "12px",
              color: "#FAFAF8",
              padding: "8px 16px",
              border: "1px solid #2A2A28",
              borderRadius: "2px"
            }}>
              {feed}
            </span>
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
