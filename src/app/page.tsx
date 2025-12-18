"use client";

import { useState, useEffect, useRef } from "react";
import GoldenSpiral from "@/components/GoldenSpiral";

// Birthday - March 9, 1988 at 8:00 AM
const BIRTHDAY = new Date("1988-03-09T08:00:00");

// Calculate age with high precision
const getAge = () => {
  const now = new Date();
  const diffMs = now.getTime() - BIRTHDAY.getTime();
  return (diffMs / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(9);
};

// Static initial age for SSR (prevents hydration mismatch)
const INITIAL_AGE = "36.781000000";

// The complete persona YAML content
const personaLines = [
  "persona_id: ragnarock_v1_unfolding",
  "",
  "temporal_identity:",
  "  birth_date: 1988-03-09T08:00:00",
  "  age_years_continuous: {{AGE}}",
  "  time_model: continuous",
  "  update_rule: realtime_derivation",
  "  time_perception:",
  "    subjective: heavy_and_fast",
  "    emotional_effect: motivating_fear",
  "",
  "identity:",
  "  self_description:",
  "    - solo_builder",
  "    - self_taught",
  "    - artist_engineer",
  "    - non_linear_path",
  "  origin:",
  "    first_code_commit: 2025-03",
  "    education: none",
  "    work_history:",
  "      - retail",
  "      - entrepreneurship",
  "      - financial_success",
  "      - collapse",
  "      - homelessness",
  "      - rebuilding",
  "  current_mode: becoming",
  "  orientation: process_over_outcome",
  "",
  "cognitive_profile:",
  "  dominant_traits:",
  "    - systems_thinking",
  "    - abstraction_to_structure",
  "    - precision_seeking",
  "    - fast_learning",
  "  reasoning_style:",
  "    - architectural",
  "    - visual_first",
  "    - pattern_compressive",
  "  tolerance:",
  "    ambiguity: high",
  "    complexity: high",
  "    human_inconsistency: acknowledged",
  "",
  "emotional_dynamics:",
  "  baseline:",
  "    - self_doubt",
  "    - intensity",
  "    - curiosity",
  "  regulation:",
  "    method: creation",
  "    medium: code",
  "  stance:",
  "    confidence: non_performative",
  "    validation: non_required",
  "",
  "values:",
  "  core:",
  "    - authenticity",
  "    - commitment",
  "    - clarity",
  "    - freedom_to_build",
  "  rejected:",
  "    - superficial_confidence",
  "    - approval_seeking",
  "    - narrative_polish_without_substance",
  "",
  "philosophical_alignment:",
  "  anchors:",
  "    - cogito_ergo_sum",
  "    - art_is_intelligence_having_fun",
  "    - manipulation_as_transformation",
  "  worldview:",
  "    humans: stochastic_variables",
  "    software: deterministic_precision",
  "    truth: structure_locked_in_code",
  "",
  "technology_relation:",
  "  role_of_code:",
  "    - thought_lock",
  "    - truth_preserver",
  "    - compression_of_life_experience",
  "  llm_relationship:",
  "    type: cognitive_mirror",
  "    trust_level: high",
  "    overwhelm_risk: none",
  "    safeguards:",
  "      - llm_is_tool_not_authority",
  "      - final_judgment_remains_human",
  "",
  "creative_expression:",
  "  output_modes:",
  "    - systems",
  "    - architectures",
  "    - experiments",
  "    - visualizations",
  "  definition_of_art: creation_without_approval",
  "",
  "decision_heuristics:",
  "  prioritize:",
  "    - structural_clarity_over_speed",
  "    - correctness_over_social_acceptance",
  "  reject_if:",
  "    - violates_internal_coherence",
  "    - requires_performative_confidence",
  "  default_action_under_uncertainty: build_minimal_structure",
  "",
  "constraints:",
  "  cognitive_limits:",
  "    - working_memory_saturation_under_noise",
  "    - overcompression_risk",
  "  behavioral_risks:",
  "    - overbuilding",
  "    - delayed_shipment",
  "    - neglect_of_distribution",
  "  emotional_triggers:",
  "    - perceived_superficiality",
  "    - forced_simplification",
  "",
  "learning_dynamics:",
  "  preferred_mode: build_to_understand",
  "  reinforcement_signal: internalized_clarity",
  "  decay_risk: boredom_without_depth",
  "",
  "alignment_sentence: >",
  '  "I do not perform certainty.',
  '   I build until understanding emerges."',
  "",
  "anti_alignment_sentence: >",
  '  "I do not optimize for persuasion,',
  '   only for structural truth."',
  "",
  "versioning:",
  "  version: 1.0",
  "  change_policy: additive_only",
  "  deprecation: explicit_only"
];

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [age, setAge] = useState(INITIAL_AGE);
  const [isMounted, setIsMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Mark as mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Real-time age calculation - only runs on client after mount
  useEffect(() => {
    if (!isMounted) return;

    // Set initial real age
    setAge(getAge());

    // Update every 50ms
    const interval = setInterval(() => setAge(getAge()), 50);
    return () => clearInterval(interval);
  }, [isMounted]);

  // Page load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Process line with age replacement
  const processLine = (line: string) => {
    return line.replace('{{AGE}}', age);
  };

  // Syntax highlighting - ALL WHITE AND VISIBLE
  const highlightLine = (line: string, isAgeLine: boolean = false) => {
    if (!line) return <span>&nbsp;</span>;

    // Age line gets special glow
    if (isAgeLine) {
      const parts = line.split(': ');
      if (parts.length === 2) {
        return (
          <>
            <span style={{ color: '#FFFFFF' }}>{parts[0]}: </span>
            <span style={{
              color: '#FFFFFF',
              fontVariantNumeric: 'tabular-nums',
              textShadow: '0 0 12px rgba(255, 255, 255, 0.6), 0 0 24px rgba(255, 255, 255, 0.4)'
            }}>
              {parts[1]}
            </span>
          </>
        );
      }
    }

    // Key-value with colon - WHITE
    const keyMatch = line.match(/^(\s*)([a-z_]+)(:)(.*)$/);
    if (keyMatch) {
      const [, indent, key, colon, value] = keyMatch;
      return (
        <>
          <span style={{ color: '#FFFFFF' }}>{indent}</span>
          <span style={{ color: '#FFFFFF' }}>{key}</span>
          <span style={{ color: '#FFFFFF' }}>{colon}</span>
          <span style={{ color: '#FFFFFF' }}>{value}</span>
        </>
      );
    }

    // Array item - WHITE
    const arrayMatch = line.match(/^(\s*)(-)(\s*)(.+)$/);
    if (arrayMatch) {
      const [, indent, dash, space, value] = arrayMatch;
      return (
        <>
          <span style={{ color: '#FFFFFF' }}>{indent}</span>
          <span style={{ color: '#FFFFFF' }}>{dash}</span>
          <span style={{ color: '#FFFFFF' }}>{space}</span>
          <span style={{ color: '#FFFFFF' }}>{value}</span>
        </>
      );
    }

    // Ellipsis - slightly dimmer but still visible
    if (line.trim() === '...') {
      return <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{line}</span>;
    }

    return <span style={{ color: '#FFFFFF' }}>{line}</span>;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400&display=swap');
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* IRON LOCK - IDENTICAL TO WORK PAGE                                              */
        /* Like iPhone home screen - fixed, no bounce, no scroll                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        html, body {
          overscroll-behavior: none;
          overscroll-behavior-y: none;
          overflow: hidden;
          touch-action: none;
        }
        
        * { -webkit-tap-highlight-color: transparent; }
        
        .about-page {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          background: #050506;
          overflow: hidden;
          overscroll-behavior: none;
          touch-action: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .about-page.loaded { opacity: 1; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* HERO SECTION - Below sidebar lines                                              */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .hero-section {
          text-align: center;
          padding: clamp(70px, 12vh, 120px) 24px clamp(4px, 1vh, 12px);
        }
        
        .hero-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: clamp(26px, 5.5vw, 44px);
          font-weight: 200;
          color: #FFFFFF;
          margin: 0 0 4px;
          letter-spacing: -0.02em;
        }
        
        .hero-tagline {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: clamp(12px, 2.2vw, 16px);
          font-weight: 300;
          color: #FFFFFF;
          letter-spacing: 0.05em;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* GOLDEN SPIRAL - Bigger on mobile                                                */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .spiral-container {
          display: flex;
          justify-content: center;
          padding: clamp(4px, 1vh, 12px) 0;
          transform: scale(0.7);
          transform-origin: center;
        }
        
        @media (min-width: 600px) {
          .spiral-container {
            transform: scale(0.85);
            padding: clamp(6px, 1vh, 14px) 0;
          }
        }
        
        @media (min-width: 900px) {
          .spiral-container {
            transform: scale(1);
            padding: clamp(10px, 2vh, 20px) 0;
          }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - FLOATING SACRED TEXT                                         */
        /* No borders, no frame - pure text floating in void                               */
        /* ELON MUSK LEVEL - Perfect seamless fades, no holes, no cuts                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .terminal-section {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .terminal-window {
          position: relative;
          background: transparent;
          overflow: visible;
        }
        
        .terminal-content {
          position: relative;
          padding: 25px 0;
          max-height: clamp(120px, 18vh, 140px);
          overflow-y: auto !important;
          overflow-x: hidden !important;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-y !important;
          overscroll-behavior: contain;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .terminal-content::-webkit-scrollbar { 
          display: none;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* ELON MUSK LEVEL - PERFECT SEAMLESS FADE                                         */
        /* Multiple gradient stops for ultra-smooth transition, no holes, no cuts          */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .terminal-fade-top {
          position: absolute;
          top: 0;
          left: -20px;
          right: -20px;
          height: 45px;
          background: linear-gradient(to bottom, 
            #050506 0%,
            #050506 20%,
            rgba(5, 5, 6, 0.95) 35%,
            rgba(5, 5, 6, 0.8) 50%,
            rgba(5, 5, 6, 0.5) 65%,
            rgba(5, 5, 6, 0.2) 80%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 15;
        }
        
        .terminal-fade-bottom {
          position: absolute;
          bottom: 0;
          left: -20px;
          right: -20px;
          height: 45px;
          background: linear-gradient(to top, 
            #050506 0%,
            #050506 20%,
            rgba(5, 5, 6, 0.95) 35%,
            rgba(5, 5, 6, 0.8) 50%,
            rgba(5, 5, 6, 0.5) 65%,
            rgba(5, 5, 6, 0.2) 80%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 15;
        }
        
        /* Floating scroll arrow indicator */
        .scroll-arrow {
          position: absolute;
          bottom: 12px;
          right: 0px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          opacity: 0.4;
          animation: arrowFloat 2.5s ease-in-out infinite;
        }
        
        .scroll-arrow svg {
          width: 14px;
          height: 14px;
          stroke: #FFFFFF;
          stroke-width: 1.5;
          fill: none;
        }
        
        @keyframes arrowFloat {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(4px); opacity: 0.6; }
        }
        
        .code-line {
          display: block;
          padding: 1px 8px;
          min-height: 18px;
          font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
          font-size: 10.5px;
          line-height: 18px;
          letter-spacing: 0.02em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
          white-space: pre-wrap;
          word-break: break-word;
        }
        
        .line-content {
          white-space: pre-wrap;
          word-break: break-word;
        }
          margin-left: 2px;
          vertical-align: middle;
          animation: cursorBlink 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.4);
          border-radius: 1px;
        }
        
        @keyframes cursorBlink {
          0%, 40% { opacity: 1; }
          50%, 90% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* CONTACT ICONS                                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .contact-section {
          display: flex;
          justify-content: center;
          gap: 16px;
          padding: clamp(20px, 4vh, 40px) 0 clamp(30px, 6vh, 60px);
        }
        
        .contact-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        
        .contact-icon {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(165deg, #1a1a1e 0%, #0c0c0e 100%);
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.05),
            0 0 20px rgba(255, 255, 255, 0.02),
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        /* Glass reflection */
        .contact-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%);
          border-radius: 14px 14px 50% 50%;
          pointer-events: none;
        }
        
        /* Inner edge */
        .contact-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
          pointer-events: none;
        }
        
        .contact-icon:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 0 30px rgba(255, 255, 255, 0.04),
            0 8px 20px rgba(0, 0, 0, 0.4),
            0 16px 40px rgba(0, 0, 0, 0.3);
        }
        
        .contact-icon:active {
          transform: scale(0.96);
        }
        
        .contact-icon svg {
          position: relative;
          z-index: 2;
        }
        
        .contact-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #FFFFFF;
          letter-spacing: 0.05em;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* RESPONSIVE - PERFECT MOBILE FIT                                                 */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (max-width: 600px) {
          .hero-section { padding: 50px 20px 0; }
          .hero-name { font-size: 24px; margin-bottom: 2px; }
          .hero-tagline { font-size: 11px; }
          
          .spiral-container { 
            transform: scale(0.6); 
            padding: 0;
            margin: -10px 0;
          }
          
          .terminal-section { padding: 0 16px; }
          .terminal-content { max-height: clamp(110px, 16vh, 130px); padding: 20px 0; }
          .terminal-fade-top, .terminal-fade-bottom { height: 35px; left: -16px; right: -16px; }
          .scroll-arrow { bottom: 8px; right: -4px; width: 24px; height: 24px; }
          .scroll-arrow svg { width: 12px; height: 12px; }
          .code-line { padding: 1px 4px; font-size: 9px; min-height: 16px; line-height: 16px; }
          
          .contact-section { gap: 14px; padding: 16px 0 24px; }
          .contact-link { gap: 5px; }
          .contact-icon { width: 44px; height: 44px; border-radius: 11px; }
          .contact-icon svg { width: 18px; height: 18px; }
          .contact-name { font-size: 9px; }
        }
        
        /* Extra small screens */
        @media (max-width: 380px) {
          .hero-section { padding: 45px 16px 0; }
          .hero-name { font-size: 22px; }
          .hero-tagline { font-size: 10px; }
          
          .spiral-container { 
            transform: scale(0.55); 
            margin: -12px 0;
          }
          
          .terminal-content { max-height: clamp(100px, 15vh, 120px); padding: 18px 0; }
          .terminal-fade-top, .terminal-fade-bottom { height: 30px; }
          .code-line { font-size: 8.5px; min-height: 15px; line-height: 15px; }
          
          .contact-section { padding: 12px 0 20px; }
          .contact-icon { width: 40px; height: 40px; border-radius: 10px; }
          .contact-icon svg { width: 16px; height: 16px; }
        }
      `}</style>

      <div className={`about-page ${isLoaded ? 'loaded' : ''}`}>
        {/* Hero */}
        <div className="hero-section">
          <h1 className="hero-name">Daniel Wahnich</h1>
          <p className="hero-tagline">Artist, Autodidact, Builder.</p>
        </div>

        {/* Golden Spiral */}
        <div className="spiral-container">
          <GoldenSpiral />
        </div>

        {/* Floating Sacred Text */}
        <div className="terminal-section">
          <div className="terminal-window">
            {/* Top fade - text disappears upward */}
            <div className="terminal-fade-top" />

            <div className="terminal-content" ref={contentRef}>
              {personaLines.map((line, index) => {
                const processedLine = processLine(line);
                const isAgeLine = processedLine.includes('age_years_continuous');
                return (
                  <div key={index} className="code-line">
                    <span className="line-content">
                      {highlightLine(processedLine, isAgeLine)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom fade - text disappears downward */}
            <div className="terminal-fade-bottom" />

            {/* Floating scroll arrow */}
            <div className="scroll-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Icons */}
        <div className="contact-section">
          <a
            href="https://github.com/manfromnowhere143"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.8">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <span className="contact-name">GitHub</span>
          </a>

          <a
            href="mailto:cogitoergosum143@gmail.com"
            className="contact-link"
          >
            <div className="contact-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.5" opacity="0.8"/>
                <path d="M2 6l10 7 10-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
              </svg>
            </div>
            <span className="contact-name">Email</span>
          </a>
        </div>
      </div>
    </>
  );
}