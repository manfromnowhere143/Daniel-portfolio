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

  // Refined smaller icons
  const iconSize = isMobile ? 58 : 95;

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
        /* Refined elegance with subtle sophistication                 */
        /* ═══════════════════════════════════════════════════════════ */
        
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 28px;
          max-width: 240px;
          margin: 0 auto;
          padding: 0;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - ELEGANT APP ICONS                        */
        /* Refined, smaller, subtle lighting                           */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          width: 76px;
          height: 76px;
          text-decoration: none;
          overflow: visible;
          opacity: 0;
          transform: translateZ(0) scale(0.85) translateY(15px);
          transition: 
            transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), 
            box-shadow 0.4s ease,
            opacity 0.5s ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
          -webkit-tap-highlight-color: transparent;
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
        /* STATE OF THE ART - SUBTLE TOP SHINE                         */
        /* Refined, less aggressive reflection                         */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 42%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.22) 0%, 
            rgba(255, 255, 255, 0.06) 50%,
            transparent 100%
          );
          border-radius: 20px 20px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .app-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          box-shadow: 
            inset 0 0 15px rgba(255, 255, 255, 0.04),
            inset 0 -1px 6px rgba(0, 0, 0, 0.15);
          pointer-events: none;
          z-index: 2;
        }
        
        .app-icon:active {
          transform: translateZ(0) scale(0.94);
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - REFINED MATTE COLORS                     */
        /* Subtle glow, elegant presence                               */
        /* ═══════════════════════════════════════════════════════════ */
        
        /* Trade69 - Emerald */
        .app-icon.trade69 {
          background: linear-gradient(145deg, 
            #1a5c50 0%, 
            #0f3d38 50%,
            #082825 100%);
          box-shadow: 
            0 0 25px rgba(94, 234, 212, 0.18),
            0 0 10px rgba(94, 234, 212, 0.08),
            0 6px 20px rgba(0, 0, 0, 0.4),
            0 12px 32px rgba(15, 61, 56, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.15),
            inset 0 -1px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(94, 234, 212, 0.08);
        }
        
        /* MegaAgent - Violet */
        .app-icon.megaagent {
          background: linear-gradient(145deg, 
            #5c3d7a 0%, 
            #3d2558 50%,
            #281840 100%);
          box-shadow: 
            0 0 25px rgba(192, 132, 252, 0.18),
            0 0 10px rgba(192, 132, 252, 0.08),
            0 6px 20px rgba(0, 0, 0, 0.4),
            0 12px 32px rgba(61, 37, 88, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.15),
            inset 0 -1px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(192, 132, 252, 0.08);
        }
        
        /* Octopus - Cyan */
        .app-icon.octopus {
          background: linear-gradient(145deg, 
            #1a5a70 0%, 
            #0f3d4a 50%,
            #082830 100%);
          box-shadow: 
            0 0 25px rgba(103, 232, 249, 0.18),
            0 0 10px rgba(103, 232, 249, 0.08),
            0 6px 20px rgba(0, 0, 0, 0.4),
            0 12px 32px rgba(15, 61, 74, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.15),
            inset 0 -1px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(103, 232, 249, 0.08);
        }
        
        /* Overmind - Gold */
        .app-icon.overmind {
          background: linear-gradient(145deg, 
            #8a6420 0%, 
            #5c4315 50%,
            #3d2d0d 100%);
          box-shadow: 
            0 0 25px rgba(252, 211, 77, 0.18),
            0 0 10px rgba(252, 211, 77, 0.08),
            0 6px 20px rgba(0, 0, 0, 0.4),
            0 12px 32px rgba(92, 67, 21, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.15),
            inset 0 -1px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(252, 211, 77, 0.08);
        }
        
        .icon-wrapper {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - ELEGANT TEXT                             */
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
            0 0 15px rgba(255, 255, 255, 0.2),
            0 1px 3px rgba(0, 0, 0, 0.6);
        }
        
        .app-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Color-matched text glow - subtle */
        .app-container:nth-child(1) .app-name {
          text-shadow: 
            0 0 12px rgba(94, 234, 212, 0.35),
            0 0 25px rgba(94, 234, 212, 0.15),
            0 1px 3px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(2) .app-name {
          text-shadow: 
            0 0 12px rgba(192, 132, 252, 0.35),
            0 0 25px rgba(192, 132, 252, 0.15),
            0 1px 3px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(3) .app-name {
          text-shadow: 
            0 0 12px rgba(103, 232, 249, 0.35),
            0 0 25px rgba(103, 232, 249, 0.15),
            0 1px 3px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(4) .app-name {
          text-shadow: 
            0 0 12px rgba(252, 211, 77, 0.35),
            0 0 25px rgba(252, 211, 77, 0.15),
            0 1px 3px rgba(0, 0, 0, 0.6);
        }
        
        /* Staggered name animation */
        .app-container:nth-child(1) .app-name { transition-delay: 100ms; }
        .app-container:nth-child(2) .app-name { transition-delay: 160ms; }
        .app-container:nth-child(3) .app-name { transition-delay: 220ms; }
        .app-container:nth-child(4) .app-name { transition-delay: 280ms; }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* GLOBAL TAP HIGHLIGHT REMOVAL                                */
        /* ═══════════════════════════════════════════════════════════ */
        
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* DESKTOP STYLES                                              */
        /* ═══════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .work-grid {
            gap: 40px 36px;
            max-width: 340px;
          }
          
          .app-container {
            gap: 12px;
          }
          
          .app-icon {
            width: 120px;
            height: 120px;
            border-radius: 28px;
          }
          
          .app-icon::before {
            border-radius: 28px 28px 50% 50%;
          }
          
          .app-icon::after {
            border-radius: 28px;
          }
          
          .app-icon:hover {
            transform: translateZ(0) scale(1.04) translateY(-3px);
          }
          
          .app-icon.trade69:hover {
            box-shadow: 
              0 0 35px rgba(94, 234, 212, 0.25),
              0 0 15px rgba(94, 234, 212, 0.12),
              0 8px 28px rgba(0, 0, 0, 0.35),
              0 18px 45px rgba(15, 61, 56, 0.4),
              inset 0 1px 1px rgba(255, 255, 255, 0.18),
              inset 0 -1px 4px rgba(0, 0, 0, 0.12);
          }
          
          .app-icon.megaagent:hover {
            box-shadow: 
              0 0 35px rgba(192, 132, 252, 0.25),
              0 0 15px rgba(192, 132, 252, 0.12),
              0 8px 28px rgba(0, 0, 0, 0.35),
              0 18px 45px rgba(61, 37, 88, 0.4),
              inset 0 1px 1px rgba(255, 255, 255, 0.18),
              inset 0 -1px 4px rgba(0, 0, 0, 0.12);
          }
          
          .app-icon.octopus:hover {
            box-shadow: 
              0 0 35px rgba(103, 232, 249, 0.25),
              0 0 15px rgba(103, 232, 249, 0.12),
              0 8px 28px rgba(0, 0, 0, 0.35),
              0 18px 45px rgba(15, 61, 74, 0.4),
              inset 0 1px 1px rgba(255, 255, 255, 0.18),
              inset 0 -1px 4px rgba(0, 0, 0, 0.12);
          }
          
          .app-icon.overmind:hover {
            box-shadow: 
              0 0 35px rgba(252, 211, 77, 0.25),
              0 0 15px rgba(252, 211, 77, 0.12),
              0 8px 28px rgba(0, 0, 0, 0.35),
              0 18px 45px rgba(92, 67, 21, 0.4),
              inset 0 1px 1px rgba(255, 255, 255, 0.18),
              inset 0 -1px 4px rgba(0, 0, 0, 0.12);
          }
          
          .app-name {
            font-size: 13px;
          }
        }
        
        @media (min-width: 900px) {
          .work-grid {
            gap: 46px 42px;
            max-width: 400px;
          }
          
          .app-icon {
            width: 140px;
            height: 140px;
            border-radius: 32px;
          }
          
          .app-icon::before {
            border-radius: 32px 32px 50% 50%;
          }
          
          .app-icon::after {
            border-radius: 32px;
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