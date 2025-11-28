import Link from "next/link";
import Image from "next/image";

export default function Trade69() {
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
            Algorithmic Trading Intelligence
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(40px, 10vw, 72px)", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px",
            lineHeight: 1.1
          }}>
            Trade69
          </h1>
          <p style={{ 
            fontSize: "17px", 
            color: "#A0A0A0", 
            lineHeight: 1.8,
            maxWidth: "540px",
            margin: "0 auto"
          }}>
            End-to-end algorithmic trading platform integrating multi-source market intelligence, 
            machine learning, and quantitative risk management.
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
            src="/images/tphoto1.png" 
            alt="Trade69 Dashboard"
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
            { value: "245", label: "Python Files" },
            { value: "32K+", label: "Lines of Code" },
            { value: "11", label: "Data Sources" },
            { value: "36", label: "Database Tables" },
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
            A comprehensive trading system that aggregates data from social sentiment, 
            news APIs, dark pool activity, and market data to generate autonomous trading signals.
          </p>
          <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.9 }}>
            The system employs Hidden Markov Models for market regime detection, 
            Random Forest classifiers for signal prediction, and Kelly Criterion 
            for position sizing. All operating without manual intervention.
          </p>
        </div>
      </div>

      {/* Data Sources Section */}
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
            Data Collection Layer
          </p>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "32px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "48px",
            textAlign: "center"
          }}>
            11 Integrated Sources
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
            gap: "16px" 
          }}>
            {[
              { source: "StockTwits", data: "Trending tickers, sentiment ratios, message volume" },
              { source: "Reddit", data: "WSB, stocks, options subreddits with sentiment" },
              { source: "Alpha Vantage", data: "News articles with ticker-specific sentiment" },
              { source: "Alpaca Markets", data: "Real-time quotes, OHLCV, options chains with Greeks" },
              { source: "Dark Pool Scanner", data: "Block trades, institutional accumulation scores" },
              { source: "SEC EDGAR", data: "8-K filings, Form 4 insider transactions" },
              { source: "Yahoo Finance", data: "VIX, sector ETF data" },
              { source: "FRED", data: "Put/Call ratio, credit spreads, yield curve" },
              { source: "Finviz", data: "Technical screener data" },
            ].map((item, i) => (
              <div key={i} style={{ 
                padding: "24px",
                backgroundColor: "#FAFAF8"
              }}>
                <p style={{ fontSize: "15px", color: "#1C1C1C", marginBottom: "8px", fontWeight: 500 }}>
                  {item.source}
                </p>
                <p style={{ fontSize: "13px", color: "#71706E", lineHeight: 1.6 }}>
                  {item.data}
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
              src="/images/tphoto2.png" 
              alt="Trade69 Analytics"
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
              src="/images/tphoto3.png" 
              alt="Trade69 Backtesting"
              width={450}
              height={300}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* Intelligence Layer */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "12px"
        }}>
          Intelligence Layer
        </p>
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "32px", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "40px"
        }}>
          Core Systems
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Signal Detection
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              AdvancedSignalDetectorV2 fuses sentiment analysis from StockTwits and Reddit, 
              news sentiment from Alpha Vantage, technical breakouts, real options data with Greeks, 
              and dark pool activity. Outputs composite scores from 0-100 for CALL, PUT, LONG, and SHORT signals.
            </p>
          </div>

          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Market Regime Detection
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Hidden Markov Model implementation with leading indicators: real VIX from Yahoo Finance, 
              sector breadth (% of ETFs above 50-day MA), Put/Call ratio from CBOE, credit spreads (BAA-AAA), 
              SPY returns and volatility. Three states: BULL, BEAR, NEUTRAL.
            </p>
          </div>

          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Machine Learning
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Random Forest classifier with 25 features: signal metrics, temporal patterns (hour, day, DTE), 
              Greeks (delta, gamma, theta, vega, IV), liquidity metrics (OI, volume, spread), 
              pricing data, and regime indicators. Automatic training when threshold samples available.
            </p>
          </div>

          <div style={{ 
            padding: "32px",
            borderLeft: "2px solid #1C1C1C"
          }}>
            <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
              Risk Management
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
              Kelly Criterion position sizing using 1/4 Kelly for safety, capped at 2% max position. 
              Portfolio heat limit of 20%, sector concentration limits at 30%, correlation tracking 
              with 0.70 threshold. Black-Scholes pricing for options backtesting.
            </p>
          </div>

        </div>
      </div>

      {/* LLM Layer */}
      <div style={{ backgroundColor: "#1C1C1C", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "12px"
          }}>
            Natural Language Interface
          </p>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "32px", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px"
          }}>
            LLM Middleware
          </h2>
          <p style={{ fontSize: "15px", color: "#A0A0A0", lineHeight: 1.9, marginBottom: "32px" }}>
            AI Manager V4 provides natural language to SQL translation via GPT-4, 
            schema-aware query generation, and learning context integration.
          </p>
          <div style={{ 
            backgroundColor: "#2a2a2a",
            padding: "24px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#A0A0A0"
          }}>
            <p style={{ marginBottom: "8px", color: "#71706E" }}>Example queries:</p>
            <p>"Show me the top 10 signals from last week"</p>
            <p>"What's the win rate for Reddit-sourced signals?"</p>
            <p>"Compare CALL vs PUT performance"</p>
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
            "Python 3.10+", "PostgreSQL 14+", "TimescaleDB", "Redis", 
            "scikit-learn", "hmmlearn", "Dash", "Plotly",
            "Alpaca API", "ThetaData", "OpenAI GPT-4", "PRAW"
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

      {/* Navigation */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          paddingTop: "32px",
          borderTop: "1px solid #E0DED6"
        }}>
          <Link href="/work" style={{ fontSize: "13px", color: "#71706E", textDecoration: "none" }}>
            ← All Projects
          </Link>
          <Link href="/work/megaagent" style={{ fontSize: "13px", color: "#1C1C1C", textDecoration: "none" }}>
            Next: MegaAgent →
          </Link>
        </div>
      </div>

    </div>
  );
}
