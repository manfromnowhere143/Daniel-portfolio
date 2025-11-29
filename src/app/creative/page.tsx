import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Work | Daniel Wahnich",
  description: "Abstract visual explorations in texture, form, and layered complexity by Daniel Wahnich.",
};

export default function Creative() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "80px 24px",
        textAlign: "center"
      }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.3em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "20px"
        }}>
          Visual Studies
        </p>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(40px, 8vw, 56px)", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "24px"
        }}>
          Creative Work
        </h1>
        <p style={{ 
          fontSize: "16px", 
          color: "#71706E",
          maxWidth: "500px",
          margin: "0 auto",
          lineHeight: 1.8
        }}>
          Abstract explorations in texture, form, and layered complexity. 
          The same principles that make systems interesting make images interesting.
        </p>
      </div>

      {/* Gallery - Stacked Layout */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          
          <div style={{ 
            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
            overflow: "hidden"
          }}>
            <Image 
              src="/images/art3.jpg" 
              alt="Abstract Study I"
              width={800}
              height={1100}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div style={{ 
            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
            overflow: "hidden"
          }}>
            <Image 
              src="/images/art2.JPEG" 
              alt="Abstract Study II"
              width={800}
              height={800}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div style={{ 
            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
            overflow: "hidden"
          }}>
            <Image 
              src="/images/art1.JPEG" 
              alt="Abstract Study III"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

        </div>
      </div>

      {/* Quote */}
      <div style={{ 
        backgroundColor: "#1C1C1C",
        padding: "80px 24px"
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontStyle: "italic",
            color: "#FAFAF8",
            lineHeight: 1.6
          }}>
            "Complexity emerging from simple rules. Order from chaos. 
            The space between intention and accident."
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center"
        }}>
          <Link href="/" style={{ fontSize: "13px", color: "#71706E", textDecoration: "none" }}>
            ← Back to About
          </Link>
        </div>
      </div>

    </div>
  );
}
