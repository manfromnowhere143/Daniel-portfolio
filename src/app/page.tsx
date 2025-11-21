import Link from "next/link";

export default function Home() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section */}
      <section style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "80px 40px",
        textAlign: "center"
      }}>
        <p style={{ 
          fontSize: "12px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "24px"
        }}>
          Autonomous Systems Engineer
        </p>
        
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(40px, 6vw, 72px)", 
          fontWeight: 400,
          color: "#1C1C1C",
          lineHeight: 1.1,
          marginBottom: "32px"
        }}>
          Building systems that<br />think for themselves
        </h1>
        
        <p style={{ 
          fontSize: "18px", 
          color: "#71706E", 
          maxWidth: "600px", 
          margin: "0 auto 48px",
          lineHeight: 1.8
        }}>
          I design and build autonomous software — algorithmic trading platforms, 
          multi-agent orchestrators, and intelligent decision engines.
        </p>
        
        <Link href="/work" style={{
          display: "inline-block",
          fontSize: "13px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#1C1C1C",
          borderBottom: "1px solid #1C1C1C",
          paddingBottom: "8px"
        }}>
          View Selected Work
        </Link>
      </section>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "#E0DED6", maxWidth: "1000px", margin: "0 auto" }} />

      {/* Philosophy Section */}
      <section style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "80px 40px",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "60px"
      }}>
        <div>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "32px", 
            fontWeight: 400,
            color: "#1C1C1C"
          }}>
            Philosophy
          </h2>
        </div>
        <div>
          <p style={{ fontSize: "17px", color: "#71706E", lineHeight: 1.9, marginBottom: "24px" }}>
            Every system I build is designed to operate without constant human oversight. 
            Not automation for the sake of convenience, but true autonomy — software that 
            can adapt, decide, and execute in real-time.
          </p>
          <p style={{ fontSize: "17px", color: "#71706E", lineHeight: 1.9 }}>
            From options trading algorithms processing market signals to multi-agent 
            systems coordinating complex workflows, the goal is always the same: 
            intelligence that scales.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "#E0DED6", maxWidth: "1000px", margin: "0 auto" }} />

      {/* Projects Section */}
      <section style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "80px 40px"
      }}>
        <p style={{ 
          fontSize: "12px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "16px"
        }}>
          Selected Work
        </p>
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "32px", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "48px"
        }}>
          Recent Projects
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(2, 1fr)", 
          gap: "24px" 
        }}>
          <Link href="/work/trade69" style={{
            display: "block",
            padding: "40px",
            backgroundColor: "#F2F1ED",
            textDecoration: "none"
          }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "16px" }}>
              Algorithmic Trading
            </p>
            <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1C1C1C", marginBottom: "12px" }}>
              Trade69
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.7 }}>
              Options trading platform combining ML, sentiment analysis, and real-time market data.
            </p>
          </Link>

          <Link href="/work/megaagent" style={{
            display: "block",
            padding: "40px",
            backgroundColor: "#F2F1ED",
            textDecoration: "none"
          }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "16px" }}>
              Autonomous Systems
            </p>
            <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1C1C1C", marginBottom: "12px" }}>
              MegaAgent
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.7 }}>
              Autonomous opportunity engine that identifies and executes on emerging possibilities.
            </p>
          </Link>

          <Link href="/work/octopus" style={{
            display: "block",
            padding: "40px",
            backgroundColor: "#F2F1ED",
            textDecoration: "none"
          }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "16px" }}>
              Multi-Agent Systems
            </p>
            <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1C1C1C", marginBottom: "12px" }}>
              Octopus
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.7 }}>
              Multi-agent orchestrator coordinating specialized AI agents.
            </p>
          </Link>

          <Link href="/work/overmind" style={{
            display: "block",
            padding: "40px",
            backgroundColor: "#F2F1ED",
            textDecoration: "none"
          }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "16px" }}>
              Blockchain
            </p>
            <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1C1C1C", marginBottom: "12px" }}>
              Overmind
            </h3>
            <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.7 }}>
              Cryptocurrency exploring decentralized autonomous systems.
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "60px 40px",
        borderTop: "1px solid #E0DED6",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div>
          <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "20px", color: "#1C1C1C" }}>Daniel Dahan</p>
          <p style={{ fontSize: "13px", color: "#71706E", marginTop: "4px" }}>Autonomous Systems Engineer</p>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          <a href="mailto:daniel@example.com" style={{ fontSize: "13px", color: "#71706E" }}>Email</a>
          <a href="https://github.com" target="_blank" style={{ fontSize: "13px", color: "#71706E" }}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}
