"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (!isDragging) {
        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent || 0);
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [isDragging]);

  // Auto-hide controls on mobile after 3 seconds
  const showControlsTemporarily = useCallback(() => {
    setShowControls(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    if (isMobile) {
      hideTimeoutRef.current = setTimeout(() => {
        if (!isDragging) {
          setShowControls(false);
        }
      }, 3000);
    }
  }, [isMobile, isDragging]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    if (isMobile) {
      showControlsTemporarily();
    } else {
      togglePlay();
    }
  };

  const calculateProgress = useCallback((clientX: number) => {
    if (!progressRef.current || !videoRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setProgress(percent * 100);
    videoRef.current.currentTime = percent * videoRef.current.duration;
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    calculateProgress(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    calculateProgress(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        calculateProgress(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        calculateProgress(e.touches[0].clientX);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, calculateProgress]);

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, Math.min(
        videoRef.current.duration,
        videoRef.current.currentTime + seconds
      ));
    }
    showControlsTemporarily();
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#000",
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
      }}
      onMouseEnter={() => !isMobile && setShowControls(true)}
      onMouseLeave={() => !isMobile && !isDragging && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onClick={handleVideoClick}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          cursor: "pointer",
        }}
      />
      
      {/* Controls Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? "16px 12px" : "24px 20px",
          background: showControls ? "linear-gradient(transparent, rgba(0,0,0,0.6))" : "transparent",
          opacity: showControls ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: showControls ? "auto" : "none",
        }}
      >
        {/* Progress Bar Container */}
        <div
          ref={progressRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{
            width: "100%",
            height: "20px",
            cursor: "pointer",
            marginBottom: isMobile ? "8px" : "12px",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Track */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1.5px",
              backgroundColor: "rgba(255,255,255,0.25)",
              borderRadius: "1px",
            }}
          />
          {/* Progress Fill */}
          <div
            style={{
              position: "absolute",
              left: 0,
              height: "1.5px",
              width: `${progress}%`,
              backgroundColor: "#FAFAF8",
              borderRadius: "1px",
            }}
          />
          {/* Scrubber */}
          <div
            style={{
              position: "absolute",
              left: `${progress}%`,
              transform: "translateX(-50%)",
              width: isDragging ? "10px" : "6px",
              height: isDragging ? "10px" : "6px",
              backgroundColor: "#FAFAF8",
              borderRadius: "50%",
              transition: isDragging ? "none" : "width 0.15s ease, height 0.15s ease",
              boxShadow: "0 0 8px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        {/* Control Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? "24px" : "28px",
          }}
        >
          {/* Rewind */}
          <button
            onClick={() => skip(-10)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.6,
            }}
            aria-label="Rewind 10 seconds"
          >
            <svg width={isMobile ? "18" : "16"} height={isMobile ? "18" : "16"} viewBox="0 0 24 24" fill="none">
              <path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z" fill="#FAFAF8"/>
            </svg>
          </button>

          {/* Play/Pause */}
          <button
            onClick={() => { togglePlay(); showControlsTemporarily(); }}
            style={{
              width: isMobile ? "36px" : "36px",
              height: isMobile ? "36px" : "36px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="2" y="1" width="2.5" height="10" fill="#FAFAF8" rx="0.5" />
                <rect x="7.5" y="1" width="2.5" height="10" fill="#FAFAF8" rx="0.5" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 1L10 6L3 11V1Z" fill="#FAFAF8" />
              </svg>
            )}
          </button>

          {/* Forward */}
          <button
            onClick={() => skip(10)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.6,
            }}
            aria-label="Forward 10 seconds"
          >
            <svg width={isMobile ? "18" : "16"} height={isMobile ? "18" : "16"} viewBox="0 0 24 24" fill="none">
              <path d="M12 5V1L17 6L12 11V7C8.69 7 6 9.69 6 13C6 16.31 8.69 19 12 19C15.31 19 18 16.31 18 13H20C20 17.42 16.42 21 12 21C7.58 21 4 17.42 4 13C4 8.58 7.58 5 12 5Z" fill="#FAFAF8"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
