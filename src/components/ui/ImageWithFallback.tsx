import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '',
  width,
  height 
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  const placeholderSrc = `https://placehold.co/${width || 800}x${height || 600}/003366/ffffff?text=${encodeURIComponent(alt)}`;

  return (
    <LazyLoadImage
      src={error ? placeholderSrc : src}
      alt={alt}
      effect="blur"
      className={className}
      width={width}
      height={height}
      onError={() => setError(true)}
      placeholderSrc={placeholderSrc}
    />
  );
};
