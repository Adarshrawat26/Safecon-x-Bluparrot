import { motion } from 'framer-motion';
import {
    ArrowRight,
    BadgeCheck,
    BookOpen,
    BrainCircuit,
    Cable,
    ChevronRight,
    CircuitBoard,
    ClipboardList,
    Container,
    Earth,
    FileDown,
    FlaskConical,
    HardHat,
    Trophy,
    Waypoints,
    type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroMilitary from '../assets/images/hero-military.jpg';
import internationalGlobe from '../assets/images/sections/naval-maritime.jpg';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Section, SectionLabel } from '../components/ui/DesignSystem';
import { capabilities } from '../data/services';
import { siteImagery } from '../data/siteImagery';

const iconMap: Record<string, LucideIcon> = {
  'circuit-board': CircuitBoard,
  'brain-circuit': BrainCircuit,
  'clipboard-list': ClipboardList,
  waypoints: Waypoints,
  'hard-hat': HardHat,
  'book-open': BookOpen,
};

const heroSlashList = [
  '/ AI FOR DEFENCE & INTELLIGENCE',
  '/ MANUFACTURING & SYSTEMS INTEGRATION',
  '/ PROGRAM EXECUTION & SUPPLY CHAIN',
];

const HERO_BG_MEDIA_CLASS =
  'object-cover object-[58%_20%] sm:object-[54%_18%] scale-[1.42] sm:scale-[1.52] brightness-[0.6] contrast-[1.1]';

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero — grid layout, controlled scrim, single dominant CTA */}
      <section className="relative min-h-screen flex flex-col overflow-hidden pt-[72px]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMilitary}
            alt="Military Hero Background"
            className={HERO_BG_MEDIA_CLASS + ' w-full h-full'}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)',
            }}
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-transparent to-black/25 pointer-events-none" />
        </div>

        <div className="relative z-10 flex flex-col flex-1 min-h-[calc(100vh-72px)] max-w-[1600px] mx-auto w-full px-6 sm:px-10 lg:px-12 py-8 md:py-10">
          {/* Top band: services list + mission */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 shrink-0">
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] text-white/75 uppercase space-y-2"
            >
              {heroSlashList.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </motion.ul>
      
          </div>

          {/* Main hero: headline + integrated info card */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-10 items-center min-h-0 py-10 md:py-12 lg:py-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="min-w-0"
            >
              <div className="inline-flex items-center px-3 py-1.5 rounded-[var(--radius-sm)] bg-white/[0.08] backdrop-blur-md border border-white/10 mb-6 md:mb-8">
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-text-secondary uppercase">
                  25+ years · AI · engineering · execution
                </span>
              </div>
              <h1 className="font-headline font-bold text-white text-[clamp(1.25rem,4vw+0.3rem,2.5rem)] leading-[1.05] tracking-[-0.0625rem]">
              Integrated Defence Capabilities Powered by AI, Engineering & Execution

                <br />
            
              </h1>
              <p className="mt-6 max-w-3xl text-sm md:text-base text-text-secondary leading-relaxed font-light">
               Safecon Blu Parrot is a group of companies working over 25 years delivering advanced capabilities across Manufacturing in S&T, AI, integration, and project management for aerospace & defence industries.
From Integration , Manufacturing, SCA 2.2.2 programs to AI-driven intelligence systems, we combine deep engineering with next-generation analytics to build mission-ready solutions, Project Management, Missiles Explosives.

              </p>
              <div className="flex flex-wrap gap-3 mt-8 md:mt-10">
                <Link to="/services">
                  <motion.button
                    type="button"
                    className="ds-interactive inline-flex items-center justify-center bg-primary text-on-primary-fixed px-7 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs shadow-md shadow-black/15"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Capabilities
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    type="button"
                    className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white px-7 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs transition-[background-color,border-color] duration-200 hover:bg-white/[0.06] hover:border-white/30"
                    whileTap={{ scale: 0.98 }}
                  >
                    Partner Portal
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full max-w-md lg:max-w-none justify-self-stretch"
            >
              <div
                className="p-5 rounded-[var(--radius)] ring-1 ring-white/10 backdrop-blur-[10px]"
                style={{ background: 'var(--bg-glass)' }}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-gradient-to-br from-primary/35 to-tertiary/25 flex items-center justify-center shrink-0 ring-1 ring-white/10">
                    <span className="font-headline font-bold text-white text-[10px] tracking-tight">SBP</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-headline font-bold text-white text-sm">Integrated Defence Capabilities</p>
                    <p className="text-[10px] font-sans tracking-[0.2em] text-text-secondary/80 uppercase mt-1">
                      Safecon Blu Parrot
                    </p>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-4 leading-[1.6]">
                  Safecon Blu Parrot is a group of companies working over 25 years delivering advanced capabilities
                  across manufacturing in S&amp;T, AI, integration, and project management for aerospace &amp; defence
                  industries.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-[var(--radius-sm)] bg-white/10 border border-white/15 text-white font-headline font-semibold text-xs uppercase tracking-widest hover:bg-white/[0.14] hover:border-white/25 transition-all duration-200"
                >
                  Request briefing
                  <ChevronRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Core Pillars */}
      <Section bg="bg-background">
        <div className="grid grid-cols-1 gap-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-background leading-[1.2]">
              Core <span className="text-primary italic">Pillars</span>
            </h2>
            <p className="text-[#9aa3aa] text-sm leading-relaxed max-w-[420px] sm:text-right sm:ml-auto shrink-0">
              Where we spend most of our time: build, integrate, deploy, and keep systems running.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon] || CircuitBoard;
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="rounded-[16px] border border-white/[0.06] bg-white/[0.04] p-[28px] flex flex-col h-full transition-[background-color] duration-300 ease-out hover:bg-white/[0.06]"
                >
                  <Icon
                    className={`w-6 h-6 shrink-0 mb-4 ${i % 2 === 0 ? 'text-primary' : 'text-[#22c7a8]'}`}
                    size={24}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="text-xl font-headline font-bold mb-3 text-on-background leading-snug">{cap.title}</h3>
                  <p className="text-sm text-[#9aa3aa] leading-relaxed flex-1">{cap.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Strategic Overview — synergy band: tight headline, readable measure, aligned stat grid */}
      <Section
        bg="bg-surface-container-lowest border-t border-white/[0.06]"
        className="relative overflow-hidden !py-[100px] !px-6 sm:!px-10 md:!px-12"
        wide
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(167, 200, 255, 0.06), transparent 55%), radial-gradient(ellipse 50% 40% at 15% 80%, rgba(34, 199, 168, 0.04), transparent 50%)',
          }}
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-[60px] items-center">
          <AnimatedSection>
            <h2 className="font-headline font-bold text-white text-[clamp(2rem,4vw,56px)] leading-[1.1] tracking-[-0.5px] mb-8">
              <span className="block">Safecon + Blu Parrot:</span>
              <span className="block mt-0.5 text-[#22c7a8]">A Strategic Synergy</span>
            </h2>
            <div className="max-w-[520px] text-[#bfc6cc] leading-[1.7] text-[0.9375rem] md:text-base [&>p]:mb-5 [&>p:last-child]:mb-0">
              <p>
                Safecon brings precision manufacturing and integration; Blu Parrot brings AI and analytics. Together we
                cover design-through-deployment without handing off between siloed vendors.
              </p>
              <p>
                That matters on programmes where the hardware, software, and data paths have to stay aligned—from small
                UAS integrations to naval rotating interfaces and shore-side support.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 gap-6 items-stretch">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                className="rounded-[16px] border border-white/[0.06] bg-white/[0.04] p-[28px] flex flex-col justify-end min-h-[140px] transition-[background-color] duration-300 ease-out hover:bg-white/[0.06]"
              >
                <span className="font-headline text-[40px] font-semibold leading-none tracking-tight text-[#22c7a8] mb-3">
                  25+
                </span>
                <p className="text-[12px] font-sans uppercase tracking-[1.5px] text-white/[0.6] m-0 leading-snug">
                  Years expertise
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                className="rounded-[16px] border border-white/[0.06] bg-white/[0.04] p-[28px] flex flex-col justify-end min-h-[140px] transition-[background-color] duration-300 ease-out hover:bg-white/[0.06]"
              >
                <span className="font-headline text-[40px] font-semibold leading-none tracking-tight text-[#22c7a8] mb-3">
                  150+
                </span>
                <p className="text-[12px] font-sans uppercase tracking-[1.5px] text-white/[0.6] m-0 leading-snug">
                  Engineers
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                className="col-span-2 rounded-[16px] border border-white/[0.06] bg-white/[0.04] p-[28px] flex flex-row items-center justify-between gap-5 min-h-0 transition-[background-color] duration-300 ease-out hover:bg-white/[0.06]"
              >
                <div className="min-w-0 flex-1 pr-2">
                  <span className="text-white text-lg font-headline font-bold tracking-tight block">
                    Global footprint
                  </span>
                  <span className="text-sm text-[#bfc6cc] mt-1 block leading-snug">Active in 25+ countries</span>
                </div>
                <div
                  className="h-12 w-12 shrink-0 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center"
                  aria-hidden
                >
                  <Earth className="text-[#22c7a8]" size={22} strokeWidth={1.5} />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        <div className="relative mt-20 h-px w-full max-w-full bg-white/[0.05]" aria-hidden />
      </Section>

      {/* Global Presence */}
      <Section bg="bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-[60px] items-center">
          <AnimatedSection>
            <SectionLabel label="Global Presence" className="mb-6" />
            <h2 className="text-4xl md:text-[2.75rem] font-headline font-bold text-on-background mb-6 leading-[1.15] tracking-tight max-w-[20ch]">
              International Operations & Key Programs
            </h2>
            <p className="text-[#9aa3aa] leading-[1.7] mb-8 text-base max-w-[520px]">
              With strategic desks in Tel Aviv, London, and New Delhi, Safecon Blu Parrot manages critical programs across multiple geographies, bridging the gap between global innovation and local execution.
            </p>
            <Link
              to="/israel-desk"
              className="inline-flex items-center gap-2 text-[#22c7a8] font-medium text-sm tracking-[0.5px] transition-transform duration-300 ease-out hover:translate-x-1 group"
            >
              Explore active missions{' '}
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              className="rounded-[20px] overflow-hidden ring-1 ring-white/[0.06] shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-[16/10] min-h-[220px] sm:min-h-[260px] overflow-hidden">
                <img
                  src={internationalGlobe}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-[72%_65%] sm:object-[68%_58%] brightness-[0.85] transition-[filter] duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-surface-container-low/90 from-[5%] via-transparent via-[45%] to-transparent" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 via-transparent to-black/25" />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Indo-Israel Desk */}
      <section className="py-24 md:py-[100px] bg-surface-container-lowest relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-[60px] items-center">
            <AnimatedSection>
              <SectionLabel label="Specialized Engagement" className="mb-6" />
              <h2 className="text-4xl font-headline font-bold mb-6 text-on-background leading-[1.2]">
                Indo-Israel Strategic Desk
              </h2>
              <p className="text-[#9aa3aa] leading-[1.7] mb-8 text-base max-w-[520px]">
                Leveraging a legacy of trusted engagement with Israeli OEMs, Safecon Blu Parrot serves as the bridge for
                high-technology transfer and indigenous co-development.
              </p>
              <div>
                <div className="flex gap-3 mb-4 items-start">
                  <BadgeCheck className="text-[#22c7a8] shrink-0 mt-1" size={24} strokeWidth={1.5} aria-hidden />
                  <div className="min-w-0">
                    <strong className="block font-semibold text-white mb-1">Tier-1 partnership legacy</strong>
                    <span className="text-sm text-[#9aa3aa] leading-relaxed block">
                      Direct liaison for precision-guided munitions and EW systems.
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 mb-4 items-start">
                  <Cable className="text-[#22c7a8] shrink-0 mt-1" size={24} strokeWidth={1.5} aria-hidden />
                  <div className="min-w-0">
                    <strong className="block font-semibold text-white mb-1">Tech-transfer</strong>
                    <span className="text-sm text-[#9aa3aa] leading-relaxed block">
                      Move from overseas R&amp;D packages to qualified Indian build and test with clear acceptance criteria.
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="aspect-video rounded-[20px] overflow-hidden ring-1 ring-white/[0.08] shadow-[0_24px_48px_-28px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.5)]">
                <div className="relative w-full h-full min-h-[200px]">
                  <img
                    src={siteImagery.heavyIndustrialProduction.src}
                    alt={siteImagery.heavyIndustrialProduction.alt}
                    className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/45 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Atmanirbhar Bharat */}
      <section className="py-24 md:py-[100px] bg-background">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12 text-center">
          <div className="mb-10 inline-flex items-center gap-4">
            <div className="h-px w-8 bg-[#8fb3ff]" />
            <span className="text-[#8fb3ff] font-headline font-bold tracking-[0.3em] uppercase text-xs">
              Aatmanirbhar Bharat
            </span>
            <div className="h-px w-8 bg-[#8fb3ff]" />
          </div>
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-[2.75rem] font-headline font-bold mb-0 max-w-[900px] mx-auto leading-[1.2] text-on-background">
              Built in India.{' '}
              <span className="text-[#8fb3ff]">Held to defence-grade standards.</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12 max-w-[1200px] mx-auto text-left items-stretch">
            {[
              { title: 'Indigenous R&D', desc: 'Reducing import dependency through ground-up development of flight-critical electronics.', icon: FlaskConical },
              { title: 'Local Value Chain', desc: '90% of our supply tier is localized, ensuring mission readiness during geopolitical shifts.', icon: Container },
              { title: 'Export Excellence', desc: 'Taking Indian engineering to the global stage with ITAR-compliant defence exports.', icon: Trophy },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="p-[28px] bg-white/[0.04] border border-white/[0.06] rounded-[16px] h-full min-h-0 flex flex-col transition-[background-color] duration-300 hover:bg-white/[0.06]"
              >
                <item.icon className="w-6 h-6 text-[#8fb3ff] mb-4 shrink-0" size={24} strokeWidth={1.5} aria-hidden />
                <h3 className="font-headline font-bold text-xl mb-3 text-on-background leading-snug">{item.title}</h3>
                <p className="text-sm text-[#9aa3aa] leading-relaxed flex-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <AnimatedSection delay={0.35}>
            <div className="mt-16 md:mt-20 opacity-35 flex justify-center items-center gap-10 grayscale">
              <span className="text-2xl sm:text-3xl font-headline font-bold tracking-tighter italic text-on-surface">
                MAKE IN INDIA
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Make_In_India.svg/200px-Make_In_India.svg.png"
                alt="Make in India"
                className="h-10 sm:h-12 opacity-50"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="py-6 bg-white/[0.03] border-y border-white/[0.05] overflow-hidden">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-white/[0.08]">
            {['ISO 9001:2015', 'ISO 14001:2015', 'TS 22163:2023', 'ISO 45001:2018', 'AS9100D (PENDING)'].map((c) => (
              <span
                key={c}
                className="font-headline text-[13px] font-semibold tracking-[1px] text-[#9aa3aa] text-center md:px-4 md:first:pl-0 md:last:pr-0"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership — 1.2 / 0.8 grid, content max-width, natural text flow */}
      <section className="mt-16 md:mt-24 bg-surface-container-low border-t border-white/[0.06] py-24 md:py-[100px]">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-[20px] bg-white/[0.08] border border-white/[0.08] overflow-hidden shadow-[0_24px_48px_-28px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.4)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] md:items-stretch">
                <div className="relative min-h-[220px] md:min-h-[280px] order-2 md:order-1">
                  <img
                    src={siteImagery.industrialRdLab.src}
                    alt={siteImagery.industrialRdLab.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.92] transition-[filter] duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35 md:bg-gradient-to-r md:from-black/25 md:via-transparent md:to-black/40 pointer-events-none" />
                  <p className="absolute bottom-3 left-3 right-3 text-[9px] font-label uppercase tracking-widest text-white/55 md:hidden">
                    Stock imagery
                  </p>
                </div>
                <div className="order-1 md:order-2 flex flex-col items-stretch justify-start p-8 sm:p-10 md:py-10 md:pl-10 md:pr-8">
                  <div className="w-full max-w-[420px]">
                    <p className="text-[11px] font-label uppercase tracking-[0.22em] text-[#22c7a8] mb-3">
                      Knowledge base
                    </p>
                    <h2 className="text-3xl sm:text-[1.75rem] font-headline font-bold text-white leading-[1.2]">
                      Advance Your Mission Intelligence
                    </h2>
                    <p className="text-[#bfc6cc] text-base leading-[1.6] mt-4">
                      Short reads on AI in EW, supply-chain risk, and integration lessons from live programmes.
                    </p>
                    <div className="whitepaper-actions mt-5 flex flex-col gap-3">
                      <Link to="/services#whitepapers">
                        <button
                          type="button"
                          className="ds-interactive bg-primary text-on-primary-fixed px-7 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs inline-flex items-center gap-3 whitespace-nowrap shadow-md shadow-black/15 w-full sm:w-auto justify-center"
                        >
                          Whitepapers <FileDown size={20} strokeWidth={1.5} />
                        </button>
                      </Link>
                      <p className="text-[10px] text-[#9aa3aa] uppercase tracking-widest leading-relaxed">
                        Representative imagery—not customer facilities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
