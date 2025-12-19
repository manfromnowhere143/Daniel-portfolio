"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FadeImage from "@/components/FadeImage";

export default function Octopus() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [systemOpen, setSystemOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [pendingImage, setPendingImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = '';
    setTimeout(() => setIsLoaded(true), 100);
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Image preloading for gallery
  const handleImageSelect = (src: string) => {
    setPendingImage(src);
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => {
      setSelectedImage(src);
      setImageLoaded(true);
      setPendingImage(null);
    };
    img.src = src;
  };

  const handleImageClose = () => {
    setSelectedImage(null);
    setImageLoaded(false);
    setPendingImage(null);
  };

  // Story paragraphs
  const storyParagraphs = [
    "This project is a strong reminder to me. Every time I doubt myself I should remember this. The vision was clear: a wrapped LLM that creates websites, Three.js games, Web3 applications. Nice, me and another million people. But that isn't the point.",
    "This was my first serious project. I didn't know what tests are. What backend is. Of course not database. But with intuition I managed to build my first API connection with an LLM, then round-robin pipelines, then the memory structure of Octopus. Days and nights breaking my head over it with no one actually noticing.",
    "Still a thing though. My nephew asked my mom to make him challah bread in an octopus shape, for me. This act will always remind me what good is. This fellow is Inbar."
  ];

  // Architecture
  const architecture = [
    { name: "Goal Parser", desc: "Natural language to structured goal with intent classification" },
    { name: "Task Decomposer", desc: "Top-down, bottom-up, hybrid, template, and learned strategies" },
    { name: "Plan Executor", desc: "Sequential, parallel, adaptive, priority, round-robin execution" },
    { name: "Task Graph", desc: "NetworkX DAG with dependency resolution and topological ordering" },
    { name: "Event Sourcing", desc: "Immutable cognitive events with causality chain tracking" },
    { name: "REST API", desc: "FastAPI endpoints for goal processing and system status" }
  ];

  // Tri-Store Memory
  const memoryStores = [
    { name: "Semantic", desc: "Facts, concepts, knowledge graph with similarity-based retrieval" },
    { name: "Episodic", desc: "Time-ordered events with temporal context and emotional valence" },
    { name: "Procedural", desc: "Workflow storage, execution tracking, and pattern learning" }
  ];

  // Gallery images
  const galleryImages = [
    "/images/octopushero3.png",
    "/images/ophoto1.jpg",
    "/images/ophoto2.jpg"
  ];

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* OCTOPUS - VOID ELEGANCE                                                         */
        /* Fixed viewport, floating elements, pure white on black                          */
        /* Making Elon, Sam, and Steve proud                                               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --oc-bg: #000000;
          --oc-text: #FFFFFF;
          --oc-text-soft: rgba(255, 255, 255, 0.75);
          --oc-text-muted: rgba(255, 255, 255, 0.4);
          --oc-border: rgba(255, 255, 255, 0.1);
        }
        
        [data-theme="light"] {
          --oc-bg: #FAFAFA;
          --oc-text: #000000;
          --oc-text-soft: rgba(0, 0, 0, 0.7);
          --oc-text-muted: rgba(0, 0, 0, 0.4);
          --oc-border: rgba(0, 0, 0, 0.1);
        }

        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          overscroll-behavior: none;
          overflow: hidden;
          touch-action: none;
        }

        .oc-page {
          position: fixed !important;
          inset: 0 !important;
          background: var(--oc-bg);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 2.2vh, 22px);
          padding: 60px 20px 80px;
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          -webkit-font-smoothing: antialiased;
        }
        
        .oc-page.loaded { opacity: 1; }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* TITLE                                                                           */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-title {
          font-size: clamp(28px, 6vw, 52px);
          font-weight: 100;
          color: var(--oc-text);
          letter-spacing: 0.25em;
          margin: 0;
          text-transform: uppercase;
          opacity: 0;
          animation: oc-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
        }
        
        .oc-tagline {
          font-size: clamp(10px, 1.8vw, 13px);
          font-weight: 300;
          color: var(--oc-text);
          letter-spacing: 0.15em;
          margin: clamp(-6px, -1vh, -2px) 0 0;
          text-transform: uppercase;
          opacity: 0;
          animation: oc-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        }
        
        @keyframes oc-spring-up {
          0% { opacity: 0; transform: translateY(30px) scale(0.96); }
          60% { transform: translateY(-4px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* HERO IMAGE + ACTION BUTTONS                                                     */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-media {
          display: flex;
          align-items: center;
          gap: clamp(16px, 3.5vw, 32px);
          opacity: 0;
          animation: oc-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
        }

        .oc-hero-image {
          width: clamp(140px, 28vw, 200px);
          height: clamp(100px, 20vw, 140px);
          border-radius: clamp(10px, 2vw, 16px);
          overflow: hidden;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.08),
            0 30px 80px rgba(0,0,0,0.5);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .oc-hero-image:hover {
          transform: scale(1.05);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.12),
            0 40px 100px rgba(0,0,0,0.6);
        }
        
        .oc-hero-image:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
        
        [data-theme="light"] .oc-hero-image {
          box-shadow: 
            0 0 0 1px rgba(0,0,0,0.08),
            0 30px 80px rgba(0,0,0,0.15);
        }

        .oc-actions {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.5vw, 14px);
        }
        
        .oc-action-btn {
          width: clamp(56px, 10vw, 72px);
          height: clamp(56px, 10vw, 72px);
          border-radius: clamp(14px, 2.5vw, 18px);
          border: none;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          overflow: hidden;
        }
        
        /* Story Button - Deep coral/rose */
        .oc-action-btn.story {
          background: linear-gradient(145deg, 
            #1a0a0a 0%, 
            #2d1215 40%,
            #401a1e 70%,
            #2d1215 100%
          );
          box-shadow: 
            0 0 0 1px rgba(140, 60, 70, 0.25),
            0 10px 40px rgba(45, 18, 21, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }
        
        .oc-action-btn.story:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(140, 60, 70, 0.4),
            0 20px 60px rgba(45, 18, 21, 0.9),
            0 0 60px rgba(140, 60, 70, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }
        
        /* System Button - Deep teal */
        .oc-action-btn.system {
          background: linear-gradient(145deg, 
            #051414 0%, 
            #0a2828 40%,
            #0f3d3d 70%,
            #0a2828 100%
          );
          box-shadow: 
            0 0 0 1px rgba(40, 140, 140, 0.25),
            0 10px 40px rgba(10, 40, 40, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        
        .oc-action-btn.system:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(40, 140, 140, 0.4),
            0 20px 60px rgba(10, 40, 40, 0.9),
            0 0 60px rgba(40, 140, 140, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }
        
        /* Gallery Button - Deep amber */
        .oc-action-btn.gallery {
          background: linear-gradient(145deg, 
            #14100a 0%, 
            #28200f 40%,
            #3d3014 70%,
            #28200f 100%
          );
          box-shadow: 
            0 0 0 1px rgba(140, 120, 40, 0.25),
            0 10px 40px rgba(40, 32, 15, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        
        .oc-action-btn.gallery:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 1px rgba(140, 120, 40, 0.4),
            0 20px 60px rgba(40, 32, 15, 0.9),
            0 0 60px rgba(140, 120, 40, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }
        
        .oc-action-btn:active {
          transform: scale(0.95) !important;
          transition: transform 0.1s ease !important;
        }
        
        .oc-action-btn svg {
          width: clamp(20px, 3.5vw, 26px);
          height: clamp(20px, 3.5vw, 26px);
          color: #FFFFFF;
        }
        
        .oc-action-btn span {
          font-size: clamp(7px, 1.2vw, 9px);
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        
        .oc-action-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* MEMORY STORES ROW                                                               */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-memory-row {
          display: flex;
          gap: clamp(24px, 5vw, 40px);
          opacity: 0;
          animation: oc-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
        }
        
        .oc-memory-item {
          text-align: center;
        }
        
        .oc-memory-name {
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 300;
          color: var(--oc-text);
          letter-spacing: 0.08em;
        }
        
        .oc-memory-sub {
          font-size: clamp(8px, 1.3vw, 10px);
          font-weight: 400;
          color: var(--oc-text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* TECH PILLS                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-pills {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(6px, 1vw, 10px);
          justify-content: center;
          max-width: 600px;
          opacity: 0;
          animation: oc-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
        }
        
        .oc-pill {
          font-size: clamp(9px, 1.6vw, 12px);
          font-weight: 300;
          letter-spacing: 0.04em;
          color: var(--oc-text);
          padding: clamp(5px, 0.8vh, 8px) clamp(12px, 2vw, 18px);
          background: transparent;
          border: 1px solid var(--oc-border);
          border-radius: 100px;
          white-space: nowrap;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }
        
        .oc-pill:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
        
        [data-theme="light"] .oc-pill:hover {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.15);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* REFLECTION SYSTEM BADGE                                                         */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-reflection {
          opacity: 0;
          animation: oc-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s forwards;
          text-align: center;
        }
        
        .oc-reflection-label {
          font-size: clamp(8px, 1.2vw, 9px);
          font-weight: 500;
          color: var(--oc-text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        
        .oc-reflection-items {
          font-size: clamp(10px, 1.6vw, 12px);
          font-weight: 300;
          color: var(--oc-text-soft);
          letter-spacing: 0.03em;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* NAVIGATION - Above sidebar                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-nav {
          position: fixed;
          bottom: clamp(85px, 11vh, 100px);
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: clamp(80px, 25vw, 200px);
          z-index: 10;
          opacity: 0;
          animation: oc-spring-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
        }
        
        .oc-nav a {
          font-size: clamp(11px, 1.8vw, 13px);
          font-weight: 400;
          color: var(--oc-text);
          text-decoration: none;
          letter-spacing: 0.05em;
          opacity: 0.6;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .oc-nav a:hover {
          opacity: 1;
          transform: translateX(5px);
        }
        
        .oc-nav a:first-child:hover {
          transform: translateX(-5px);
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* OVERLAYS                                                                        */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.98);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          opacity: 0;
          animation: oc-overlay-fade 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: opacity;
          transform: translateZ(0);
        }
        
        @keyframes oc-overlay-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        [data-theme="light"] .oc-overlay {
          background: rgba(250,250,250,0.98);
        }
        
        .oc-close {
          position: fixed;
          bottom: clamp(20px, 4vh, 36px);
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          z-index: 1001;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          animation: oc-close-fade 0.3s ease 0.15s forwards;
        }
        
        @keyframes oc-close-fade {
          from { opacity: 0; transform: translateX(-50%) scale(0.9); }
          to { opacity: 1; transform: translateX(-50%) scale(1); }
        }
        
        [data-theme="light"] .oc-close {
          background: rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.1);
        }
        
        .oc-close:hover {
          background: rgba(255,255,255,0.2);
          transform: translateX(-50%) scale(1.08);
        }
        
        .oc-close svg {
          width: 22px;
          height: 22px;
          color: #FFFFFF;
        }
        
        [data-theme="light"] .oc-close svg {
          color: #000000;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* STORY CARD                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-story-card {
          width: clamp(300px, 85vw, 500px);
          max-height: 70vh;
          background: rgba(10, 10, 12, 0.95);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 
            0 60px 160px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.05);
          opacity: 0;
          transform: scale(0.96);
          animation: oc-card-smooth 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          overflow: hidden;
          position: relative;
        }
        
        @keyframes oc-card-smooth {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        [data-theme="light"] .oc-story-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 60px 160px rgba(0,0,0,0.2);
        }
        
        .oc-card-header {
          padding: clamp(16px, 3vw, 24px) clamp(20px, 4vw, 28px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-align: center;
        }
        
        [data-theme="light"] .oc-card-header {
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        
        .oc-card-title {
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 400;
          color: var(--oc-text);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }
        
        .oc-card-scroll {
          position: relative;
          max-height: calc(70vh - 80px);
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .oc-card-scroll::-webkit-scrollbar {
          display: none;
        }
        
        .oc-card-content {
          padding: clamp(20px, 4vw, 32px) clamp(20px, 4vw, 28px);
        }
        
        .oc-card-content p {
          font-size: clamp(13px, 2vw, 15px);
          font-weight: 300;
          color: var(--oc-text);
          line-height: 1.8;
          margin: 0 0 clamp(16px, 3vw, 24px);
          letter-spacing: 0.01em;
        }
        
        .oc-card-content p:last-child {
          margin-bottom: 0;
        }
        
        /* Fade overlays */
        .oc-fade-top {
          position: absolute;
          top: 60px;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(to bottom, 
            rgba(10, 10, 12, 0.95) 0%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 10;
        }
        
        .oc-fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to top, 
            rgba(10, 10, 12, 0.95) 0%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 10;
        }
        
        [data-theme="light"] .oc-fade-top {
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.98) 0%,
            transparent 100%
          );
        }
        
        [data-theme="light"] .oc-fade-bottom {
          background: linear-gradient(to top, 
            rgba(255, 255, 255, 0.98) 0%,
            transparent 100%
          );
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* SYSTEM CARD - Architecture + Memory                                             */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-system-card {
          width: clamp(300px, 85vw, 480px);
          max-height: 65vh;
          background: rgba(10, 10, 12, 0.95);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 
            0 60px 160px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.05);
          opacity: 0;
          transform: scale(0.96);
          animation: oc-card-smooth 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          overflow: hidden;
        }
        
        [data-theme="light"] .oc-system-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 60px 160px rgba(0,0,0,0.2);
        }
        
        .oc-system-scroll {
          max-height: calc(65vh - 60px);
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: clamp(16px, 3vw, 22px);
        }
        
        .oc-system-scroll::-webkit-scrollbar {
          display: none;
        }
        
        .oc-section-label {
          font-size: clamp(9px, 1.4vw, 10px);
          font-weight: 500;
          color: var(--oc-text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: clamp(12px, 2vw, 16px);
          text-align: center;
        }
        
        .oc-arch-list {
          margin-bottom: clamp(20px, 3vw, 28px);
        }
        
        .oc-arch-item {
          display: flex;
          align-items: baseline;
          gap: clamp(8px, 1.5vw, 12px);
          padding: clamp(6px, 1vh, 10px) 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        
        .oc-arch-item:last-child {
          border-bottom: none;
        }
        
        [data-theme="light"] .oc-arch-item {
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        
        .oc-arch-num {
          font-size: 10px;
          color: var(--oc-text-muted);
          font-family: 'SF Mono', Monaco, monospace;
          min-width: 18px;
          flex-shrink: 0;
        }
        
        .oc-arch-name {
          font-size: clamp(12px, 1.8vw, 14px);
          font-weight: 400;
          color: var(--oc-text);
          min-width: clamp(90px, 15vw, 120px);
          flex-shrink: 0;
        }
        
        .oc-arch-desc {
          font-size: clamp(11px, 1.5vw, 12px);
          color: var(--oc-text-soft);
          font-weight: 300;
          line-height: 1.5;
        }
        
        @media (max-width: 500px) {
          .oc-arch-item {
            flex-wrap: wrap;
          }
          .oc-arch-desc {
            flex-basis: 100%;
            padding-left: 28px;
            margin-top: 4px;
          }
        }
        
        /* Memory Grid in System - Compact */
        .oc-memory-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(8px, 1.5vw, 12px);
        }
        
        @media (max-width: 400px) {
          .oc-memory-grid {
            grid-template-columns: 1fr;
            gap: clamp(10px, 2vw, 14px);
          }
        }
        
        .oc-mem-card {
          text-align: center;
          padding: clamp(10px, 1.5vw, 14px);
          background: rgba(255,255,255,0.03);
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        
        [data-theme="light"] .oc-mem-card {
          background: rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.06);
        }
        
        .oc-mem-title {
          font-size: clamp(12px, 1.8vw, 14px);
          font-weight: 400;
          color: var(--oc-text);
          margin: 0 0 6px;
          letter-spacing: 0.02em;
        }
        
        .oc-mem-desc {
          font-size: clamp(10px, 1.4vw, 11px);
          color: var(--oc-text-soft);
          font-weight: 300;
          line-height: 1.5;
          margin: 0;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* GALLERY CARD                                                                    */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        .oc-gallery-card {
          width: clamp(280px, 80vw, 360px);
          background: rgba(10, 10, 12, 0.98);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          padding: clamp(14px, 2.5vw, 20px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 
            0 60px 160px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.05);
          opacity: 0;
          transform: scale(0.96);
          animation: oc-card-smooth 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform, opacity;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        
        [data-theme="light"] .oc-gallery-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 60px 160px rgba(0,0,0,0.2);
        }
        
        .oc-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(8px, 1.5vw, 12px);
        }
        
        .oc-gallery-item {
          aspect-ratio: 4/3;
          border-radius: clamp(8px, 1.5vw, 12px);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          position: relative;
          background: #0a0a0a;
        }
        
        .oc-gallery-item:first-child {
          grid-column: span 2;
        }
        
        .oc-gallery-item:hover {
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 12px 40px rgba(0,0,0,0.6);
        }
        
        .oc-gallery-item:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
        
        .oc-gallery-item.loading {
          pointer-events: none;
        }
        
        .oc-gallery-item.loading img {
          opacity: 0.5;
        }
        
        .oc-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          animation: oc-img-fade 0.3s ease 0.1s forwards;
        }
        
        @keyframes oc-img-fade {
          to { opacity: 1; }
        }
        
        .oc-gallery-loader {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        
        .oc-spinner {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: rgba(255,255,255,0.9);
          border-radius: 50%;
          animation: oc-spin 0.8s linear infinite;
        }
        
        @keyframes oc-spin {
          to { transform: rotate(360deg); }
        }
        
        /* Expanded Image */
        .oc-image-full {
          position: absolute;
          max-width: calc(100vw - 32px);
          max-height: 80vh;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.08),
            0 60px 160px rgba(0,0,0,0.9);
          opacity: 0;
          transform: scale(1) translateZ(0);
          animation: oc-image-crossfade 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform, opacity;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        
        @keyframes oc-image-crossfade {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .oc-image-full img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          display: block;
        }
        
        [data-theme="light"] .oc-image-full {
          background: #f5f5f3;
        }

        /* ═══════════════════════════════════════════════════════════════════════════════ */
        /* RESPONSIVE                                                                      */
        /* ═══════════════════════════════════════════════════════════════════════════════ */
        
        @media (min-width: 768px) {
          .oc-actions {
            flex-direction: row;
            gap: clamp(12px, 2vw, 20px);
          }
        }
        
        @media (max-height: 700px) {
          .oc-page {
            gap: clamp(10px, 2vh, 16px);
            padding: 50px 20px 70px;
          }
          .oc-reflection {
            display: none;
          }
        }
        
        @media (max-height: 600px) {
          .oc-memory-row {
            display: none;
          }
          .oc-pill {
            padding: 4px 10px;
            font-size: 9px;
          }
        }
      `}</style>

      <div className={`oc-page ${isLoaded ? 'loaded' : ''}`}>
        {/* Title */}
        <h1 className="oc-title">Octopus</h1>
        <p className="oc-tagline">Cognitive Agent Framework</p>

        {/* Hero Image + Actions */}
        <div className="oc-media">
          <div className="oc-hero-image" onClick={() => setGalleryOpen(true)}>
            <FadeImage
              src="/images/octopushero3.png"
              alt="Octopus Interface"
              width={200}
              height={140}
              priority
            />
          </div>

          <div className="oc-actions">
            <button className="oc-action-btn story" onClick={() => setStoryOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 6v12M6 12h12" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>Story</span>
            </button>

            <button className="oc-action-btn system" onClick={() => setSystemOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>System</span>
            </button>

            <button className="oc-action-btn gallery" onClick={() => setGalleryOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span>Gallery</span>
            </button>
          </div>
        </div>

        {/* Memory Stores */}
        <div className="oc-memory-row">
          {memoryStores.map((store, i) => (
            <div key={i} className="oc-memory-item">
              <div className="oc-memory-name">{store.name}</div>
              <div className="oc-memory-sub">Memory</div>
            </div>
          ))}
        </div>

        {/* Tech Pills */}
        <div className="oc-pills">
          {["Python", "FastAPI", "MongoDB", "NetworkX", "ChromaDB", "Pydantic"].map((tech, i) => (
            <span key={i} className="oc-pill">{tech}</span>
          ))}
        </div>

        {/* Reflection System */}
        <div className="oc-reflection">
          <div className="oc-reflection-label">Reflection System</div>
          <div className="oc-reflection-items">Reflector · Meta-Reflector · Blind Spot Detector</div>
        </div>

        {/* Navigation */}
        <nav className="oc-nav">
          <Link href="/work/megaagent">← MegaAgent</Link>
          <Link href="/work/overmind">Overmind →</Link>
        </nav>
      </div>

      {/* Story Overlay */}
      {storyOpen && (
        <div className="oc-overlay" onClick={() => setStoryOpen(false)}>
          <div className="oc-story-card" onClick={e => e.stopPropagation()}>
            <div className="oc-card-header">
              <h2 className="oc-card-title">The Story</h2>
            </div>
            <div className="oc-fade-top" />
            <div className="oc-card-scroll">
              <div className="oc-card-content">
                {storyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="oc-fade-bottom" />
          </div>
          <button className="oc-close" onClick={() => setStoryOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* System Overlay */}
      {systemOpen && (
        <div className="oc-overlay" onClick={() => setSystemOpen(false)}>
          <div className="oc-system-card" onClick={e => e.stopPropagation()}>
            <div className="oc-card-header">
              <h2 className="oc-card-title">System Architecture</h2>
            </div>
            <div className="oc-system-scroll">
              {/* Architecture */}
              <p className="oc-section-label">Core Architecture</p>
              <div className="oc-arch-list">
                {architecture.map((item, i) => (
                  <div key={i} className="oc-arch-item">
                    <span className="oc-arch-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="oc-arch-name">{item.name}</span>
                    <span className="oc-arch-desc">{item.desc}</span>
                  </div>
                ))}
              </div>

              {/* Memory */}
              <p className="oc-section-label">Tri-Store Memory</p>
              <div className="oc-memory-grid">
                {memoryStores.map((store, i) => (
                  <div key={i} className="oc-mem-card">
                    <p className="oc-mem-title">{store.name}</p>
                    <p className="oc-mem-desc">{store.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="oc-close" onClick={() => setSystemOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Gallery Overlay */}
      {(galleryOpen || selectedImage) && (
        <div className="oc-overlay" onClick={() => { setGalleryOpen(false); handleImageClose(); }}>
          {/* Gallery Card */}
          <div
            className="oc-gallery-card"
            onClick={e => e.stopPropagation()}
            style={{
              opacity: selectedImage && imageLoaded ? 0 : 1,
              transform: selectedImage && imageLoaded ? 'scale(0.95)' : 'scale(1)',
              pointerEvents: selectedImage && imageLoaded ? 'none' : 'auto',
              transition: 'opacity 0.3s ease, transform 0.3s ease'
            }}
          >
            <div className="oc-gallery-grid">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className={`oc-gallery-item ${pendingImage === src ? 'loading' : ''}`}
                  onClick={() => handleImageSelect(src)}
                >
                  <FadeImage src={src} alt="" width={400} height={300} />
                  {pendingImage === src && (
                    <div className="oc-gallery-loader">
                      <div className="oc-spinner" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Expanded Image */}
          {selectedImage && imageLoaded && (
            <div
              className="oc-image-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
                setImageLoaded(false);
              }}
            >
              <img src={selectedImage} alt="" />
            </div>
          )}

          <button className="oc-close" onClick={() => { setGalleryOpen(false); handleImageClose(); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}