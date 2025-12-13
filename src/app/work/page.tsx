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

  const iconSize = isMobile ? 85 : 160;

  return (
    <>
      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 260px;
          margin: 0 auto;
        }
        
        .work-item {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          width: 110px;
          height: 110px;
          margin: 0 auto;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
        }
        
        .work-item:active {
          transform: scale(0.95);
        }
        
        /* Trade69 - Soft emerald/teal */
        .work-item.trade69 {
          background: linear-gradient(145deg, rgba(16, 78, 70, 0.9), rgba(13, 55, 52, 0.95));
          box-shadow: 0 4px 20px rgba(16, 78, 70, 0.4);
          border: 1px solid rgba(94, 234, 212, 0.15);
        }
        
        /* MegaAgent - Soft violet/purple */
        .work-item.megaagent {
          background: linear-gradient(145deg, rgba(76, 46, 112, 0.9), rgba(55, 32, 85, 0.95));
          box-shadow: 0 4px 20px rgba(76, 46, 112, 0.4);
          border: 1px solid rgba(192, 132, 252, 0.15);
        }
        
        /* Octopus - Soft cyan/ocean */
        .work-item.octopus {
          background: linear-gradient(145deg, rgba(22, 78, 99, 0.9), rgba(14, 55, 75, 0.95));
          box-shadow: 0 4px 20px rgba(22, 78, 99, 0.4);
          border: 1px solid rgba(103, 232, 249, 0.15);
        }
        
        /* Overmind - Soft amber/gold */
        .work-item.overmind {
          background: linear-gradient(145deg, rgba(120, 75, 20, 0.9), rgba(92, 55, 12, 0.95));
          box-shadow: 0 4px 20px rgba(120, 75, 20, 0.4);
          border: 1px solid rgba(252, 211, 77, 0.15);
        }
        
        @media (min-width: 600px) {
          .work-grid {
            gap: 28px;
            max-width: 500px;
          }
          
          .work-item {
            width: 200px;
            height: 200px;
            border-radius: 32px;
          }
          
          .work-item:hover {
            transform: scale(1.05);
          }
          
          .work-item.trade69:hover {
            box-shadow: 0 8px 32px rgba(16, 78, 70, 0.6);
          }
          
          .work-item.megaagent:hover {
            box-shadow: 0 8px 32px rgba(76, 46, 112, 0.6);
          }
          
          .work-item.octopus:hover {
            box-shadow: 0 8px 32px rgba(22, 78, 99, 0.6);
          }
          
          .work-item.overmind:hover {
            box-shadow: 0 8px 32px rgba(120, 75, 20, 0.6);
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
          <Link href="/work/trade69" className="work-item trade69">
            <Trade69Icon3D size={iconSize} />
          </Link>
          <Link href="/work/megaagent" className="work-item megaagent">
            <MegaAgentIcon3D size={iconSize} />
          </Link>
          <Link href="/work/octopus" className="work-item octopus">
            <OctopusIcon3D size={iconSize} />
          </Link>
          <Link href="/work/overmind" className="work-item overmind">
            <OvermindIcon3D size={iconSize} />
          </Link>
        </div>
      </div>
    </>
  );
}