"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
  quality?: number;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  lazy = true,
  quality = 85 // Optimized quality setting
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Calculate aspect ratio to prevent layout shift
  const aspectRatio = width / height;

  return (
    <div 
      className="relative"
      style={{ 
        aspectRatio: `${aspectRatio}`,
        width: '100%'
      }}
    >
      {!isLoaded && !priority && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"
          style={{ aspectRatio: `${aspectRatio}` }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        className={`${className} ${isLoaded || priority ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        priority={priority}
        loading={lazy && !priority ? "lazy" : "eager"}
        onLoad={() => setIsLoaded(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
        style={{ 
          width: '100%',
          height: 'auto',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}