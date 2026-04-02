import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  height?: 'full' | 'tall' | 'medium' | 'extended';
  align?: 'left' | 'center';
  /** Optional full-bleed photo (defence / manufacturing) with dark scrim for type */
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  /** Narrow measure, stronger L→R scrim, calmer photo — About-style storytelling */
  editorialLayout?: boolean;
}

export const PageHero = ({
  badge,
  title,
  description,
  children,
  height = 'tall',
  align = 'left',
  imageSrc,
  imageAlt = '',
  imagePosition = 'object-center',
  editorialLayout = false,
}: PageHeroProps) => {
  const heights = {
    full: 'min-h-screen',
    tall: 'min-h-[716px]',
    medium: 'min-h-[50vh]',
    extended: 'min-h-[min(870px,92vh)]',
  };

  return (
    <header
      className={`relative ${heights[height]} flex items-center overflow-hidden pt-[72px] ${
        editorialLayout ? 'px-6 md:px-12' : 'px-8 md:px-24'
      }`}
    >
      <div className="absolute inset-0 z-0">
        {imageSrc ? (
          <>
            <img
              src={imageSrc}
              alt={imageAlt}
              className={`absolute inset-0 w-full h-full object-cover ${imagePosition} ${
                editorialLayout ? 'brightness-[0.55] contrast-[1.05] scale-[1.02]' : ''
              }`}
              fetchPriority="high"
            />
            {editorialLayout ? (
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    'linear-gradient(to right, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.2) 100%)',
                }}
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/50" />
              </>
            )}
            {editorialLayout && (
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />
            )}
          </>
        ) : (
          <>
            <div className="w-full h-full bg-gradient-to-br from-background via-surface-container-low to-surface-container opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative z-10 w-full ${editorialLayout ? 'max-w-[1200px] mx-auto' : ''} ${
          align === 'center' ? 'mx-auto text-center' : ''
        } ${editorialLayout ? '' : 'max-w-4xl'}`}
      >
        {badge &&
          (editorialLayout ? (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22c7a8]/35 bg-[#22c7a8]/10 px-4 py-1.5 text-[11px] font-headline font-bold uppercase tracking-[0.2em] text-[#22c7a8]">
              {badge}
            </p>
          ) : (
            <SectionLabel label={badge} className="mb-6" />
          ))}

        <div className={editorialLayout ? 'max-w-[600px]' : ''}>
          <h1
            className={`font-headline font-bold tracking-tight text-white mb-6 ${
              editorialLayout ? 'text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.08]' : 'text-5xl md:text-7xl leading-tight mb-8'
            }`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={
                editorialLayout
                  ? 'text-[#bfc6cc] text-base md:text-[1.05rem] leading-[1.6] font-normal'
                  : 'text-on-surface-variant text-lg md:text-xl max-w-2xl font-light leading-relaxed'
              }
            >
              {description}
            </p>
          )}

          {children}
        </div>
      </motion.div>

      {!imageSrc && (
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none z-[1]">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent z-10" />
          <div className="w-full h-full bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container-lowest" />
        </div>
      )}
    </header>
  );
};

/* ─── Section Label (tertiary line + text) ─── */
interface SectionLabelProps {
  label: string;
  className?: string;
}

export const SectionLabel = ({ label, className = '' }: SectionLabelProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="w-12 h-px bg-tertiary" />
    <span className="text-tertiary font-label text-xs uppercase tracking-[0.2em] font-bold">
      {label}
    </span>
  </div>
);

/* ─── Glass Panel ─── */
interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export const GlassPanel = ({ children, className = '' }: GlassPanelProps) => (
  <div
    className={`rounded-[var(--radius)] min-h-0 ring-1 ring-white/[0.08] ${className}`}
    style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(12px)' }}
  >
    {children}
  </div>
);

/* ─── Tonal Card (hoverable surface card) ─── */
interface TonalCardProps {
  children: ReactNode;
  className?: string;
}

export const TonalCard = ({ children, className = '' }: TonalCardProps) => (
  <motion.div
    whileHover={{ backgroundColor: 'rgba(50, 57, 68, 1)', y: -3 }}
    transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
    whileTap={{ scale: 0.992 }}
    className={`bg-surface-container-low p-8 transition-shadow duration-300 rounded-2xl h-full min-h-0 flex flex-col shadow-sm hover:shadow-lg hover:shadow-black/20 ${className}`}
  >
    {children}
  </motion.div>
);

/* ─── Stat Card ─── */
interface StatCardProps {
  value: string;
  label: string;
  color?: 'primary' | 'tertiary';
}

export const StatCard = ({ value, label, color = 'primary' }: StatCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -2 }}
    transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    className="bg-surface-container-highest p-8 rounded-2xl h-full min-h-[168px] flex flex-col justify-center ring-1 ring-white/[0.04]"
  >
    <span className={`${color === 'primary' ? 'text-primary' : 'text-tertiary'} text-4xl font-headline font-bold block mb-2`}>
      {value}
    </span>
    <span className="text-xs font-label uppercase tracking-widest text-outline">{label}</span>
  </motion.div>
);

/* ─── Chip / Tag ─── */
interface ChipProps {
  label: string;
  variant?: 'default' | 'tertiary';
}

export const Chip = ({ label, variant = 'default' }: ChipProps) => (
  <span
    className={`px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-bold ${
      variant === 'tertiary'
        ? 'bg-tertiary/10 text-tertiary'
        : 'bg-surface-container-highest text-outline'
    }`}
  >
    {label}
  </span>
);

/* ─── Tech Tag (small inline chip for cards) ─── */
interface TechTagProps {
  label: string;
}

export const TechTag = ({ label }: TechTagProps) => (
  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[9px] font-bold uppercase tracking-[0.1em] text-on-surface-variant">
    {label}
  </span>
);

/* ─── Value Item (indented block used in Company Story) ─── */
interface ValueItemProps {
  title: string;
  description: string;
}

export const ValueItem = ({ title, description }: ValueItemProps) => (
  <div className="group pl-6">
    <h4 className="text-primary font-headline font-bold mb-1">{title}</h4>
    <p className="text-sm text-on-surface-variant/80">{description}</p>
  </div>
);

/* ─── Feature Row (icon + title + description, used in Training) ─── */
interface FeatureRowProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureRow = ({ icon, title, description }: FeatureRowProps) => (
  <div className="flex gap-6 items-start">
    <div className="bg-surface p-3 rounded-xl flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-sm uppercase mb-1 tracking-wider text-on-background">{title}</h4>
      <p className="text-xs text-on-surface-variant font-light leading-relaxed">{description}</p>
    </div>
  </div>
);

/* ─── Bullet Item (tertiary dash + text) ─── */
interface BulletItemProps {
  text: string;
}

export const BulletItem = ({ text }: BulletItemProps) => (
  <li className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
    <span className="h-1 w-4 bg-tertiary flex-shrink-0" />
    {text}
  </li>
);

/* ─── Progress Bar ─── */
interface ProgressBarProps {
  label: string;
  status: string;
  percent: number;
  delay?: number;
}

export const ProgressBar = ({ label, status, percent, delay = 0 }: ProgressBarProps) => (
  <div className="space-y-2">
    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-outline">
      <span>{label}</span>
      <span className="text-tertiary">{status}</span>
    </div>
    <div className="h-1 bg-surface-container-lowest w-full rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay }}
        className="h-full bg-tertiary"
      />
    </div>
  </div>
);

/* ─── CTA Banner ─── */
interface CtaBannerProps {
  title: string;
  description: string;
  children: ReactNode;
  bg?: string;
}

export const CtaBanner = ({ title, description, children, bg = 'bg-surface-container-lowest' }: CtaBannerProps) => (
  <section className={`py-24 md:py-[100px] px-6 md:px-12 border-t border-white/[0.06] ${bg}`}>
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="rounded-[20px] border border-white/[0.08] px-8 py-12 md:px-14 md:py-14 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.02] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background mb-4 leading-[1.15] tracking-tight">
              {title}
            </h2>
            <p className="text-[#bfc6cc] text-base leading-[1.65]">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">{children}</div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Buttons (design-system compliant) ─── */
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const DSButton = ({ children, variant = 'primary', className = '' }: ButtonProps) => {
  const base =
    'px-7 py-3 font-headline font-bold uppercase tracking-widest text-xs rounded-full whitespace-nowrap transition-[transform,box-shadow,background-color,border-color] duration-[250ms] ease-out';
  const variants = {
    primary:
      'ds-interactive bg-primary text-on-primary-fixed shadow-md shadow-black/15 hover:brightness-[1.03]',
    outline:
      'bg-transparent border border-white/20 text-on-background shadow-none hover:bg-white/[0.06] hover:border-white/25',
  };
  return (
    <motion.button
      type="button"
      whileHover={variant === 'outline' ? undefined : { scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 480, damping: 22 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

/* ─── Section Container ─── */
interface SectionProps {
  children: ReactNode;
  bg?: string;
  className?: string;
  wide?: boolean;
}

/** Site container: 1200px max, 48px horizontal padding, 100px vertical rhythm (override with className when needed). */
export const Section = ({ children, bg = 'bg-surface', className = '', wide = false }: SectionProps) => (
  <section
    className={`px-6 md:px-12 py-24 md:py-[100px] ${bg} ${className}`}
  >
    <div className={`mx-auto w-full ${wide ? 'max-w-[1400px]' : 'max-w-[1200px]'}`}>{children}</div>
  </section>
);
