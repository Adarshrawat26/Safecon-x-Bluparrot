import { useEffect, useRef, useState } from 'react';

type HeroBackgroundVideoProps = {
  /** Public URL, e.g. /videos/hero-drone.mp4 */
  videoSrc: string;
  /** Same frame as static hero — fast first paint, good LCP */
  posterSrc: string;
  imageFallbackSrc: string;
  mediaClassName: string;
};

/** Video hero with poster + light preload; falls back to image if motion is reduced or play fails. */
export function HeroBackgroundVideo({
  videoSrc,
  posterSrc,
  imageFallbackSrc,
  mediaClassName,
}: HeroBackgroundVideoProps) {
  const [mode, setMode] = useState<'video' | 'image'>('video');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setMode(reduceMotion.matches ? 'image' : 'video');
    apply();
    reduceMotion.addEventListener('change', apply);
    return () => reduceMotion.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    if (mode !== 'video') return;
    const el = videoRef.current;
    if (!el) return;
    const tryPlay = () => {
      el.play().catch(() => setMode('image'));
    };
    if (el.readyState >= 2) tryPlay();
    else el.addEventListener('canplay', tryPlay, { once: true });
    return () => el.removeEventListener('canplay', tryPlay);
  }, [mode]);

  if (mode === 'image') {
    return (
      <img
        src={imageFallbackSrc}
        alt=""
        className={`absolute inset-0 w-full h-full ${mediaClassName}`}
        fetchPriority="high"
        decoding="async"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full ${mediaClassName}`}
      autoPlay
      muted
      loop
      playsInline
      poster={posterSrc}
      preload="metadata"
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
