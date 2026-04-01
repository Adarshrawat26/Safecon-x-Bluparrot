import { motion } from 'framer-motion';
import {
    ArrowRight,
    BadgeCheck,
    Earth,
    Sparkles,
    Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BluParrotLogo } from '../components/brand/BluParrotLogo';
import { SafeconLogo } from '../components/brand/SafeconLogo';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import {
    BulletItem,
    DSButton,
    PageHero,
    Section,
    SectionLabel,
} from '../components/ui/DesignSystem';
import { aboutUs, globalSupplyChain, hero, indigenisation, stats, whyUs } from '../data/content';
import { siteImagery } from '../data/siteImagery';

const timeline = [
  { year: '1999', title: 'Safecon Founded', description: 'Defence manufacturing and indigenisation focus.' },
  { year: '2010s', title: 'Expansion & Expertise', description: 'Naval systems, SDR integration, and strategic programs.' },
  { year: '2020', title: 'Blu Parrot AI', description: 'Advanced AI and data science for defence intelligence.' },
  { year: 'Today', title: 'Safecon Blu Parrot', description: 'Unified manufacturing, AI, integration, and execution.' },
];

const differentiatorGroups: { label: string; items: string[] }[] = [
  {
    label: 'Capability',
    items: [whyUs.reasons[0], whyUs.reasons[1]],
  },
  {
    label: 'Strategy',
    items: [whyUs.reasons[2]],
  },
  {
    label: 'Execution',
    items: [whyUs.reasons[3], whyUs.reasons[4]],
  },
];

const flowHint = (text: string) => (
  <span className="block text-[10px] font-headline font-bold uppercase tracking-[0.28em] text-[#9aa3aa] mb-3">
    {text}
  </span>
);

export const AboutUs = () => {
  return (
    <div className="w-full">
      <PageHero
        editorialLayout
        badge="Safecon Blu Parrot Aerospace & Defence"
        title={
          <>
            About <span className="text-primary italic">Us</span>
          </>
        }
        description={`${hero.description[0]} ${hero.description[1]}`}
        height="tall"
        imageSrc={siteImagery.engineeringProduction.src}
        imageAlt={siteImagery.engineeringProduction.alt}
        imagePosition="object-[center_40%]"
      >
        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link to="/services">
            <motion.button
              type="button"
              className="ds-interactive inline-flex items-center justify-center bg-primary text-on-primary-fixed px-7 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs shadow-md shadow-black/20"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Core Capabilities
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              type="button"
              className="inline-flex items-center justify-center border border-white/20 text-white px-7 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs transition-colors duration-200 hover:bg-white/[0.06]"
              whileTap={{ scale: 0.98 }}
            >
              Partner With Us
            </motion.button>
          </Link>
        </div>
      </PageHero>

      {/* Who we are — dual entity + bridge */}
      <Section bg="bg-surface-container-low">
        <AnimatedSection>
          {flowHint('01 — Who we are')}
          <SectionLabel label={aboutUs.title} className="mb-4" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background mb-12 max-w-2xl leading-[1.2]">
            {aboutUs.intro}
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-[18%] h-[64%] w-px -translate-x-1/2 bg-white/[0.08] pointer-events-none"
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {aboutUs.companies.map((company, index) => (
              <AnimatedSection key={company.name} delay={index * 0.1} className="h-full min-h-0">
                <div className="h-full rounded-[16px] border border-white/[0.06] bg-white/[0.04] p-8 md:p-9 transition-[transform,background-color,box-shadow] duration-300 hover:bg-white/[0.06] motion-safe:hover:-translate-y-1">
                  <div className="mb-6 scale-90 opacity-90 origin-top-left">
                    {company.name === 'Safecon' ? (
                      <div className="rounded-xl bg-white p-3 inline-block max-w-full shadow-sm ring-1 ring-black/5">
                        <SafeconLogo className="h-10 sm:h-11 w-auto max-w-[200px]" />
                      </div>
                    ) : (
                      <div className="rounded-xl bg-white p-3 inline-block max-w-full shadow-sm ring-1 ring-black/5">
                        <BluParrotLogo className="max-h-16 sm:max-h-[4.5rem] w-auto max-w-full" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-background mb-4">{company.name}</h3>
                  <p className="text-[#9aa3aa] leading-[1.65] text-[0.9375rem]">{company.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.2} className="mt-14">
          {flowHint('02 — What we deliver')}
          <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.06] px-8 py-10 md:px-10 md:py-12 text-center shadow-[0_20px_48px_-28px_rgba(0,0,0,0.35)]">
            <p className="text-lg md:text-[1.125rem] text-white font-headline font-semibold leading-[1.55] max-w-3xl mx-auto">
              {aboutUs.conclusion}
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Manufacturing */}
      <Section bg="bg-surface-container-low">
        {flowHint('03 — How we work')}
        <div className="grid grid-cols-1 gap-12 items-center">
          <AnimatedSection delay={0.12}>
            <div className="max-w-[480px]">
              <SectionLabel label="Execution" className="mb-4" />
              <h2 className="font-headline text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-on-background mb-5 leading-[1.2]">
                Manufacturing and production, <span className="text-[#22c7a8]">held to programme discipline</span>
              </h2>
              <p className="text-[#bfc6cc] leading-[1.65] mb-5 text-[0.9375rem]">
                Our teams spend their time on shop floors, integration bays, and test cells—not only in conference rooms.
                That shapes how we quote, stage FAT, and support field deployment.
              </p>
              <p className="text-xs text-[#9aa3aa] leading-relaxed">
                Imagery is representative of industrial defence supply chains; customer sites and classified programmes are
                not shown on the public web.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Stats */}
      <Section bg="bg-background">
        {flowHint('04 — Proof')}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((s, i) => (
            <AnimatedSection key={s.id} delay={i * 0.08} className="h-full min-h-0">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="h-full rounded-[16px] border border-white/[0.06] bg-white/[0.05] p-[28px] flex flex-col justify-end min-h-[132px] transition-[background-color,box-shadow] duration-300 hover:bg-white/[0.08] hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.35)]"
              >
                <span
                  className={`font-headline text-[2.25rem] md:text-[2.5rem] font-semibold leading-none tracking-tight mb-3 ${
                    i % 2 === 0 ? 'text-primary' : 'text-[#22c7a8]'
                  }`}
                >
                  {s.value}
                </span>
                <p className="text-[12px] font-sans uppercase tracking-[1.5px] text-white/[0.6] m-0 leading-snug">
                  {s.label}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Differentiators */}
      <Section bg="bg-surface-container-low">
        <AnimatedSection>
          {flowHint('05 — Why us')}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
            <div>
              <SectionLabel label="Differentiators" className="mb-4" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background leading-[1.15]">
                {whyUs.title}
              </h2>
            </div>
            <p className="text-sm text-[#9aa3aa] max-w-[420px] lg:text-right leading-relaxed">
              What sets our alliance apart for aerospace, defence, and national security programmes.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiatorGroups.map((group, gi) => (
            <div key={group.label} className="flex flex-col gap-4">
              <p className="text-[11px] font-headline font-bold uppercase tracking-[0.22em] text-[#22c7a8] pl-1">
                {group.label}
              </p>
              <div className="flex flex-col gap-4 flex-1">
                {group.items.map((reason, ri) => (
                  <AnimatedSection key={`${group.label}-${ri}`} delay={gi * 0.08 + ri * 0.05}>
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.25 } }}
                      className="rounded-[14px] border border-white/[0.06] bg-white/[0.04] p-6 h-full min-h-[100px] flex items-start gap-3 transition-[background-color] duration-300 hover:bg-white/[0.06]"
                    >
                      <Target
                        className={(gi + ri) % 2 === 0 ? 'text-primary shrink-0 mt-0.5' : 'text-[#22c7a8] shrink-0 mt-0.5'}
                        size={24}
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <p className="text-on-background font-headline font-semibold text-sm leading-relaxed">{reason}</p>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Indigenisation + Global */}
      <Section bg="bg-background">
        {flowHint('06 — What we offer')}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          <AnimatedSection className="h-full min-h-0">
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-surface-container-low p-8 md:p-10 rounded-[16px] h-full flex flex-col min-h-[300px] border border-white/[0.06] transition-[background-color,box-shadow] duration-300 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Make_In_India.svg/200px-Make_In_India.svg.png"
                  alt="Make in India"
                  className="h-9 opacity-80"
                />
                <h3 className="font-headline text-xl font-bold text-on-background">{indigenisation.title}</h3>
              </div>
              <p className="text-[#bfc6cc] leading-[1.6] mb-2">{indigenisation.description}</p>
              <ul className="space-y-2.5 mt-4 leading-[1.6]">
                {indigenisation.initiatives.map((item) => (
                  <BulletItem key={item} text={item} />
                ))}
              </ul>
              <Link
                to="/atmanirbhar-bharat"
                className="inline-flex items-center gap-2 text-[#22c7a8] font-medium text-sm tracking-[0.03em] mt-6 hover:gap-3 transition-all duration-300"
              >
                Atmanirbhar Bharat <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="h-full min-h-0">
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-surface-container-low p-8 md:p-10 rounded-[16px] h-full flex flex-col min-h-[300px] border border-white/[0.06] transition-[background-color,box-shadow] duration-300 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#22c7a8]/15 flex items-center justify-center border border-[#22c7a8]/25">
                  <Earth className="text-[#22c7a8]" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-xl font-bold text-on-background">{globalSupplyChain.title}</h3>
              </div>
              <ul className="space-y-2.5 mt-1 leading-[1.6]">
                {globalSupplyChain.capabilities.map((item) => (
                  <BulletItem key={item} text={item} />
                ))}
              </ul>
              <Link
                to="/israel-desk"
                className="inline-flex items-center gap-2 text-[#22c7a8] font-medium text-sm tracking-[0.03em] mt-6 hover:gap-3 transition-all duration-300"
              >
                Partnerships desk <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Journey */}
      <Section bg="bg-surface-container-low">
        <AnimatedSection>
          {flowHint('07 — Credibility')}
          <SectionLabel label="Heritage" className="mb-4" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background mb-12 leading-[1.15]">
            Our Journey
          </h2>
        </AnimatedSection>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-3 top-2 bottom-2 w-0.5 rounded-full bg-white/[0.12]" aria-hidden />
          <ul className="relative space-y-0 list-none m-0 p-0">
            {timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <li className="relative pl-10 pb-10 last:pb-0">
                  <span
                    className="absolute left-3 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#22c7a8] ring-4 ring-surface-container-low z-10"
                    aria-hidden
                  />
                  <div className="inline-flex min-w-[4.5rem] items-center justify-center rounded-lg bg-primary/15 px-3 py-2 font-headline text-xs font-bold text-primary mb-3">
                    {item.year}
                  </div>
                  <h4 className="font-headline text-lg font-bold text-on-background mb-2">{item.title}</h4>
                  <p className="text-sm text-[#9aa3aa] leading-[1.65]">{item.description}</p>
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </Section>

      {/* Mission / Vision / Commitment */}
      <Section bg="bg-background">
        {flowHint('08 — Trust')}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {[
              {
                icon: Target,
                title: 'Mission',
                variant: 'primary' as const,
                text: 'Ship integrated defence outcomes—hardware, software, and programme discipline in one chain of responsibility.',
              },
              {
                icon: Sparkles,
                title: 'Vision',
                variant: 'subtle' as const,
                text: 'Be a trusted partner for complex defence programmes—indigenous innovation, global-grade quality.',
              },
              {
                icon: BadgeCheck,
                title: 'Commitment',
                variant: 'structured' as const,
                text: 'Indigenisation, compliance rigor, and lifecycle support aligned with national security priorities.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-[16px] p-8 text-center h-full min-h-[220px] flex flex-col transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 ${
                  item.variant === 'primary'
                    ? 'border border-[#22c7a8]/45 bg-[#22c7a8]/[0.06] shadow-[0_0_0_1px_rgba(34,199,168,0.12)]'
                    : item.variant === 'subtle'
                      ? 'bg-white/[0.03] border border-white/[0.06]'
                      : 'bg-surface-container-low border border-dashed border-white/20'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    item.variant === 'primary' ? 'bg-[#22c7a8]/15' : 'bg-primary/10'
                  }`}
                >
                  <item.icon
                    className={item.variant === 'primary' ? 'text-[#22c7a8]' : 'text-primary'}
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-headline font-bold text-on-background mb-3">{item.title}</h3>
                <p className="text-sm text-[#bfc6cc] leading-[1.6] flex-1">{item.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Final CTA */}
      <section className="py-24 md:py-[100px] px-6 md:px-12 bg-surface-container-lowest border-t border-white/[0.06]">
        <div className="mx-auto w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="rounded-[20px] border border-white/[0.08] px-8 py-12 md:px-14 md:py-[60px] bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.02] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)]"
          >
            {flowHint('09 — Action')}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-xl">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background mb-4 leading-[1.15] tracking-tight">
                  Explore our capabilities
                </h2>
                <p className="text-[#bfc6cc] text-base leading-[1.65]">
                  From manufacturing and integration to AI for defence and global supply chain—we support your programme
                  end to end.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link to="/services">
                  <DSButton>View Capabilities</DSButton>
                </Link>
                <Link to="/leadership">
                  <DSButton variant="outline">Leadership</DSButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
