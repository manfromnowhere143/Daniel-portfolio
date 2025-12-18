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
  '  "I do not perform certainty. I build until understanding emerges."',
  "",
  "anti_alignment_sentence: >",
  '  "I do not optimize for persuasion, only for structural truth."',
  "",
  "versioning:",
  "  version: 1.0",
  "  change_policy: additive_only",
  "  deprecation: explicit_only"
];

// Preview lines (collapsed state) - Minimal, elegant
const previewLines = [
  "persona_id: ragnarock_v1_unfolding",
  "temporal_identity:",
  "  age_years_continuous: {{AGE}}",
  "  ...",
];

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [age, setAge] = useState(INITIAL_AGE);
  const [isMounted, setIsMounted] = useState(false);
  const [visibleLineCount, setVisibleLineCount] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [expandAnimPhase, setExpandAnimPhase] = useState<'idle' | 'expanding' | 'typing' | 'complete'>('idle');
  const contentRef = useRef<HTMLDivElement>(null);
  const typingStarted = useRef(false);

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

  // Enforce scroll position when terminal state changes
  useEffect(() => {
    // Always ensure window scroll is at 0 for this fixed page
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [isExpanded]);

  // Handle expansion - simple toggle, no scroll manipulation needed
  const handleExpand = () => {
    if (isExpanded) {
      // Collapse - simple state reset
      setExpandAnimPhase('idle');
      setIsExpanded(false);
      setVisibleLineCount(0);
      setIsTypingComplete(false);
      typingStarted.current = false;

      // Reset terminal content scroll position
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    } else {
      // Expand - elegant reveal
      setIsExpanded(true);
      setExpandAnimPhase('expanding');

      // Start typing after smooth expand animation
      setTimeout(() => {
        setExpandAnimPhase('typing');
        let currentLine = 0;
        const totalLines = personaLines.length;

        // Smooth typing - faster for empty lines
        const typeNextLine = () => {
          if (currentLine < totalLines) {
            setVisibleLineCount(currentLine + 1);
            const isEmptyLine = personaLines[currentLine].trim() === '';
            currentLine++;
            setTimeout(typeNextLine, isEmptyLine ? 8 : 18);
          } else {
            setIsTypingComplete(true);
            setExpandAnimPhase('complete');
          }
        };

        typeNextLine();
      }, 500);
    }
  };

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

  const currentLines = isExpanded
    ? personaLines.slice(0, visibleLineCount)
    : previewLines;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400&display=swap');
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - LOCKED ABOUT PAGE                                            */
        /* Fixed viewport, no scroll - terminal content scrolls internally                 */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        * { -webkit-tap-highlight-color: transparent; }
        
        .about-page {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.6s ease;
          background: #050506;
          overflow: hidden;
          touch-action: none;
          overscroll-behavior: none;
        }
        
        .about-page.loaded { opacity: 1; }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* HERO SECTION                                                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .hero-section {
          text-align: center;
          padding: clamp(50px, 8vh, 90px) 24px clamp(8px, 1.5vh, 16px);
        }
        
        .hero-name {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: clamp(28px, 5.5vw, 44px);
          font-weight: 200;
          color: #FFFFFF;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }
        
        .hero-tagline {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: clamp(13px, 2.2vw, 16px);
          font-weight: 300;
          color: #FFFFFF;
          letter-spacing: 0.05em;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* GOLDEN SPIRAL                                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .spiral-container {
          display: flex;
          justify-content: center;
          padding: clamp(8px, 1.5vh, 16px) 0;
          transform: scale(0.85);
          transform-origin: center;
        }
        
        @media (min-width: 600px) {
          .spiral-container {
            transform: scale(1);
            padding: clamp(10px, 2vh, 20px) 0;
          }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - TERMINAL                                                     */
        /* Sacred text viewer - scroll within to read the complete persona                 */
        /* Mature, elegant, advanced - like reading ancient wisdom in a modern frame       */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .terminal-section {
          max-width: 600px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .terminal-window {
          position: relative;
          background: linear-gradient(180deg, rgba(12, 12, 14, 0.95) 0%, rgba(8, 8, 10, 0.98) 100%);
          backdrop-filter: blur(60px) saturate(180%);
          -webkit-backdrop-filter: blur(60px) saturate(180%);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.03),
            0 0 50px rgba(0, 0, 0, 0.5),
            0 25px 70px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .terminal-window.expanded {
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.06),
            0 0 80px rgba(0, 0, 0, 0.6),
            0 35px 90px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }
        
        /* Top edge highlight - ethereal glow */
        .terminal-window::before {
          content: '';
          position: absolute;
          top: 0;
          left: 5%;
          right: 5%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          z-index: 10;
        }
        
        /* Side edge accents */
        .terminal-window::after {
          content: '';
          position: absolute;
          top: 10%;
          bottom: 10%;
          left: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.08), transparent);
          z-index: 10;
        }
        
        .terminal-header {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          background: linear-gradient(180deg, rgba(25, 25, 28, 0.7) 0%, rgba(18, 18, 20, 0.5) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          gap: 8px;
          position: relative;
        }
        
        /* Header bottom glow line */
        .terminal-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent);
        }
        
        .terminal-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .terminal-dot::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }
        
        .terminal-dot.red { 
          background: linear-gradient(135deg, #4a3533, #2d1f1e); 
          box-shadow: 0 0 8px rgba(255, 100, 100, 0.15);
        }
        .terminal-dot.yellow { 
          background: linear-gradient(135deg, #4a4433, #2d2a1e); 
          box-shadow: 0 0 8px rgba(255, 200, 100, 0.15);
        }
        .terminal-dot.green { 
          background: linear-gradient(135deg, #334a36, #1e2d20); 
          box-shadow: 0 0 8px rgba(100, 255, 100, 0.15);
        }
        
        .terminal-filename {
          margin-left: 12px;
          font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
          font-size: 11px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.04em;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        /* Scroll indicator hint */
        .scroll-hint {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.05em;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .terminal-window.expanded .scroll-hint {
          opacity: 1;
        }
        
        .terminal-content {
          position: relative;
          padding: 14px 0 40px;
          overflow: hidden;
          transition: max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .terminal-content.collapsed {
          max-height: 100px;
        }
        
        .terminal-content.expanded {
          max-height: clamp(280px, 50vh, 400px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-y;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
          mask-image: linear-gradient(to bottom, 
            transparent 0%, 
            black 3%, 
            black 92%, 
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(to bottom, 
            transparent 0%, 
            black 3%, 
            black 92%, 
            transparent 100%
          );
        }
        
        /* Custom scrollbar - minimal elegance */
        .terminal-content::-webkit-scrollbar { 
          width: 6px; 
        }
        .terminal-content::-webkit-scrollbar-track { 
          background: rgba(255, 255, 255, 0.02);
          border-radius: 3px;
          margin: 10px 0;
        }
        .terminal-content::-webkit-scrollbar-thumb { 
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
          border-radius: 3px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .terminal-content::-webkit-scrollbar-thumb:hover { 
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15));
        }
        
        /* Scroll fade indicator at bottom */
        .terminal-content.expanded::after {
          content: '';
          position: sticky;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(to top, rgba(10, 10, 12, 0.95), transparent);
          pointer-events: none;
          display: block;
        }
        
        .code-line {
          display: flex;
          align-items: flex-start;
          padding: 1px 18px;
          min-height: 20px;
          font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
          font-size: 11px;
          line-height: 20px;
          letter-spacing: 0.03em;
          font-weight: 400;
          transition: background 0.2s ease;
        }
        
        .code-line:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .line-number {
          min-width: 32px;
          padding-right: 14px;
          text-align: right;
          color: rgba(255, 255, 255, 0.25);
          user-select: none;
          font-size: 10px;
          font-weight: 300;
          transition: color 0.2s ease;
        }
        
        .code-line:hover .line-number {
          color: rgba(255, 255, 255, 0.4);
        }
        
        .line-content {
          flex: 1;
          white-space: pre;
          color: #FFFFFF;
        }
        
        .cursor {
          display: inline-block;
          width: 2px;
          height: 14px;
          background: #FFFFFF;
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
        /* STATE OF THE ART - EXPAND BUTTON                                                */
        /* Floating ethereal toggle - breathes with life                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .expand-button {
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.8;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 20;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .expand-button:hover {
          opacity: 1;
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        .expand-button:active {
          transform: scale(0.95);
          opacity: 1;
        }
        
        .expand-icon {
          position: relative;
          width: 14px;
          height: 14px;
        }
        
        /* Horizontal line - WHITE with glow */
        .expand-icon::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: #FFFFFF;
          transform: translateY(-50%);
          border-radius: 1px;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
        
        /* Vertical line - morphs elegantly */
        .expand-icon::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #FFFFFF;
          transform: translateX(-50%) scaleY(1);
          transform-origin: center;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
          border-radius: 1px;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
        
        .expand-icon.minus::after {
          transform: translateX(-50%) scaleY(0);
          opacity: 0;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* CONTACT ICONS                                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .contact-section {
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: clamp(20px, 3vh, 32px) 0 clamp(40px, 8vh, 80px);
          transition: padding 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
        /* RESPONSIVE                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (max-width: 600px) {
          .terminal-window { border-radius: 14px; }
          .terminal-header { padding: 12px 14px; gap: 6px; }
          .terminal-dot { width: 9px; height: 9px; }
          .terminal-dot::after { width: 3px; height: 3px; top: 1.5px; left: 1.5px; }
          .terminal-filename { font-size: 10px; margin-left: 10px; }
          .scroll-hint { font-size: 8px; right: 14px; }
          .terminal-content.collapsed { max-height: 85px; }
          .terminal-content.expanded { max-height: clamp(240px, 45vh, 340px); }
          .terminal-content { padding: 12px 0 36px; }
          .code-line { padding: 1px 14px; font-size: 10px; min-height: 18px; line-height: 18px; }
          .line-number { min-width: 24px; padding-right: 10px; font-size: 9px; }
          .expand-button { bottom: 8px; right: 8px; width: 28px; height: 28px; border-radius: 6px; }
          .expand-icon { width: 12px; height: 12px; }
          .contact-icon { width: 50px; height: 50px; border-radius: 12px; }
          .contact-icon svg { width: 20px; height: 20px; }
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

        {/* Terminal */}
        <div className="terminal-section">
          <div className={`terminal-window ${isExpanded ? 'expanded' : ''}`}>
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="terminal-filename">persona.yaml</span>
              <span className="scroll-hint">↕ scroll</span>
            </div>

            <div className={`terminal-content ${isExpanded ? 'expanded' : 'collapsed'}`} ref={contentRef}>
              {currentLines.map((line, index) => {
                const processedLine = processLine(line);
                const isAgeLine = processedLine.includes('age_years_continuous');
                return (
                  <div key={index} className="code-line">
                    <span className="line-number">{index + 1}</span>
                    <span className="line-content">
                      {highlightLine(processedLine, isAgeLine)}
                      {isExpanded && expandAnimPhase === 'typing' && index === visibleLineCount - 1 && (
                        <span className="cursor" />
                      )}
                    </span>
                  </div>
                );
              })}
              {isExpanded && isTypingComplete && (
                <div className="code-line" style={{ marginTop: '4px' }}>
                  <span className="line-number" />
                  <span className="line-content">
                    <span className="cursor" />
                  </span>
                </div>
              )}
            </div>

            {/* Minimal +/- Button */}
            <button className="expand-button" onClick={handleExpand} aria-label={isExpanded ? 'Collapse' : 'Expand'}>
              <div className={`expand-icon ${isExpanded ? 'minus' : ''}`} />
            </button>
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