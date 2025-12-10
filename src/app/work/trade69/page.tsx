import Link from "next/link";
import FadeImage from "@/components/FadeImage";
import VideoPlayer from "@/components/VideoPlayer";

import Trade69Architecture from "@/components/Trade69Architecture";

export default function Trade69() {
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
          Trade69
        </h1>
        
        {/* Floating Hero Image */}
        <div style={{ 
          maxWidth: "clamp(280px, 70vw, 500px)",
          margin: "0 auto",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          border: "1px solid #1C1C1C",
          borderRadius: "2px",
          overflow: "hidden",
          backgroundColor: "#000000"
        }}>
          <FadeImage 
            src="/images/t69hero4.png" 
            alt="Trade69 Dashboard"
            width={500}
            height={350}
            priority
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
          End-to-end algorithmic trading platform integrating multi-source market intelligence, 
          machine learning, and quantitative risk management.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          Trading system that aggregates data from social sentiment, 
          news APIs, dark pool activity, and market data to generate autonomous trading signals.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 300
        }}>
          The system employs Hidden Markov Models for market regime detection, 
          Random Forest classifiers for signal prediction, and Kelly Criterion 
          for position sizing. All operating without manual intervention.
        </p>
      </div>

      {/* System Architecture - 3D Visualization */}
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
          System Architecture
        </p>
        <Trade69Architecture />
      </div>

      {/* Data Collection Layer */}
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
          Data Collection Layer
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "1px",
          backgroundColor: "#0A0A0A"
        }}>
          {[
            { source: "StockTwits", data: "Trending tickers, sentiment ratios, message volume" },
            { source: "Reddit", data: "WSB, stocks, options subreddits with sentiment analysis" },
            { source: "Alpha Vantage", data: "News articles with ticker-specific sentiment scores" },
            { source: "Alpaca Markets", data: "Real-time quotes, OHLCV data, options chains" },
            { source: "Dark Pool", data: "Block trades, institutional accumulation patterns" },
            { source: "SEC EDGAR", data: "8-K filings, Form 4 insider transactions" },
            { source: "Yahoo Finance", data: "VIX levels, sector ETF performance" },
            { source: "FRED", data: "Put/Call ratio, credit spreads, yield curve" },
            { source: "Finviz", data: "Technical screener, momentum indicators" },
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: "20px",
              backgroundColor: "#0A0A0A"
            }}>
              <p style={{ 
                fontSize: "13px", 
                fontWeight: 400,
                color: "#FAFAF8",
                marginBottom: "6px"
              }}>
                {item.source}
              </p>
              <p style={{ 
                fontSize: "12px", 
                color: "#FAFAF8",
                lineHeight: 1.5
              }}>
                {item.data}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Intelligence Layer */}
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
          Intelligence Layer
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: "24px"
        }}>
          {[
            {
              title: "Signal Detection",
              desc: "Composite scoring (0-100) combining sentiment, options flow, dark pool activity, and technical indicators"
            },
            {
              title: "Regime Detection",
              desc: "Hidden Markov Model identifying BULL, BEAR, NEUTRAL states for adaptive strategy selection"
            },
            {
              title: "Machine Learning",
              desc: "Random Forest with 25 features: signal metrics, Greeks, liquidity, regime state"
            },
            {
              title: "Risk Management",
              desc: "Kelly Criterion sizing (1/4 Kelly, 2% max), sector limits (30%), correlation tracking"
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

      {/* Video Section */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "clamp(60px, 10vh, 80px) 24px"
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto clamp(40px, 6vh, 56px)"
        }}>
          <p style={{
            fontSize: "clamp(14px, 1.8vw, 15px)",
            color: "#FAFAF8",
            lineHeight: 1.8,
            fontWeight: 200,
            marginBottom: "16px"
          }}>
            My first dashboard, built alongside the backend as a control panel for live data extraction. 
            Started with Streamlit, then migrated to Dash for better flexibility. The system page 
            includes the database schema to provide LLMs with structural context, enabling 
            natural language queries through the middleware.
          </p>
          <p style={{
            fontSize: "clamp(14px, 1.8vw, 15px)",
            color: "#FAFAF8",
            lineHeight: 1.8,
            fontWeight: 300
          }}>
            This was also my first proper SQL database, the one where things finally clicked. 
            Currently paused, but the foundation is there for something better.
          </p>
        </div>
        
        <VideoPlayer src="/videos/t69demo.mp4" />
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
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            border: "1px solid #1C1C1C",
            borderRadius: "2px",
            overflow: "hidden",
            backgroundColor: "#000000"
          }}>
            <FadeImage 
              src="/images/tphoto2.png" 
              alt="Trade69 Analytics"
              width={600}
              height={400}
            />
          </div>
          <div style={{ 
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            border: "1px solid #1C1C1C",
            borderRadius: "2px",
            overflow: "hidden",
            backgroundColor: "#000000"
          }}>
            <FadeImage 
              src="/images/tphoto3.png" 
              alt="Trade69 Backtesting"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* LLM Middleware */}
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
          LLM Middleware
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 1.8vw, 15px)", 
          color: "#FAFAF8",
          lineHeight: 1.7,
          marginBottom: "clamp(24px, 4vh, 32px)"
        }}>
          AI Manager V4 with GPT-4 integration. Natural language to SQL translation with schema-aware query generation.
        </p>
        <div style={{ 
          backgroundColor: "#0F0F0F",
          padding: "20px 24px",
          borderRadius: "2px",
          border: "1px solid #1C1C1C",
          display: "inline-block"
        }}>
          <code style={{ 
            fontSize: "13px", 
            color: "#FAFAF8",
            fontFamily: "Monaco, Courier, monospace"
          }}>
            &quot;Show me top 5 signals from last week with win rate above 60%&quot;
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
          Python · PostgreSQL · TimescaleDB · Redis · scikit-learn · hmmlearn · Dash · Plotly · Alpaca · ThetaData · GPT-4
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
          <Link href="/work" style={{ 
            fontSize: "12px", 
            color: "#FAFAF8", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            ← Work
          </Link>
          <Link href="/work/megaagent" style={{ 
            fontSize: "12px", 
            color: "#FAFAF8", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            MegaAgent →
          </Link>
        </div>
      </div>

    </div>
  );
}
