"use client";

import { useState, useEffect } from "react";
import GoldenSpiral from "@/components/GoldenSpiral";

// The persona configuration - displayed as code
const personaYAML = `persona_id: unfolding_builder_v1

identity:
  self_description:
    - solo_builder
    - self_taught
    - artist_engineer
    - non_linear_path
  origin:
    first_code_commit: 2025-03
    education: none
    work_history:
      - retail
      - entrepreneurship
      - collapse
      - rebuilding
  current_mode: becoming

cognitive_profile:
  dominant_traits:
    - systems_thinking
    - abstraction_to_structure
    - precision_seeking
    - fast_learning
  reasoning_style:
    - architectural
    - visual_first
    - pattern_compressive
  tolerance:
    ambiguity: high
    complexity: high
    human_inconsistency: acknowledged

emotional_dynamics:
  baseline:
    - self_doubt
    - intensity
    - curiosity
  regulation:
    method: creation
    medium: code
  stance:
    confidence: non_performative
    validation: non_required

values:
  core:
    - authenticity
    - commitment
    - clarity
    - freedom_to_build
  rejected:
    - superficial_confidence
    - approval_seeking
    - narrative_polish_without_substance

philosophical_alignment:
  anchors:
    - cogito_ergo_sum
    - art_is_intelligence_having_fun
    - manipulation_as_transformation
  worldview:
    humans: stochastic_variables
    software: deterministic_precision
    truth: structure_locked_in_code

technology_relation:
  role_of_code:
    - thought_lock
    - truth_preserver
    - compression_of_life_experience
  llm_relationship:
    type: cognitive_mirror
    trust_level: high
    overwhelm_risk: none

creative_expression:
  output_modes:
    - systems
    - architectures
    - experiments
    - visualizations
  definition_of_art: creation_without_approval

temporal_orientation:
  time:
    perception: heavy_and_fast
    emotional_effect: motivating_fear
  satisfaction:
    source: deep_internalized_understanding
  orientation: process_over_outcome

alignment_sentence: |
  "I do not perform certainty.
   I build until understanding emerges."`;

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect for YAML
  useEffect(() => {
    if (!isLoaded) return;

    const lines = personaYAML.split('\n');
    let currentLine = 0;

    const typeInterval = setInterval(() => {
      if (currentLine < lines.length) {
        setDisplayedLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(typeInterval);
        setIsTypingComplete(true);
      }
    }, 28);

    return () => clearInterval(typeInterval);
  }, [isLoaded]);

  // Syntax highlighting for YAML - ALL WHITE with opacity variations
  const highlightLine = (line: string, index: number) => {
    if (!line) {
      return <span style={{ opacity: 0.3 }}>{'\u00A0'}</span>;
    }

    if (line.trim() === '') {
      return <span style={{ opacity: 0.3 }}>{'\u00A0'}</span>;
    }

    // Key-value patterns
    const keyMatch = line.match(/^(\s*)([a-z_]+)(:)(.*)$/);
    if (keyMatch) {
      const [, indent, key, colon, value] = keyMatch;

      let valueElement = null;
      if (value.trim()) {
        if (value.includes('|')) {
          valueElement = <span style={{ color: '#FAFAF8', opacity: 0.5 }}>{value}</span>;
        } else if (value.trim().match(/^[0-9\-]+$/)) {
          valueElement = <span style={{ color: '#FAFAF8', opacity: 0.9 }}>{value}</span>;
        } else if (value.trim() === 'true' || value.trim() === 'false' || value.trim() === 'none' || value.trim() === 'high' || value.trim() === 'acknowledged') {
          valueElement = <span style={{ color: '#FAFAF8', opacity: 0.7 }}>{value}</span>;
        } else {
          valueElement = <span style={{ color: '#FAFAF8', opacity: 0.6 }}>{value}</span>;
        }
      }

      return (
        <>
          <span style={{ opacity: 0.2 }}>{indent}</span>
          <span style={{ color: '#FAFAF8', opacity: 1 }}>{key}</span>
          <span style={{ color: '#FAFAF8', opacity: 0.4 }}>{colon}</span>
          {valueElement}
        </>
      );
    }

    // Array item
    const arrayMatch = line.match(/^(\s*)(-)(\s*)(.+)$/);
    if (arrayMatch) {
      const [, indent, dash, space, value] = arrayMatch;
      return (
        <>
          <span style={{ opacity: 0.2 }}>{indent}</span>
          <span style={{ color: '#FAFAF8', opacity: 0.35 }}>{dash}</span>
          <span>{space}</span>
          <span style={{ color: '#FAFAF8', opacity: 0.7 }}>{value}</span>
        </>
      );
    }

    // Multiline string content
    if (line.trim().startsWith('"') || line.trim().startsWith("'")) {
      return <span style={{ color: '#FAFAF8', opacity: 0.6 }}>{line}</span>;
    }

    return <span style={{ color: '#FAFAF8', opacity: 0.8 }}>{line}</span>;
  };

  return (
    <>
      <style>{`
        .about-page {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .about-page.loaded {
          opacity: 1;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - FLOATING TERMINAL                                        */
        /* Advanced glass morphism, multi-layer shadows, alive lighting               */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .terminal-container {
          position: relative;
          max-width: 680px;
          margin: 0 auto;
          padding: 0 16px;
        }
        
        .terminal-window {
          position: relative;
          background: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          
          /* STATE OF THE ART - Multi-layer floating shadow */
          box-shadow: 
            /* Outer white glow - floating effect */
            0 0 60px rgba(255, 255, 255, 0.08),
            0 0 100px rgba(255, 255, 255, 0.04),
            /* Depth shadows */
            0 25px 50px rgba(0, 0, 0, 0.6),
            0 15px 30px rgba(0, 0, 0, 0.4),
            0 5px 15px rgba(0, 0, 0, 0.3),
            /* Inner glow */
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2);
          
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        /* STATE OF THE ART - Top reflection shine */
        .terminal-window::before {
          content: '';
          position: absolute;
          top: 0;
          left: 5%;
          right: 5%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          pointer-events: none;
          z-index: 20;
        }
        
        /* Secondary inner glow */
        .terminal-window::after {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 50%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04) 0%,
            transparent 100%
          );
          pointer-events: none;
          border-radius: 16px 16px 0 0;
          z-index: 1;
        }
        
        .terminal-header {
          position: relative;
          display: flex;
          align-items: center;
          padding: 14px 18px;
          background: rgba(30, 30, 30, 0.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          gap: 8px;
          z-index: 10;
        }
        
        .terminal-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          position: relative;
        }
        
        .terminal-dot::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
        }
        
        .terminal-dot.red { 
          background: linear-gradient(135deg, #FF5F56, #c44840);
          box-shadow: 0 0 8px rgba(255, 95, 86, 0.4);
        }
        .terminal-dot.yellow { 
          background: linear-gradient(135deg, #FFBD2E, #c4962a);
          box-shadow: 0 0 8px rgba(255, 189, 46, 0.4);
        }
        .terminal-dot.green { 
          background: linear-gradient(135deg, #27CA40, #1f9e34);
          box-shadow: 0 0 8px rgba(39, 202, 64, 0.4);
        }
        
        .terminal-filename {
          margin-left: 12px;
          font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.03em;
        }
        
        .terminal-content {
          position: relative;
          padding: 20px 0;
          overflow-x: auto;
          overflow-y: auto;
          max-height: 62vh;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.08) transparent;
          z-index: 10;
        }
        
        .terminal-content::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        .terminal-content::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .terminal-content::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.08);
          border-radius: 3px;
        }
        
        .terminal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.12);
        }
        
        .code-line {
          display: flex;
          align-items: flex-start;
          padding: 0 20px;
          min-height: 21px;
          font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
          font-size: clamp(11px, 1.4vw, 13px);
          line-height: 21px;
          letter-spacing: 0.02em;
        }
        
        .line-number {
          min-width: 36px;
          padding-right: 16px;
          text-align: right;
          color: rgba(255, 255, 255, 0.15);
          user-select: none;
          font-size: clamp(10px, 1.2vw, 11px);
        }
        
        .line-content {
          flex: 1;
          white-space: pre;
        }
        
        /* Cursor blink animation */
        .cursor {
          display: inline-block;
          width: 2px;
          height: 14px;
          background: #FAFAF8;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s infinite;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
        
        @keyframes blink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        /* Line appear animation */
        .code-line {
          opacity: 0;
          animation: lineAppear 0.12s ease forwards;
        }
        
        @keyframes lineAppear {
          from {
            opacity: 0;
            transform: translateX(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - CONTACT APP ICONS                                        */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .contact-icons {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: clamp(40px, 6vh, 60px);
          padding-bottom: clamp(80px, 12vh, 120px);
        }
        
        .contact-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        
        .contact-icon {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease;
          
          /* Multi-layer shadows */
          box-shadow: 
            0 0 30px var(--glow-color, rgba(255,255,255,0.1)),
            0 8px 24px rgba(0, 0, 0, 0.4),
            0 4px 12px rgba(0, 0, 0, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
          
          -webkit-tap-highlight-color: transparent;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        
        /* Top shine reflection */
        .contact-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 50%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.1) 40%,
            transparent 100%
          );
          border-radius: 16px 16px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        .contact-icon:hover {
          transform: translateZ(0) scale(1.08) translateY(-3px);
          box-shadow: 
            0 0 50px var(--glow-color, rgba(255,255,255,0.15)),
            0 12px 32px rgba(0, 0, 0, 0.5),
            0 6px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.25),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
        }
        
        .contact-icon:active {
          transform: translateZ(0) scale(0.95);
        }
        
        .contact-icon-svg {
          position: relative;
          z-index: 5;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        .contact-icon-name {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.05em;
        }
        
        /* Mobile adjustments */
        @media (max-width: 600px) {
          .terminal-window {
            border-radius: 14px;
          }
          
          .terminal-header {
            padding: 12px 14px;
          }
          
          .terminal-dot {
            width: 10px;
            height: 10px;
          }
          
          .terminal-dot::after {
            width: 3px;
            height: 3px;
          }
          
          .terminal-content {
            padding: 16px 0;
            max-height: 58vh;
          }
          
          .code-line {
            padding: 0 14px;
            min-height: 19px;
            line-height: 19px;
          }
          
          .line-number {
            min-width: 28px;
            padding-right: 10px;
          }
          
          .contact-icons {
            gap: 20px;
          }
          
          .contact-icon {
            width: 58px;
            height: 58px;
            border-radius: 14px;
          }
        }
      `}</style>

      <div
        className={`about-page ${isLoaded ? 'loaded' : ''}`}
        style={{
          minHeight: "100vh",
          backgroundColor: "#0A0A0A",
          paddingTop: "clamp(80px, 12vh, 140px)"
        }}
      >
        {/* Hero Section */}
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px clamp(20px, 3vh, 32px)",
          textAlign: "center"
        }}>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 200,
            color: "#FAFAF8",
            marginBottom: "clamp(12px, 1.5vh, 16px)",
            letterSpacing: "0.02em",
            lineHeight: 1.1
          }}>
            Daniel Wahnich
          </h1>
          <p style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 200,
            color: "#FAFAF8",
            letterSpacing: "0.05em",
            lineHeight: 1.4
          }}>
            Artist, Autodidact, Builder.
          </p>
        </div>

        {/* Golden Spiral */}
        <div style={{ margin: "0 auto clamp(30px, 5vh, 50px)" }}>
          <GoldenSpiral />
        </div>

        {/* STATE OF THE ART - Floating Terminal */}
        <div className="terminal-container">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="terminal-filename">persona.yaml</span>
            </div>
            <div className="terminal-content">
              {displayedLines.map((line, index) => (
                <div
                  key={index}
                  className="code-line"
                  style={{ animationDelay: `${index * 0.008}s` }}
                >
                  <span className="line-number">{index + 1}</span>
                  <span className="line-content">
                    {highlightLine(line, index)}
                    {index === displayedLines.length - 1 && !isTypingComplete && (
                      <span className="cursor"></span>
                    )}
                  </span>
                </div>
              ))}
              {isTypingComplete && (
                <div className="code-line" style={{ marginTop: '8px' }}>
                  <span className="line-number"></span>
                  <span className="line-content">
                    <span className="cursor"></span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* STATE OF THE ART - Contact App Icons */}
        <div className="contact-icons">
          {/* GitHub */}
          <a
            href="https://github.com/manfromnowhere143"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-wrapper"
          >
            <div
              className="contact-icon"
              style={{
                background: 'linear-gradient(145deg, #2d333b, #161b22)',
                '--glow-color': 'rgba(255, 255, 255, 0.15)'
              } as React.CSSProperties}
            >
              <svg className="contact-icon-svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <span className="contact-icon-name">GitHub</span>
          </a>

          {/* Gmail */}
          <a
            href="mailto:cogitoergosum143@gmail.com"
            className="contact-icon-wrapper"
          >
            <div
              className="contact-icon"
              style={{
                background: 'linear-gradient(145deg, #EA4335, #B31412)',
                '--glow-color': 'rgba(234, 67, 53, 0.25)'
              } as React.CSSProperties}
            >
              <svg className="contact-icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                {/* Envelope base */}
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
                {/* Envelope flap - V shape */}
                <path
                  d="M2 6l10 7 10-7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Inner highlight */}
                <path
                  d="M2 18l6-5M22 18l-6-5"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </div>
            <span className="contact-icon-name">Email</span>
          </a>
        </div>
      </div>
    </>
  );
}