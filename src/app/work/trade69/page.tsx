import Link from "next/link";

export default function Trade69() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>
        
        {/* Back Link */}
        <Link href="/work" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          color: "#71706E",
          textDecoration: "none",
          marginBottom: "60px"
        }}>
          ← Back to Work
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <p style={{ 
            fontSize: "12px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            Algorithmic Trading
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "52px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "24px"
          }}>
            Trade69
          </h1>
          <p style={{ 
            fontSize: "19px", 
            color: "#71706E", 
            lineHeight: 1.8,
            maxWidth: "700px"
          }}>
            A comprehensive options trading platform combining machine learning, 
            sentiment analysis, and real-time market data for autonomous trading decisions.
          </p>
        </div>

        {/* Meta Info */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "32px",
          padding: "32px 0",
          borderTop: "1px solid #E0DED6",
          borderBottom: "1px solid #E0DED6",
          marginBottom: "60px"
        }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Year</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>2024</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Type</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Trading Platform</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Status</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Active</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Stack</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Python, PostgreSQL</p>
          </div>
        </div>

        {/* Content Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          
          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "20px"
            }}>
              The Problem
            </h2>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              Options trading requires processing vast amounts of data in real-time. Human traders 
              cannot consistently synthesize market prices, volatility, sentiment signals, and 
              technical indicators quickly enough to capture short-lived opportunities.
            </p>
          </section>

          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "20px"
            }}>
              Approach
            </h2>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              Trade69 is an end-to-end autonomous trading system. It continuously ingests sentiment 
              data from Reddit and StockTwits, combines it with technical indicators and real options 
              pricing from ThetaData, runs predictions through trained ML models, and executes through 
              Alpaca API — all without manual intervention.
            </p>
          </section>

          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "24px"
            }}>
              Architecture
            </h2>
            <div style={{ backgroundColor: "#F2F1ED", padding: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Data Layer</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>PostgreSQL with TimescaleDB for time-series storage</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Signals</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>RSI, MACD, Bollinger Bands, sentiment aggregation</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>ML Models</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Gradient boosting classifiers, 85%+ accuracy on filtered signals</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Execution</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Alpaca API with Kelly Criterion position sizing</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Interface</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Dash dashboard for monitoring, backtesting, and configuration</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "24px"
            }}>
              Technology
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {["Python", "PostgreSQL", "ThetaData", "Alpaca API", "Dash", "scikit-learn", "pandas", "Redis"].map((tech) => (
                <span key={tech} style={{ 
                  padding: "10px 20px", 
                  backgroundColor: "#F2F1ED", 
                  fontSize: "13px", 
                  color: "#1C1C1C" 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>

        {/* Navigation */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginTop: "80px",
          paddingTop: "32px",
          borderTop: "1px solid #E0DED6"
        }}>
          <Link href="/work" style={{ fontSize: "14px", color: "#71706E", textDecoration: "none" }}>
            All Projects
          </Link>
          <Link href="/work/megaagent" style={{ fontSize: "14px", color: "#1C1C1C", textDecoration: "none" }}>
            Next: MegaAgent →
          </Link>
        </div>

      </div>
    </div>
  );
}
