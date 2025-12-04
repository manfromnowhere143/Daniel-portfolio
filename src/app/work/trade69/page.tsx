import Link from "next/link";
import Image from "next/image";

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
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.3em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "clamp(16px, 2vh, 24px)"
        }}>
          Algorithmic Trading Intelligence
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
          Trade69
        </h1>
        <p style={{ 
          fontSize: "clamp(15px, 2vw, 18px)", 
          color: "#B8B7B3", 
          lineHeight: 1.7,
          maxWidth: "700px",
          margin: "0 auto clamp(40px, 6vh, 60px)",
          fontWeight: 300
        }}>
          End-to-end algorithmic trading platform integrating multi-source market intelligence, 
          machine learning, and quantitative risk management.
        </p>
        
        {/* Floating Hero Image with Shadow and Border */}
        <div style={{ 
          maxWidth: "900px",
          margin: "0 auto clamp(50px, 8vh, 80px)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          border: "1px solid #1C1C1C",
          borderRadius: "2px",
          overflow: "hidden",
          backgroundColor: "#000000"
        }}>
          <Image 
            src="/images/tphoto1.png" 
            alt="Trade69 Dashboard"
            width={900}
            height={560}
            priority
            style={{ 
              width: "100%", 
              height: "auto", 
              display: "block",
              opacity: 0.98
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
            { value: "245", label: "Python Files" },
            { value: "32K+", label: "Lines of Code" },
            { value: "11", label: "Data Sources" },
            { value: "36", label: "Database Tables" },
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
          A comprehensive trading system that aggregates data from social sentiment, 
          news APIs, dark pool activity, and market data to generate autonomous trading signals.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#71706E", 
          lineHeight: 1.8 
        }}>
          The system employs Hidden Markov Models for market regime detection, 
          Random Forest classifiers for signal prediction, and Kelly Criterion 
          for position sizing. All operating without manual intervention.
        </p>
      </div>

      {/* Data Collection Layer */}
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
          Data Collection Layer
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "24px"
        }}>
          {[
            { source: "StockTwits", data: "Trending tickers, sentiment ratios, message volume" },
            { source: "Reddit", data: "WSB, stocks, options subreddits with sentiment analysis" },
            { source: "Alpha Vantage", data: "News articles with ticker-specific sentiment scores" },
            { source: "Alpaca Markets", data: "Real-time quotes, OHLCV data, options chains with Greeks" },
            { source: "Dark Pool Scanner", data: "Block trades, institutional accumulation patterns" },
            { source: "SEC EDGAR", data: "8-K filings, Form 4 insider transaction tracking" },
            { source: "Yahoo Finance", data: "VIX levels, sector ETF performance data" },
            { source: "FRED", data: "Put/Call ratio, credit spreads, yield curve dynamics" },
            { source: "Finviz", data: "Technical screener data, momentum indicators" },
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: "28px",
              backgroundColor: "#0F0F0F",
              borderLeft: "1px solid #1C1C1C"
            }}>
              <h3 style={{ 
                fontSize: "16px", 
                fontWeight: 500,
                color: "#FAFAF8",
                marginBottom: "12px",
                letterSpacing: "0.02em"
              }}>
                {item.source}
              </h3>
              <p style={{ 
                fontSize: "14px", 
                color: "#71706E",
                lineHeight: 1.6
              }}>
                {item.data}
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
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            border: "1px solid #1C1C1C",
            borderRadius: "2px",
            overflow: "hidden",
            backgroundColor: "#000000"
          }}>
            <Image 
              src="/images/tphoto2.png" 
              alt="Trade69 Analytics"
              width={600}
              height={400}
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block",
                opacity: 0.98
              }}
            />
          </div>
          <div style={{ 
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            border: "1px solid #1C1C1C",
            borderRadius: "2px",
            overflow: "hidden",
            backgroundColor: "#000000"
          }}>
            <Image 
              src="/images/tphoto3.png" 
              alt="Trade69 Backtesting"
              width={600}
              height={400}
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block",
                opacity: 0.98
              }}
            />
          </div>
        </div>
      </div>

      {/* Intelligence Layer */}
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
          Intelligence Layer
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {[
            {
              title: "Signal Detection",
              desc: "AdvancedSignalDetectorV2 with composite scoring (0-100). Combines social sentiment, options flow, dark pool activity, and technical indicators into unified signals."
            },
            {
              title: "Market Regime Detection",
              desc: "Hidden Markov Model with VIX, sector breadth, put/call ratio, credit spreads. Identifies BULL, BEAR, NEUTRAL states for adaptive strategy selection."
            },
            {
              title: "Machine Learning",
              desc: "Random Forest classifier with 25 features: signal metrics, temporal patterns, Greeks (delta/gamma/theta/vega/IV), liquidity (OI/volume/spread), regime state."
            },
            {
              title: "Risk Management",
              desc: "Kelly Criterion position sizing (1/4 Kelly, 2% max per position, 20% portfolio heat). Sector concentration limits (30% max), correlation tracking (>0.70 threshold)."
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

      {/* LLM Middleware */}
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
            LLM Middleware
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
            AI Manager V4 with GPT-4 integration. Natural language to SQL translation. Schema-aware query generation with validation.
          </p>
          <div style={{ 
            backgroundColor: "#0A0A0A",
            padding: "clamp(20px, 3vw, 28px)",
            borderRadius: "2px",
            border: "1px solid #1C1C1C",
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            <code style={{ 
              fontSize: "clamp(13px, 1.8vw, 15px)", 
              color: "#B8B7B3",
              fontFamily: "Monaco, Courier, monospace",
              lineHeight: 1.8,
              display: "block"
            }}>
              "Show me top 5 signals from last week with win rate above 60%"
            </code>
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
          Python 3.10+ · PostgreSQL 14+ · TimescaleDB · Redis · scikit-learn · hmmlearn · Dash · Plotly · Alpaca API · ThetaData · OpenAI GPT-4 · PRAW
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
          <Link href="/work" style={{ 
            fontSize: "13px", 
            color: "#71706E", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            ← All Work
          </Link>
          <Link href="/work/megaagent" style={{ 
            fontSize: "13px", 
            color: "#71706E", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            Next: MegaAgent →
          </Link>
        </div>
      </div>

    </div>
  );
}
