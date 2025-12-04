import Link from "next/link";

export default function MegaAgent() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero Section */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "clamp(20px, 4vh, 40px) 24px clamp(50px, 8vh, 80px)",
        textAlign: "center"
      }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.3em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "clamp(16px, 2vh, 24px)"
        }}>
          Autonomous Intelligence System
        </p>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(40px, 6vw, 72px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(20px, 3vh, 32px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1
        }}>
          MegaAgent
        </h1>
        <p style={{ 
          fontSize: "clamp(15px, 2vw, 18px)", 
          color: "#B8B7B3", 
          lineHeight: 1.7,
          maxWidth: "700px",
          margin: "0 auto clamp(50px, 8vh, 80px)",
          fontWeight: 300
        }}>
          Production-grade autonomous agent system for business opportunity discovery, 
          evaluation, and execution using portfolio theory and reinforcement learning.
        </p>

        {/* Stats Bar */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
          gap: "clamp(20px, 4vw, 40px)",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {[
            { value: "365", label: "Python Files" },
            { value: "258K", label: "Lines of Code" },
            { value: "12", label: "Core Modules" },
            { value: "30", label: "Opportunity Feeds" },
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
          A multi-agent system combining DAG-based orchestration, Markowitz portfolio optimization, 
          and contextual bandits for intelligent autonomous operations.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#71706E", 
          lineHeight: 1.8 
        }}>
          The system implements Byzantine fault tolerance, circuit breaker patterns with 
          statistical anomaly detection, and Bayesian inference for opportunity assessment.
        </p>
      </div>

      {/* Core Capabilities */}
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
          Core Capabilities
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "24px"
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

      {/* System Components */}
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
          System Components
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {[
            {
              title: "Orchestrator Layer",
              desc: "Central coordinator managing agent lifecycle with health monitoring and graceful degradation. Task distribution via priority queues with configurable concurrency limits. DAG-based workflow execution with dependency resolution and parallel task scheduling."
            },
            {
              title: "Economic Brain",
              desc: "Dynamic factor models with 50+ economic indicators and automatic feature selection. Markov regime switching for market state classification. Bayesian belief networks for opportunity assessment. Kelly Criterion for capital allocation with configurable fraction (default 0.25 for safety)."
            },
            {
              title: "Contextual Bandits",
              desc: "LinUCB algorithm with ridge regression for exploration-exploitation balance. Thompson Sampling with Beta-Bernoulli posteriors for Bayesian exploration. ε-greedy with configurable exploration rate and decay schedules. Unified interface supporting multiple bandit algorithms."
            },
            {
              title: "Resilience Patterns",
              desc: "Circuit breaker with three states and configurable thresholds. Sliding window for failure rate calculation with time-based expiry. Z-score based anomaly detection for automatic circuit opening. Exponential backoff with jitter for recovery attempts."
            },
            {
              title: "Portfolio Optimization",
              desc: "Markowitz mean-variance optimization with efficient frontier calculation. CVaR (Conditional Value at Risk) constraints for tail risk management. Black-Litterman model for incorporating subjective views. Maximum Sharpe ratio portfolio selection."
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

      {/* Opportunity Feeds */}
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
            30 Opportunity Feeds
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
            Automated scanning across multiple domains including GitHub trending repositories, 
            market data feeds, and business intelligence sources. Each feed implements 
            standardized scoring and filtering pipelines.
          </p>
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px"
          }}>
            {[
              "GitHub Trending", "Market Intelligence", "Business Signals", 
              "Technical Analysis", "Sentiment Feeds", "Economic Indicators"
            ].map((feed, i) => (
              <div key={i} style={{ 
                padding: "24px",
                backgroundColor: "#0A0A0A",
                border: "1px solid #1C1C1C"
              }}>
                <p style={{ fontSize: "15px", color: "#FAFAF8" }}>{feed}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
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
          Technology Stack
        </h2>
        <p style={{ 
          fontSize: "15px", 
          color: "#71706E",
          lineHeight: 1.8,
          textAlign: "center"
        }}>
          Python 3.11+ · FastAPI · SQLAlchemy · PostgreSQL · Redis · PyTorch · scikit-learn · scipy · cvxpy · Pydantic · asyncio
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
          <Link href="/work/trade69" style={{ 
            fontSize: "13px", 
            color: "#71706E", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            ← Previous: Trade69
          </Link>
          <Link href="/work/octopus" style={{ 
            fontSize: "13px", 
            color: "#71706E", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            Next: Octopus →
          </Link>
        </div>
      </div>

    </div>
  );
}
