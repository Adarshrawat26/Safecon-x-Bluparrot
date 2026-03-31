import logo from '../../assets/images/safecon-logo.png';

type SafeconLogoProps = {
  className?: string;
};

export const SafeconLogo = ({ className = 'h-10 w-auto' }: SafeconLogoProps) => (
  <img
    src={logo}
    alt="Safecon Technologies — Revolutionizing Innovation"
    className={`object-contain object-left max-w-full ${className}`}
    loading="eager"
    decoding="async"
  />
);
