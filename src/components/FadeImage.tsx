"use client";

import { useState } from "react";
import Image from "next/image";

interface FadeImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill";
  priority?: boolean;
  style?: React.CSSProperties;
}

export default function FadeImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  objectFit = "cover",
  priority = false,
  style = {}
}: FadeImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspectRatio || `${width}/${height}`,
        backgroundColor: "#000",
        overflow: "hidden",
        ...style
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: objectFit,
          display: "block",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
    </div>
  );
}
