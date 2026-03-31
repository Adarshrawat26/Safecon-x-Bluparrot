import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Link } from 'react-router-dom';
import {
  PageHero,
  SectionLabel,
  GlassPanel,
  DSButton,
  CtaBanner,
} from '../components/ui/DesignSystem';
import {
  Handshake,
  Container,
  Landmark,
  Kanban,
  Zap,
  BadgeCheck,
  ArrowRight,
  Satellite,
  BrainCircuit,
  Antenna,
  Ship,
  Cpu,
} from 'lucide-react';
import { siteImagery } from '../data/siteImagery';

const focusAreas = [
  { title: 'ISR & Surveillance', subtitle: 'Unmanned & Optical', gradient: 'from-primary-container/60 via-surface-container to-surface-container-lowest' },
  { title: 'AI-Driven Tech', subtitle: 'Autonomous Decisioning', gradient: 'from-tertiary-container/40 via-surface-container to-surface-container-lowest' },
  { title: 'Comms (SDR)', subtitle: 'Resilient Networking', gradient: 'from-surface-container via-surface-container-high to-surface-container-lowest' },
  { title: 'Naval & Maritime', subtitle: 'Sub-Surface & Surface', gradient: 'from-primary-container/40 via-surface-container-high to-surface-container-lowest' },
  { title: 'Advanced Electronics', subtitle: 'Embedded Systems', gradient: 'from-tertiary-container/30 via-surface-container to-surface-container-lowest' },
];

const focusIcons = [Satellite, BrainCircuit, Antenna, Ship, Cpu];

export const IsraelDesk = () => {
  return (
    <div className="w-full">
      <PageHero
        editorialLayout
        badge="Strategic alliance"
        title={
          <>
            Israel desk — <span className="text-primary italic">partnerships</span> and supply chain excellence
          </>
        }
        description="Trusted collaboration with Israeli defence and technology companies—bridging Mediterranean innovation with Indian manufacturing scale."
        imageSrc={siteImagery.engineeringProduction.src}
        imageAlt={siteImagery.engineeringProduction.alt}
        imagePosition="object-[center_30%]"
      >
        <div className="mt-10">
          <Link to="/contact">
            <DSButton>Explore Cooperation</DSButton>
          </Link>
        </div>
      </PageHero>

      {/* Military–industrial band (maritime / programme scale) */}
      <section
        className="relative overflow-hidden border-y border-white/[0.06]"
        aria-labelledby="israel-desk-industrial-band-heading"
      >
        <div className="relative min-h-[280px] md:min-h-[380px]">
          <img
            src={siteImagery.navalMaritimeIndustrial.src}
            alt={siteImagery.navalMaritimeIndustrial.alt}
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-14 md:py-20 flex flex-col justify-center min-h-[280px] md:min-h-[380px]">
            <p className="text-tertiary text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Maritime & defence supply
            </p>
            <h2
              id="israel-desk-industrial-band-heading"
              className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight"
            >
              Programme discipline from dockside to factory acceptance
            </h2>
            <p className="text-[#bfc6cc] mt-5 max-w-2xl text-base md:text-lg leading-[1.65]">
              Israeli OEMs and Indian yards need the same thing: traceable material, qualified second sources, and people who stay through sea trials and FAT—not just the first handshake.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy of Engagement */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionLabel label="Our Heritage" className="mb-4" />
            <h2 className="font-headline text-4xl font-bold mb-8 text-on-background">Legacy of Engagement</h2>
            <p className="text-[#bfc6cc] text-base leading-[1.65] mb-6 max-w-[560px]">
              Safecon Blu Parrot stands as a cornerstone in the Indo-Israeli defence corridor. For over two decades, we have facilitated high-stakes associations with premier Israeli Original Equipment Manufacturers (OEMs).
            </p>
            <div className="grid grid-cols-2 gap-8 pl-8 mt-12">
              <div>
                <div className="text-4xl font-headline font-bold text-primary mb-2">20+</div>
                <div className="text-xs font-label uppercase tracking-widest text-outline font-bold">Years of Association</div>
              </div>
              <div>
                <div className="text-4xl font-headline font-bold text-primary mb-2">15+</div>
                <div className="text-xs font-label uppercase tracking-widest text-outline font-bold">Tier-1 Israeli Partners</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/[0.08] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]">
              <img
                src={siteImagery.defenceAviation.src}
                alt={siteImagery.defenceAviation.alt}
                className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent pointer-events-none" />
              <p className="absolute bottom-0 left-0 right-14 p-4 md:p-5 text-[10px] md:text-xs text-white/75 leading-relaxed">
                Stock imagery — not a customer or classified programme
              </p>
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 rounded-lg bg-black/25 p-2 backdrop-blur-sm ring-1 ring-white/10">
                <Handshake className="text-white/55" size={20} aria-hidden />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Enable (Bento Grid) */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">What We Enable</h2>
              <p className="text-[#9aa3aa] mt-4 max-w-2xl mx-auto leading-[1.65]">
                Comprehensive operational and strategic support for navigating the Indian aerospace & defence landscape.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-12 md:items-stretch gap-6 h-auto md:h-[600px]">
            {/* Supply Chain */}
            <AnimatedSection className="md:col-span-7 h-full min-h-0">
              <motion.div
                whileHover={{ backgroundColor: 'rgba(50, 57, 68, 1)' }}
                className="bg-surface-container-low p-10 flex flex-col justify-end h-full relative overflow-hidden rounded-2xl transition-colors duration-500"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Container size={96} className="text-primary" />
                </div>
                <Container className="text-primary mb-6" size={28} />
                <h3 className="font-headline text-2xl font-bold mb-4 text-on-background">Supply Chain & Sourcing</h3>
                <p className="text-[#9aa3aa] leading-[1.65] max-w-md">
                  Streamlining complex logistics and material sourcing to ensure mission-critical components reach their destination with zero latency.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Market Entry */}
            <AnimatedSection delay={0.1} className="md:col-span-5 h-full min-h-0">
              <div className="bg-surface-container-highest p-10 flex flex-col justify-between h-full min-h-[240px] rounded-2xl">
                <Landmark className="text-tertiary" size={28} />
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-background">India Market Entry</h3>
                  <p className="text-[#9aa3aa] leading-[1.65]">
                    Help Israeli firms enter India with the right partners, paperwork, and on-ground programme staff—not just introductions.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Tech Integration */}
            <AnimatedSection delay={0.15} className="md:col-span-4 h-full min-h-0">
              <div className="bg-surface-container-low p-10 rounded-2xl h-full min-h-[200px] flex flex-col">
                <h3 className="font-headline text-xl font-bold mb-4 text-primary">Technology Integration</h3>
                <p className="text-[#9aa3aa] text-sm leading-[1.65]">
                  Specialized support for indigenisation projects, bridging Israeli IP with 'Make in India' mandates.
                </p>
              </div>
            </AnimatedSection>

            {/* Program Management */}
            <AnimatedSection delay={0.2} className="md:col-span-8 h-full min-h-0">
              <div className="bg-gradient-to-br from-primary-container to-surface-container-lowest p-10 flex items-center justify-between rounded-2xl h-full min-h-[200px]">
                <div className="max-w-md">
                  <h3 className="font-headline text-2xl font-bold mb-4 text-primary-fixed-dim">Program & Project Management</h3>
                  <p className="text-[#9aa3aa] leading-[1.65]">
                    End-to-end lifecycle management of complex defence contracts, ensuring timelines and technical benchmarks are surpassed.
                  </p>
                </div>
                <Kanban className="text-primary/30 hidden md:block" size={64} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <SectionLabel label="Key Verticals" className="mb-4" />
                <h2 className="font-headline text-4xl font-bold text-on-surface">Priority Tech Focus Areas</h2>
              </div>
              <div className="max-w-md text-[#9aa3aa] text-sm leading-[1.65]">
                Our Israel Desk specializes in the most demanding segments of modern warfare, focusing on high-autonomy and digital-first systems.
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i];
              return (
                <AnimatedSection key={area.title} delay={i * 0.1} className="h-full min-h-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="group relative aspect-[4/5] min-h-[280px] w-full overflow-hidden bg-surface-container rounded-2xl"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient}`} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                      <Icon size={120} className="text-primary" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <h4 className="font-headline text-xl font-bold mb-2 text-on-background">{area.title}</h4>
                      <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">{area.subtitle}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Advantage (Glass Callout) */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <GlassPanel className="p-12 md:p-20 text-center">
              <h2 className="font-headline text-4xl font-bold mb-8 text-on-background">Strategic Advantage</h2>
              <p className="text-xl md:text-2xl font-light text-[#bfc6cc] mb-12 leading-[1.55] italic">
                Israeli IP and Indian build volume only work when someone owns the <span className="text-tertiary font-medium">paperwork</span>, the <span className="text-primary font-medium">factory gates</span>, and the <span className="text-tertiary font-medium">programme clock</span>.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl">
                    <Zap className="text-tertiary" size={20} />
                  </div>
                  <span className="text-sm uppercase tracking-widest font-bold text-on-surface">Fast-Track Entry</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl">
                    <BadgeCheck className="text-primary" size={20} />
                  </div>
                  <span className="text-sm uppercase tracking-widest font-bold text-on-surface">Compliance Assured</span>
                </div>
              </div>
            </GlassPanel>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection>
        <CtaBanner
          title="Secure your partnership"
          description="Contact our Israel Desk for partnership opportunities and strategic market navigation in the Indian defence sector."
        >
          <Link to="/contact">
            <DSButton>
              <span className="flex items-center gap-3">Initiate Dialogue <ArrowRight size={18} /></span>
            </DSButton>
          </Link>
        </CtaBanner>
      </AnimatedSection>
    </div>
  );
};
