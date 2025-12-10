import Link from "next/link";
import FadeImage from "@/components/FadeImage";

export default function Overmind() {
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
          Overmind
        </h1>

        {/* Hero Image */}
        <div style={{ 
          maxWidth: "500px",
          margin: "0 auto",
          boxShadow: "0 30px 80px rgba(255,255,255,0.08)",
          border: "1px solid #1C1C1C",
          borderRadius: "2px",
          overflow: "hidden",
          backgroundColor: "#FAFAF8"
        }}>
          <FadeImage 
            src="/images/twinkle.png" 
            alt="Overmind"
            width={500} aspectRatio={500/350}
            height={350}
            priority
          />
        </div>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginTop: "clamp(24px, 4vh, 32px)"
        }}>
          Blockchain
        </p>
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
          I built this token mainly to learn how to interact with smart contracts and how to deploy one on the blockchain. It was one of my first experiments, sometime around June 2025, and the whole thing took me about two days.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          The principles were simple. I followed the Satori pattern: deploy the contract, renounce ownership, and burn the liquidity pool. I had an $80 budget for the entire project, so the full amount was used to create the liquidity pool and then burn it.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          The first well-known meme token deployed in the Satori pattern was Ryoshis SHIB. Ryoshi wrote a few Medium posts, had a small Discord community, shared the philosophy, and then disappeared about six months after SHIB launched. That story is what inspired me to try it myself.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 300
        }}>
          The token I made is nothing serious, just a meme token, a simple smart contract deployed on Solana and BNB Smart Chain because of the low fees. But for me, it was an important step in learning blockchain deployments, smart-contract interaction, and the whole process end to end.
        </p>
      </div>

      {/* Technical Section */}
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
          marginBottom: "clamp(24px, 4vh, 32px)"
        }}>
          Implementation
        </p>

        <div style={{ 
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "clamp(40px, 6vh, 56px)"
        }}>
          {[
            "Solana", "BNB Smart Chain", "SPL Token", "React", "Surge"
          ].map((item, i) => (
            <span key={i} style={{ 
              fontSize: "12px",
              color: "#FAFAF8",
              padding: "8px 16px",
              border: "1px solid #2A2A28",
              borderRadius: "2px"
            }}>
              {item}
            </span>
          ))}
        </div>

        {/* Visit Button */}
        <a 
          href="https://overmind.surge.sh" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: "inline-block",
            padding: "14px 40px",
            backgroundColor: "#FAFAF8",
            color: "#0A0A0A",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none"
          }}
        >
          Visit Overmind
        </a>
      </div>

      {/* Quote Section */}
      <div style={{ 
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(60px, 10vh, 80px) 24px",
        textAlign: "center"
      }}>
        <p style={{ 
          fontSize: "13px", 
          fontWeight: 200,
          color: "#FAFAF8",
          lineHeight: 1.7,
          marginBottom: "clamp(16px, 3vh, 24px)",
          letterSpacing: "0.15em"
        }}>
          "Second star to the right, and straight on till morning."
        </p>
        <p style={{ 
          fontSize: "11px", 
          color: "#FAFAF8", 
          letterSpacing: "0.15em",
          textTransform: "uppercase"
        }}>
          Peter Pan
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
          <Link href="/work/octopus" style={{ 
            fontSize: "12px", 
            color: "#FAFAF8", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            Octopus
          </Link>
          <Link href="/work" style={{ 
            fontSize: "12px", 
            color: "#FAFAF8", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            All Work
          </Link>
        </div>
      </div>

    </div>
  );
}
