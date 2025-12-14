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
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // MOBILE: Bigger icons since 3D is static - need more impact
  // Fill ~98% of container for maximum presence
  const iconSize = isMobile ? 88 : 145;

  const apps = [
    { id: 'trade69', name: 'Trade69', href: '/work/trade69', Icon: Trade69Icon3D },
    { id: 'megaagent', name: 'MegaAgent', href: '/work/megaagent', Icon: MegaAgentIcon3D },
    { id: 'octopus', name: 'Octopus', href: '/work/octopus', Icon: OctopusIcon3D },
    { id: 'overmind', name: 'Overmind', href: '/work/overmind', Icon: OvermindIcon3D },
  ];

  return (
    <>
      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 28px;
          max-width: 240px;
          margin: 0 auto;
          padding: 0 10px;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .app-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          width: 98px;
          height: 98px;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 0.3s ease,
                      opacity 0.5s ease;
          text-decoration: none;
          opacity: 0;
          transform: scale(0.8) translateY(20px);
          overflow: visible;
        }
        
        .app-icon.loaded {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        /* Staggered animation */
        .app-container:nth-child(1) .app-icon { transition-delay: 0ms; }
        .app-container:nth-child(2) .app-icon { transition-delay: 80ms; }
        .app-container:nth-child(3) .app-icon { transition-delay: 160ms; }
        .app-container:nth-child(4) .app-icon { transition-delay: 240ms; }
        
        /* Premium glass shine - top highlight */
        .app-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.22) 0%, 
            rgba(255, 255, 255, 0.08) 40%,
            transparent 100%
          );
          border-radius: 24px 24px 60% 60%;
          pointer-events: none;
          z-index: 3;
        }
        
        /* Inner glow overlay for depth */
        .app-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.08);
          pointer-events: none;
          z-index: 2;
        }
        
        .app-icon:active {
          transform: scale(0.92);
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* ALIVE MATTE COLORS WITH OUTER GLOW                         */
        /* ═══════════════════════════════════════════════════════════ */
        
        /* Trade69 - Emerald with glow */
        .app-icon.trade69 {
          background: linear-gradient(145deg, 
            #1f6b5e 0%, 
            #124a42 50%,
            #0a3530 100%);
          box-shadow: 
            0 0 25px rgba(94, 234, 212, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(18, 74, 66, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(94, 234, 212, 0.18);
        }
        
        /* MegaAgent - Violet with glow */
        .app-icon.megaagent {
          background: linear-gradient(145deg, 
            #6b4a8f 0%, 
            #4a2d70 50%,
            #351f52 100%);
          box-shadow: 
            0 0 25px rgba(192, 132, 252, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(74, 45, 112, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(192, 132, 252, 0.18);
        }
        
        /* Octopus - Cyan with glow */
        .app-icon.octopus {
          background: linear-gradient(145deg, 
            #1f6880 0%, 
            #124858 50%,
            #0a3340 100%);
          box-shadow: 
            0 0 25px rgba(103, 232, 249, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(18, 72, 88, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(103, 232, 249, 0.18);
        }
        
        /* Overmind - Gold with glow */
        .app-icon.overmind {
          background: linear-gradient(145deg, 
            #9a7228 0%, 
            #6b4f1a 50%,
            #4a3510 100%);
          box-shadow: 
            0 0 25px rgba(252, 211, 77, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(107, 79, 26, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(252, 211, 77, 0.18);
        }
        
        /* Icon wrapper - centered */
        .icon-wrapper {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* FLOATING GLOWING TEXT                                       */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-name {
          font-size: 12px;
          font-weight: 500;
          color: #FAFAF8;
          letter-spacing: 0.03em;
          text-align: center;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.4),
            0 0 20px rgba(255, 255, 255, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .app-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Color-matched text glow */
        .app-container:nth-child(1) .app-name {
          text-shadow: 
            0 0 12px rgba(94, 234, 212, 0.5),
            0 0 25px rgba(94, 234, 212, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(2) .app-name {
          text-shadow: 
            0 0 12px rgba(192, 132, 252, 0.5),
            0 0 25px rgba(192, 132, 252, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(3) .app-name {
          text-shadow: 
            0 0 12px rgba(103, 232, 249, 0.5),
            0 0 25px rgba(103, 232, 249, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(4) .app-name {
          text-shadow: 
            0 0 12px rgba(252, 211, 77, 0.5),
            0 0 25px rgba(252, 211, 77, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        /* Staggered name animation */
        .app-container:nth-child(1) .app-name { transition-delay: 150ms; }
        .app-container:nth-child(2) .app-name { transition-delay: 230ms; }
        .app-container:nth-child(3) .app-name { transition-delay: 310ms; }
        .app-container:nth-child(4) .app-name { transition-delay: 390ms; }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* DESKTOP STYLES                                              */
        /* ═══════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .work-grid {
            gap: 40px 36px;
            max-width: 420px;
          }
          
          .app-container {
            gap: 16px;
          }
          
          .app-icon {
            width: 165px;
            height: 165px;
            border-radius: 38px;
          }
          
          .app-icon::before {
            border-radius: 38px 38px 60% 60%;
          }
          
          .app-icon::after {
            border-radius: 38px;
          }
          
          .app-icon:hover {
            transform: scale(1.06) translateY(-6px);
          }
          
          .app-icon.trade69:hover {
            box-shadow: 
              0 0 40px rgba(94, 234, 212, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(18, 74, 66, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.megaagent:hover {
            box-shadow: 
              0 0 40px rgba(192, 132, 252, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(74, 45, 112, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.octopus:hover {
            box-shadow: 
              0 0 40px rgba(103, 232, 249, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(18, 72, 88, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.overmind:hover {
            box-shadow: 
              0 0 40px rgba(252, 211, 77, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(107, 79, 26, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-name {
            font-size: 14px;
            font-weight: 500;
          }
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(100px, 15vh, 160px)",
        paddingBottom: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        <div className="work-grid">
          {apps.map((app) => (
            <div key={app.id} className="app-container">
              <Link href={app.href} className={`app-icon ${app.id} ${isLoaded ? 'loaded' : ''}`}>
                <div className="icon-wrapper">
                  <app.Icon size={iconSize} />
                </div>
              </Link>
              <span className={`app-name ${isLoaded ? 'loaded' : ''}`}>
                {app.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}