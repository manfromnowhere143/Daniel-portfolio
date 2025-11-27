import Link from "next/link";

export default function Home() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section */}
      <section style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "60px 24px 80px",
        textAlign: "center"
      }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.25em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "24px"
        }}>
          Autonomous Systems
        </p>
        
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(28px, 6vw, 48px)", 
          fontWeight: 400,
          color: "#1C1C1C",
          lineHeight: 1.3,
          marginBottom: "24px"
        }}>
          Architecting intelligence<br />that operates independently
        </h1>
        
        <p style={{ 
          fontSize: "15px", 
          color: "#71706E", 
          maxWidth: "480px", 
          margin: "0 auto 36px",
          lineHeight: 1.9,
          padding: "0 16px"
        }}>
          Algorithmic trading. Multi-agent orchestration. 
          Systems that adapt, decide, and execute.
        </p>
        
        <Link href="/work" style={{
          display: "inline-block",
          fontSize: "12px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#1C1C1C",
          borderBottom: "1px solid #1C1C1C",
          paddingBottom: "6px"
        }}>
          View Work
        </Link>
      </section>

      {/* Philosophy Section */}
      <section style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "60px 24px"
      }}>
        <div style={{ maxWidth: "600px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "22px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "20px"
          }}>
            Approach
          </h2>
          <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.9 }}>
            True autonomy, not automation. Software that observes, learns, 
            and acts without waiting for permission. From market signals to 
            multi-agent workflows, every system is built to scale intelligence.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "60px 24px"
      }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "12px",
          textAlign: "center"
        }}>
          Selected Work
        </p>
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "26px", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "40px",
          textAlign: "center"
        }}>
          Recent Projects
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "16px" 
        }}>
          <Link href="/work/trade69" style={{
            display: "block",
            padding: "32px",
            backgroundColor: "#F2F1ED",
            textDecoration: "none"
          }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "12px" }}>
              Algorithmic Trading
            </p>
            <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "22px", fontWeight: 400, color: "#1C1C1C", marginBottom: "8px" }}>
              Trade69
            </h3>
            <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.7 }}>
              ML-driven options trading with sentiment analysis.
            </p>
          </Link>

          <Link href="/work/megaagent" style={{
            display: "block",
            padding: "32px",
            backgroundColor: "#F2F1ED",
            textDecoration: "none"
          }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "12px" }}>
              Autonomous Systems
            </p>
            <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "22px", fontWeight: 400, color: "#1C1C1C", marginBottom: "8px" }}>
              MegaAgent
            </h3>
            <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.7 }}>
              Opportunity engine that acts without intervention.
            </p>
          </Link>

          <Link href="/work/octopus" style={{
            display: "block",
            padding: "32px",
            backgroundColor: "#F2F1ED",
            textDecoration: "none"
          }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "12px" }}>
              Multi-Agent
            </p>
            <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "22px", fontWeight: 400, color: "#1C1C1C", marginBottom: "8px" }}>
              Octopus
            </h3>
            <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.7 }}>
              Orchestrating specialized agents for complex tasks.
            </p>
          </Link>

          <Link href="/work/overmind" style={{
            display: "block",
            padding: "32px",
            backgroundColor: "#F2F1ED",
            textDecoration: "none"
          }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "12px" }}>
              Blockchain
            </p>
            <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "22px", fontWeight: 400, color: "#1C1C1C", marginBottom: "8px" }}>
              Overmind
            </h3>
            <p style={{ fontSize: "14px", color: "#71706E", lineHeight: 1.7 }}>
              Decentralized systems with philosophical roots.
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "40px 24px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px"
      }}>
        <div>
          <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "18px", color: "#1C1C1C" }}>Daniel Wahnich</p>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="mailto:daniel@example.com" style={{ fontSize: "12px", color: "#71706E" }}>Email</a>
          <a href="https://github.com" target="_blank" style={{ fontSize: "12px", color: "#71706E" }}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}
