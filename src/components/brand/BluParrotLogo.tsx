import logo from '../../assets/images/bluparrot-logo.svg';

type BluParrotLogoProps = {
  /** Tailwind classes. Prefer max-h-* + w-auto so the full mark scales proportionally (no crop). */
  className?: string;
};

/**
 * Blu Parrot Ventures logo (SVG from design export). Scales crisply; uses object-contain for full mark.
 */
export const BluParrotLogo = ({ className = 'max-h-10 w-auto' }: BluParrotLogoProps) => (
  <img
    src={logo}
    alt="Blu Parrot Ventures"
    className={`block object-contain object-left max-w-full h-auto ${className}`}
    loading="eager"
    decoding="async"
  />
);
