'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
  blurhash?: string;
  aspectRatio?: string;
  lazyBoundary?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  fallbackSrc = '/images/placeholder.jpg',
  blurhash,
  aspectRatio = 'aspect-square',
  lazyBoundary = '400px',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(blurhash || fallbackSrc);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    setImageSrc(blurhash || fallbackSrc);
  }, [src, blurhash, fallbackSrc]);

  return (
    <div className={cn("relative overflow-hidden bg-gray-100", aspectRatio, className)}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        quality={props.quality || 85}
        loading={props.priority ? "eager" : "lazy"}
        fetchPriority={props.priority ? "high" : "auto"}
        lazyBoundary={lazyBoundary}
        placeholder={blurhash ? "blur" : "empty"}
        blurDataURL={blurhash}
        className={cn(
          "object-cover transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
        </div>
      )}
    </div>
  );
} 