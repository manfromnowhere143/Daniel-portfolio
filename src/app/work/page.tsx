"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Trade69Icon3D, MegaAgentIcon3D, OctopusIcon3D, OvermindIcon3D } from "@/components/WorkIcons";

export default function Work() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const iconSize = isMobile ? 120 : 150;

  return (
    <>
      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 300px;
          margin: 0 auto;
        }
        .work-item {
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @media (min-width: 600px) {
          .work-grid {
            gap: 40px;
            max-width: 420px;
          }
          .work-item {
            padding: 16px;
          }
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(80px, 12vh, 140px)",
        paddingBottom: "60px",
        paddingLeft: "16px",
        paddingRight: "16px"
      }}>
        <div className="work-grid">
          <Link href="/work/trade69" className="work-item" style={{ textDecoration: 'none' }}>
            <Trade69Icon3D size={iconSize} />
          </Link>
          <Link href="/work/megaagent" className="work-item" style={{ textDecoration: 'none' }}>
            <MegaAgentIcon3D size={iconSize} />
          </Link>
          <Link href="/work/octopus" className="work-item" style={{ textDecoration: 'none' }}>
            <OctopusIcon3D size={iconSize} />
          </Link>
          <Link href="/work/overmind" className="work-item" style={{ textDecoration: 'none' }}>
            <OvermindIcon3D size={iconSize} />
          </Link>
        </div>
      </div>
    </>
  );
}