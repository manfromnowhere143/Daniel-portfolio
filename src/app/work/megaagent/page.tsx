import Link from "next/link";

export default function MegaAgent() {
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
            Autonomous Intelligence System
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(40px, 10vw, 72px)", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px",
            lineHeight: 1.1
          }}>
            MegaAgent
          </h1>
          <p style={{ 
            fontSize: "17px", 
            color: "#A0A0A0", 
            lineHeight: 1.8,
            maxWidth: "540px",
            margin: "0 auto"
          }}>
            Production-grade autonomous agent system for business opportunity discovery, 
            evaluation, and execution using portfolio theory and reinforcement learning.
          </p>
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
            { value: "365", label: "Python Files" },
            { value: "258K", label: "Lines of Code" },
            { value: "12", label: "Core Modules" },
            { value: "30", label: "Opportunity Feeds" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p style={{ 
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "36px", 
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
            A multi-agent system combining DAG-based orchestration, Markowitz portfolio optimization, 
            and contextual bandits for intelligent autonomous operations.
          </p>
          <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.9 }}>
            The system implements Byzantine fault tolerance, circuit breaker patterns with 
            statistical anomaly detection, and Bayesian inference for opportunity assessment.
          </p>
        </div>
      </div>

      {/* Core Capabilities */}
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
            Core Capabilities
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "16px" 
          }}>
            {[
              { 
                name: "Multi-Agent Orchestration", 
                desc: "DAG-based workflow management with task dependencies and priority queues",
                status: "Implemented"
              },
              { 
                name: "Portfolio Optimization", 
                desc: "Markowitz mean-variance optimization with CVaR risk constraints and Black-Litterman model",
                status: "Implemented"
              },
              { 
                name: "Reinforcement Learning", 
                desc: "LinUCB with ridge regression, Thompson Sampling with Beta-Bernoulli posteriors",
                status: "Implemented"
              },
              { 
                name: "Economic Brain", 
                desc: "Bayesian belief networks, Kelly Criterion allocation, Markov regime detection",
                status: "Implemented"
              },
              { 
                name: "Circuit Breaker", 
                desc: "Three-state pattern (CLOSED, OPEN, HALF_OPEN) with z-score anomaly detection",
                status: "Implemented"
              },
              { 
                name: "Revenue Engine", 
                desc: "End-to-end opportunity discovery, scoring, and execution pipeline",
                status: "Implemented"
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

      {/* Architecture Deep Dive */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "12px"
        }}>
          Technical Architecture
        </p>
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "32px", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "40px"
        }}>
          System Components
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Orchestrator Layer
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Central coordinator managing agent lifecycle with health monitoring and graceful degradation. 
              Task distribution via priority queues with configurable concurrency limits. 
              DAG-based workflow execution with dependency resolution and parallel task scheduling.
            </p>
          </div>

          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Economic Brain
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Dynamic factor models with 50+ economic indicators and automatic feature selection. 
              Markov regime switching for market state classification. Bayesian belief networks 
              for opportunity assessment. Kelly Criterion for capital allocation with configurable 
              fraction (default 0.25 for safety).
            </p>
          </div>

          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Contextual Bandits
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              LinUCB algorithm with ridge regression for exploration-exploitation balance. 
              Thompson Sampling with Beta-Bernoulli posteriors for Bayesian exploration. 
              ε-greedy with configurable exploration rate and decay schedules. 
              Unified interface supporting multiple bandit algorithms.
            </p>
          </div>

          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Resilience Patterns
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Circuit breaker with three states and configurable thresholds. Sliding window 
              for failure rate calculation with time-based expiry. Z-score based anomaly detection 
              for automatic circuit opening. Exponential backoff with jitter for recovery attempts.
            </p>
          </div>

          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Portfolio Optimization
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Markowitz mean-variance optimization with efficient frontier calculation. 
              CVaR (Conditional Value at Risk) constraints for tail risk management. 
              Black-Litterman model for incorporating subjective views. 
              Maximum Sharpe ratio portfolio selection.
            </p>
          </div>

        </div>
      </div>

      {/* Opportunity Feeds */}
      <div style={{ backgroundColor: "#1C1C1C", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "12px"
          }}>
            Intelligence Gathering
          </p>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "32px", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px"
          }}>
            30 Opportunity Feeds
          </h2>
          <p style={{ fontSize: "15px", color: "#A0A0A0", lineHeight: 1.9, marginBottom: "32px" }}>
            Automated scanning across multiple domains including GitHub trending repositories, 
            market data feeds, and business intelligence sources. Each feed implements 
            standardized scoring and filtering pipelines.
          </p>
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px"
          }}>
            {[
              "GitHub Trending", "Market Intelligence", "Business Signals", 
              "Technical Analysis", "Sentiment Feeds", "Economic Indicators"
            ].map((feed, i) => (
              <div key={i} style={{ 
                padding: "20px",
                backgroundColor: "#2a2a2a",
                borderRadius: "4px"
              }}>
                <p style={{ fontSize: "14px", color: "#FAFAF8" }}>{feed}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
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
            "Python 3.11+", "FastAPI", "SQLAlchemy", "PostgreSQL", "Redis",
            "PyTorch", "scikit-learn", "scipy", "cvxpy", "Pydantic", "asyncio"
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
            In Development
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
