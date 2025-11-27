import Link from "next/link";
import Image from "next/image";

export default function Trade69() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section */}
      <div style={{ 
        width: "100%",
        backgroundColor: "#1C1C1C",
        padding: "60px 24px",
        marginBottom: "60px"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ 
            fontSize: "10px", 
            letterSpacing: "0.3em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            Algorithmic Trading Platform
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(36px, 10vw, 64px)", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px",
            lineHeight: 1.1
          }}>
            Trade69
          </h1>
          <p style={{ 
            fontSize: "16px", 
            color: "#A0A0A0", 
            lineHeight: 1.8,
            maxWidth: "500px"
          }}>
            Autonomous options trading powered by machine learning, 
            sentiment analysis, and real-time market intelligence.
          </p>
        </div>
      </div>

      {/* Main Hero Image */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "-40px auto 60px",
        padding: "0 24px"
      }}>
        <div style={{ 
          boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
          borderRadius: "6px",
          overflow: "hidden",
          border: "1px solid #E0DED6"
        }}>
          <Image 
            src="/images/tphoto1.png" 
            alt="Trade69 Dashboard"
            width={800}
            height={500}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Meta Info */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", 
          gap: "24px",
          padding: "32px 0",
          borderTop: "1px solid #E0DED6",
          borderBottom: "1px solid #E0DED6",
          marginBottom: "60px"
        }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Year</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>2025</p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Type</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Trading Platform</p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Status</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Active</p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Stack</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Python, PostgreSQL</p>
          </div>
        </div>

        {/* Problem & Approach */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: "40px",
          marginBottom: "60px"
        }}>
          <div>
            <h2 style={{ 
              fontSize: "12px", 
              fontWeight: 400,
              color: "#71706E",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "16px"
            }}>
              The Problem
            </h2>
            <p style={{ fontSize: "15px", color: "#1C1C1C", lineHeight: 1.9 }}>
              Options trading requires processing vast amounts of data in real-time. Human traders 
              cannot consistently synthesize market prices, volatility, sentiment signals, and 
              technical indicators quickly enough to capture short-lived opportunities.
            </p>
          </div>
          <div>
            <h2 style={{ 
              fontSize: "12px", 
              fontWeight: 400,
              color: "#71706E",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "16px"
            }}>
              The Approach
            </h2>
            <p style={{ fontSize: "15px", color: "#1C1C1C", lineHeight: 1.9 }}>
              An end-to-end autonomous system that ingests sentiment from Reddit and StockTwits, 
              combines it with technical indicators and real options pricing, runs ML predictions, 
              and executes via Alpaca without manual intervention.
            </p>
          </div>
        </div>

      </div>

      {/* Image Gallery */}
      <div style={{ 
        backgroundColor: "#F2F1ED",
        padding: "60px 24px"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}>
            <div style={{ 
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              borderRadius: "4px",
              overflow: "hidden"
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
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              borderRadius: "4px",
              overflow: "hidden"
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
      </div>

      {/* Architecture & Tech */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "28px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "12px"
          }}>
            Architecture
          </h2>
        </div>

        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1px",
          backgroundColor: "#E0DED6",
          border: "1px solid #E0DED6",
          marginBottom: "60px"
        }}>
          {[
            { title: "Data", desc: "PostgreSQL + TimescaleDB" },
            { title: "Signals", desc: "RSI, MACD, Sentiment" },
            { title: "ML", desc: "85%+ Accuracy" },
            { title: "Execution", desc: "Kelly Sizing" },
            { title: "Interface", desc: "Dash" },
          ].map((item, i) => (
            <div key={i} style={{ 
              backgroundColor: "#FAFAF8",
              padding: "24px 16px",
              textAlign: "center"
            }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>
                {item.title}
              </p>
              <p style={{ fontSize: "13px", color: "#1C1C1C" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#71706E", marginBottom: "20px" }}>
            Built With
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {["Python", "PostgreSQL", "ThetaData", "Alpaca", "Dash", "scikit-learn", "pandas", "Redis"].map((tech) => (
              <span key={tech} style={{ 
                padding: "10px 18px", 
                border: "1px solid #E0DED6",
                fontSize: "12px", 
                color: "#1C1C1C"
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
          marginTop: "80px",
          paddingTop: "24px",
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
