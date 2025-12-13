"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Trade69Icon3D, MegaAgentIcon3D, OctopusIcon3D, OvermindIcon3D } from "@/components/WorkIcons";

export default function Work() {
  const [isMobile, setIsMobile] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    // Small delay for smooth entrance
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Larger icons - fill more of the container like iOS
  const iconSize = isMobile ? 100 : 180;

  return (
    <>
      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          max-width: 260px;
          margin: 0 auto;
        }
        
        .work-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          width: 115px;
          height: 115px;
          margin: 0 auto;
          transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 0.25s ease, 
                      opacity 0.4s ease;
          text-decoration: none;
          opacity: 0;
          overflow: hidden;
        }
        
        /* Premium inner lighting effect */
        .work-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(255, 255, 255, 0.04) 40%,
            transparent 100%
          );
          border-radius: 24px 24px 50% 50%;
          pointer-events: none;
          z-index: 1;
        }
        
        /* Subtle bottom shadow for depth */
        .work-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(
            0deg, 
            rgba(0, 0, 0, 0.25) 0%, 
            transparent 100%
          );
          border-radius: 0 0 24px 24px;
          pointer-events: none;
          z-index: 1;
        }
        
        .work-item.loaded {
          opacity: 1;
        }
        
        .work-item:active {
          transform: scale(0.92);
        }
        
        /* Trade69 - Premium emerald */
        .work-item.trade69 {
          background: 
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(94, 234, 212, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(20, 95, 85, 0.95) 0%, rgba(10, 60, 55, 0.98) 100%);
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 8px 24px rgba(16, 78, 70, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(94, 234, 212, 0.2);
        }
        
        /* MegaAgent - Premium violet */
        .work-item.megaagent {
          background: 
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(192, 132, 252, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(88, 55, 130, 0.95) 0%, rgba(45, 28, 75, 0.98) 100%);
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 8px 24px rgba(76, 46, 112, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(192, 132, 252, 0.2);
        }
        
        /* Octopus - Premium cyan */
        .work-item.octopus {
          background: 
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(103, 232, 249, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(28, 95, 120, 0.95) 0%, rgba(12, 50, 70, 0.98) 100%);
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 8px 24px rgba(22, 78, 99, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(103, 232, 249, 0.2);
        }
        
        /* Overmind - Premium amber */
        .work-item.overmind {
          background: 
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(252, 211, 77, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(140, 90, 25, 0.95) 0%, rgba(80, 50, 10, 0.98) 100%);
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 8px 24px rgba(120, 75, 20, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(252, 211, 77, 0.2);
        }
        
        /* Icon wrapper for z-index above lighting effects */
        .work-item > * {
          position: relative;
          z-index: 2;
        }
        
        @media (min-width: 600px) {
          .work-grid {
            gap: 32px;
            max-width: 480px;
          }
          
          .work-item {
            width: 200px;
            height: 200px;
            border-radius: 40px;
          }
          
          .work-item::before {
            border-radius: 40px 40px 50% 50%;
          }
          
          .work-item::after {
            border-radius: 0 0 40px 40px;
          }
          
          .work-item:hover {
            transform: scale(1.04) translateY(-2px);
          }
          
          .work-item.trade69:hover {
            box-shadow: 
              0 4px 8px rgba(0, 0, 0, 0.15),
              0 16px 48px rgba(16, 78, 70, 0.6),
              0 0 40px rgba(94, 234, 212, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .work-item.megaagent:hover {
            box-shadow: 
              0 4px 8px rgba(0, 0, 0, 0.15),
              0 16px 48px rgba(76, 46, 112, 0.6),
              0 0 40px rgba(192, 132, 252, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .work-item.octopus:hover {
            box-shadow: 
              0 4px 8px rgba(0, 0, 0, 0.15),
              0 16px 48px rgba(22, 78, 99, 0.6),
              0 0 40px rgba(103, 232, 249, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .work-item.overmind:hover {
            box-shadow: 
              0 4px 8px rgba(0, 0, 0, 0.15),
              0 16px 48px rgba(120, 75, 20, 0.6),
              0 0 40px rgba(252, 211, 77, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -2px 4px rgba(0, 0, 0, 0.1);
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
          <Link href="/work/trade69" className={`work-item trade69 ${isLoaded ? 'loaded' : ''}`}>
            <Trade69Icon3D size={iconSize} />
          </Link>
          <Link href="/work/megaagent" className={`work-item megaagent ${isLoaded ? 'loaded' : ''}`}>
            <MegaAgentIcon3D size={iconSize} />
          </Link>
          <Link href="/work/octopus" className={`work-item octopus ${isLoaded ? 'loaded' : ''}`}>
            <OctopusIcon3D size={iconSize} />
          </Link>
          <Link href="/work/overmind" className={`work-item overmind ${isLoaded ? 'loaded' : ''}`}>
            <OvermindIcon3D size={iconSize} />
          </Link>
        </div>
      </div>
    </>
  );
}