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

  // Slightly smaller but impactful - 90% fill
  const iconSize = isMobile ? 78 : 130;

  const apps = [
    { id: 'trade69', name: 'Trade69', href: '/work/trade69', Icon: Trade69Icon3D },
    { id: 'megaagent', name: 'MegaAgent', href: '/work/megaagent', Icon: MegaAgentIcon3D },
    { id: 'octopus', name: 'Octopus', href: '/work/octopus', Icon: OctopusIcon3D },
    { id: 'overmind', name: 'Overmind', href: '/work/overmind', Icon: OvermindIcon3D },
  ];

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - WORK PAGE                                */
        /* ═══════════════════════════════════════════════════════════ */
        
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px 32px;
          max-width: 260px;
          margin: 0 auto;
          padding: 0 10px;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - APP ICONS WITH ALIVE LIGHTING            */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          width: 88px;
          height: 88px;
          text-decoration: none;
          overflow: visible;
          /* Animation entry */
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(15px);
          transition: 
            transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), 
            box-shadow 0.4s ease,
            opacity 0.5s ease;
          /* GPU rendering - prevent flash */
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .app-icon.loaded {
          opacity: 1;
          transform: translateZ(0) scale(1) translateY(0);
        }
        
        /* Staggered animation */
        .app-container:nth-child(1) .app-icon { transition-delay: 0ms; }
        .app-container:nth-child(2) .app-icon { transition-delay: 60ms; }
        .app-container:nth-child(3) .app-icon { transition-delay: 120ms; }
        .app-container:nth-child(4) .app-icon { transition-delay: 180ms; }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - TOP SHINE REFLECTION                     */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 45%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.32) 0%, 
            rgba(255, 255, 255, 0.12) 40%,
            transparent 100%
          );
          border-radius: 22px 22px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        /* Inner depth glow */
        .app-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          box-shadow: 
            inset 0 0 25px rgba(255, 255, 255, 0.08),
            inset 0 -2px 10px rgba(0, 0, 0, 0.2);
          pointer-events: none;
          z-index: 2;
        }
        
        .app-icon:active {
          transform: translateZ(0) scale(0.92);
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - ALIVE MATTE COLORS WITH OUTER GLOW       */
        /* ═══════════════════════════════════════════════════════════ */
        
        /* Trade69 - Emerald - ALIVE */
        .app-icon.trade69 {
          background: linear-gradient(145deg, 
            #1a5c50 0%, 
            #0f3d38 50%,
            #082825 100%);
          box-shadow: 
            /* Outer ambient glow - alive effect */
            0 0 35px rgba(94, 234, 212, 0.25),
            0 0 15px rgba(94, 234, 212, 0.15),
            /* Floating shadow */
            0 8px 25px rgba(0, 0, 0, 0.45),
            0 15px 40px rgba(15, 61, 56, 0.4),
            /* Inner light */
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0 -2px 6px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(94, 234, 212, 0.15);
        }
        
        /* MegaAgent - Violet - ALIVE */
        .app-icon.megaagent {
          background: linear-gradient(145deg, 
            #5c3d7a 0%, 
            #3d2558 50%,
            #281840 100%);
          box-shadow: 
            0 0 35px rgba(192, 132, 252, 0.25),
            0 0 15px rgba(192, 132, 252, 0.15),
            0 8px 25px rgba(0, 0, 0, 0.45),
            0 15px 40px rgba(61, 37, 88, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0 -2px 6px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(192, 132, 252, 0.15);
        }
        
        /* Octopus - Cyan - ALIVE */
        .app-icon.octopus {
          background: linear-gradient(145deg, 
            #1a5a70 0%, 
            #0f3d4a 50%,
            #082830 100%);
          box-shadow: 
            0 0 35px rgba(103, 232, 249, 0.25),
            0 0 15px rgba(103, 232, 249, 0.15),
            0 8px 25px rgba(0, 0, 0, 0.45),
            0 15px 40px rgba(15, 61, 74, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0 -2px 6px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(103, 232, 249, 0.15);
        }
        
        /* Overmind - Gold - ALIVE */
        .app-icon.overmind {
          background: linear-gradient(145deg, 
            #8a6420 0%, 
            #5c4315 50%,
            #3d2d0d 100%);
          box-shadow: 
            0 0 35px rgba(252, 211, 77, 0.25),
            0 0 15px rgba(252, 211, 77, 0.15),
            0 8px 25px rgba(0, 0, 0, 0.45),
            0 15px 40px rgba(92, 67, 21, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0 -2px 6px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(252, 211, 77, 0.15);
        }
        
        /* Icon wrapper */
        .icon-wrapper {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
          /* 3D icon glow */
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - FLOATING GLOWING TEXT                    */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-name {
          font-size: 12px;
          font-weight: 400;
          color: #FAFAF8;
          letter-spacing: 0.02em;
          text-align: center;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.3),
            0 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        .app-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Color-matched text glow - ALIVE */
        .app-container:nth-child(1) .app-name {
          text-shadow: 
            0 0 15px rgba(94, 234, 212, 0.5),
            0 0 30px rgba(94, 234, 212, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        .app-container:nth-child(2) .app-name {
          text-shadow: 
            0 0 15px rgba(192, 132, 252, 0.5),
            0 0 30px rgba(192, 132, 252, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        .app-container:nth-child(3) .app-name {
          text-shadow: 
            0 0 15px rgba(103, 232, 249, 0.5),
            0 0 30px rgba(103, 232, 249, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        .app-container:nth-child(4) .app-name {
          text-shadow: 
            0 0 15px rgba(252, 211, 77, 0.5),
            0 0 30px rgba(252, 211, 77, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        /* Staggered name animation */
        .app-container:nth-child(1) .app-name { transition-delay: 100ms; }
        .app-container:nth-child(2) .app-name { transition-delay: 160ms; }
        .app-container:nth-child(3) .app-name { transition-delay: 220ms; }
        .app-container:nth-child(4) .app-name { transition-delay: 280ms; }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* DESKTOP STYLES                                              */
        /* ═══════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .work-grid {
            gap: 45px 40px;
            max-width: 400px;
          }
          
          .app-container {
            gap: 14px;
          }
          
          .app-icon {
            width: 150px;
            height: 150px;
            border-radius: 34px;
          }
          
          .app-icon::before {
            border-radius: 34px 34px 50% 50%;
          }
          
          .app-icon::after {
            border-radius: 34px;
          }
          
          /* Hover - ALIVE intensify */
          .app-icon:hover {
            transform: translateZ(0) scale(1.05) translateY(-5px);
          }
          
          .app-icon.trade69:hover {
            box-shadow: 
              0 0 50px rgba(94, 234, 212, 0.35),
              0 0 25px rgba(94, 234, 212, 0.2),
              0 12px 35px rgba(0, 0, 0, 0.35),
              0 25px 60px rgba(15, 61, 56, 0.5),
              inset 0 1px 1px rgba(255, 255, 255, 0.25),
              inset 0 -2px 6px rgba(0, 0, 0, 0.15);
          }
          
          .app-icon.megaagent:hover {
            box-shadow: 
              0 0 50px rgba(192, 132, 252, 0.35),
              0 0 25px rgba(192, 132, 252, 0.2),
              0 12px 35px rgba(0, 0, 0, 0.35),
              0 25px 60px rgba(61, 37, 88, 0.5),
              inset 0 1px 1px rgba(255, 255, 255, 0.25),
              inset 0 -2px 6px rgba(0, 0, 0, 0.15);
          }
          
          .app-icon.octopus:hover {
            box-shadow: 
              0 0 50px rgba(103, 232, 249, 0.35),
              0 0 25px rgba(103, 232, 249, 0.2),
              0 12px 35px rgba(0, 0, 0, 0.35),
              0 25px 60px rgba(15, 61, 74, 0.5),
              inset 0 1px 1px rgba(255, 255, 255, 0.25),
              inset 0 -2px 6px rgba(0, 0, 0, 0.15);
          }
          
          .app-icon.overmind:hover {
            box-shadow: 
              0 0 50px rgba(252, 211, 77, 0.35),
              0 0 25px rgba(252, 211, 77, 0.2),
              0 12px 35px rgba(0, 0, 0, 0.35),
              0 25px 60px rgba(92, 67, 21, 0.5),
              inset 0 1px 1px rgba(255, 255, 255, 0.25),
              inset 0 -2px 6px rgba(0, 0, 0, 0.15);
          }
          
          .app-name {
            font-size: 13px;
            font-weight: 400;
          }
        }
        
        @media (min-width: 900px) {
          .work-grid {
            gap: 50px 45px;
            max-width: 450px;
          }
          
          .app-icon {
            width: 170px;
            height: 170px;
            border-radius: 38px;
          }
          
          .app-icon::before {
            border-radius: 38px 38px 50% 50%;
          }
          
          .app-icon::after {
            border-radius: 38px;
          }
          
          .app-name {
            font-size: 14px;
          }
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(100px, 15vh, 160px)",
        paddingBottom: "100px",
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