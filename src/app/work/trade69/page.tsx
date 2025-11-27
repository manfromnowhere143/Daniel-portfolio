import Link from "next/link";
import Image from "next/image";

export default function Trade69() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section - Full Width */}
      <div style={{ 
        width: "100%",
        backgroundColor: "#1C1C1C",
        padding: "80px 40px",
        marginBottom: "80px"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.3em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "20px"
          }}>
            Algorithmic Trading Platform
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(48px, 8vw, 80px)", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "32px",
            lineHeight: 1.1
          }}>
            Trade69
          </h1>
          <p style={{ 
            fontSize: "18px", 
            color: "#A0A0A0", 
            lineHeight: 1.8,
            maxWidth: "600px"
          }}>
            Autonomous options trading powered by machine learning, 
            sentiment analysis, and real-time market intelligence.
          </p>
        </div>
      </div>

      {/* Main Hero Image - Floating */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "-100px auto 80px",
        padding: "0 40px"
      }}>
        <div style={{ 
          boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #E0DED6"
        }}>
          <Image 
            src="/images/tphoto1.png" 
            alt="Trade69 Dashboard"
            width={1100}
            height={650}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>
        
        {/* Meta Info */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "32px",
          padding: "48px 0",
          borderTop: "1px solid #E0DED6",
          borderBottom: "1px solid #E0DED6",
          marginBottom: "80px"
        }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Year</p>
            <p style={{ fontSize: "16px", color: "#1C1C1C", fontWeight: 400 }}>2025</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Type</p>
            <p style={{ fontSize: "16px", color: "#1C1C1C", fontWeight: 400 }}>Trading Platform</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Status</p>
            <p style={{ fontSize: "16px", color: "#1C1C1C", fontWeight: 400 }}>Active</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Stack</p>
            <p style={{ fontSize: "16px", color: "#1C1C1C", fontWeight: 400 }}>Python, PostgreSQL</p>
          </div>
        </div>

        {/* Problem & Approach - Side by Side */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "60px",
          marginBottom: "100px"
        }}>
          <div>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "14px", 
              fontWeight: 400,
              color: "#71706E",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "20px"
            }}>
              The Problem
            </h2>
            <p style={{ fontSize: "16px", color: "#1C1C1C", lineHeight: 2 }}>
              Options trading requires processing vast amounts of data in real-time. Human traders 
              cannot consistently synthesize market prices, volatility, sentiment signals, and 
              technical indicators quickly enough to capture short-lived opportunities.
            </p>
          </div>
          <div>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "14px", 
              fontWeight: 400,
              color: "#71706E",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "20px"
            }}>
              The Approach
            </h2>
            <p style={{ fontSize: "16px", color: "#1C1C1C", lineHeight: 2 }}>
              An end-to-end autonomous system that ingests sentiment from Reddit and StockTwits, 
              combines it with technical indicators and real options pricing, runs ML predictions, 
              and executes via Alpaca — all without manual intervention.
            </p>
          </div>
        </div>

      </div>

      {/* Full Width Image Section */}
      <div style={{ 
        backgroundColor: "#F2F1ED",
        padding: "100px 40px"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px"
          }}>
            <div style={{ 
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              borderRadius: "6px",
              overflow: "hidden"
            }}>
              <Image 
                src="/images/tphoto2.png" 
                alt="Trade69 Analytics"
                width={540}
                height={380}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div style={{ 
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              borderRadius: "6px",
              overflow: "hidden"
            }}>
              <Image 
                src="/images/tphoto3.png" 
                alt="Trade69 Backtesting"
                width={540}
                height={380}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Section */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "100px 40px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "36px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "16px"
          }}>
            System Architecture
          </h2>
          <p style={{ fontSize: "16px", color: "#71706E" }}>
            Five integrated layers working in harmony
          </p>
        </div>

        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1px",
          backgroundColor: "#E0DED6",
          border: "1px solid #E0DED6"
        }}>
          {[
            { title: "Data Layer", desc: "PostgreSQL + TimescaleDB" },
            { title: "Signals", desc: "RSI, MACD, Sentiment" },
            { title: "ML Models", desc: "85%+ Accuracy" },
            { title: "Execution", desc: "Kelly Criterion Sizing" },
            { title: "Interface", desc: "Dash Dashboard" },
          ].map((item, i) => (
            <div key={i} style={{ 
              backgroundColor: "#FAFAF8",
              padding: "32px 20px",
              textAlign: "center"
            }}>
              <p style={{ 
                fontSize: "11px", 
                letterSpacing: "0.1em", 
                textTransform: "uppercase", 
                color: "#71706E",
                marginBottom: "8px"
              }}>
                {item.title}
              </p>
              <p style={{ fontSize: "14px", color: "#1C1C1C" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "24px"
          }}>
            Built With
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {["Python", "PostgreSQL", "ThetaData", "Alpaca API", "Dash", "scikit-learn", "pandas", "Redis"].map((tech) => (
              <span key={tech} style={{ 
                padding: "12px 24px", 
                border: "1px solid #E0DED6",
                fontSize: "13px", 
                color: "#1C1C1C",
                backgroundColor: "#FAFAF8"
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginTop: "100px",
          paddingTop: "32px",
          borderTop: "1px solid #E0DED6"
        }}>
          <Link href="/work" style={{ fontSize: "14px", color: "#71706E", textDecoration: "none" }}>
            ← All Projects
          </Link>
          <Link href="/work/megaagent" style={{ fontSize: "14px", color: "#1C1C1C", textDecoration: "none" }}>
            Next: MegaAgent →
          </Link>
        </div>

      </div>
    </div>
  );
}
