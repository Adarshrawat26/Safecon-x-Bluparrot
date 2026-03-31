import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Link } from 'react-router-dom';
import {
  PageHero,
  SectionLabel,
  GlassPanel,
  Section,
  DSButton,
  CtaBanner,
} from '../components/ui/DesignSystem';
import { atmanirbharBharat } from '../data/content';
import { siteImagery } from '../data/siteImagery';
import {
  FileDown,
  ShieldCheck,
  PlaneTakeoff,
  TrainFront,
  Zap,
  Warehouse,
  ArrowRight,
  Workflow,
  ScanEye,
  Fingerprint,
  Atom,
  Cog,
} from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years Industry Experience', color: 'text-primary' },
  { value: '150+', label: 'Team Size', color: 'text-tertiary' },
  { value: '25+', label: 'Countries Served', color: 'text-primary' },
  { value: '100%', label: 'Local Compliance', color: 'text-tertiary' },
];

const certifications = [
  { cert: 'ISO 9001:2015', label: 'Quality Management' },
  { cert: 'ISO 14001:2015', label: 'Environmental Management' },
  { cert: 'TS 22163:2023', label: 'Railway Quality' },
  { cert: '45001:2018', label: 'Occupational Health' },
];

export const AtmanirbharBharat = () => {
  return (
    <div className="w-full">
      <PageHero
        editorialLayout
        height="extended"
        badge="Atmanirbhar focus"
        title={
          <>
            Indigenous capability where it counts—<span className="text-primary italic">make, integrate, sustain</span>
          </>
        }
        description="Two decades of factory and programme work in India: fewer hand-offs to overseas shops, more qualified local build and test."
        imageSrc={siteImagery.factoryFloor.src}
        imageAlt={siteImagery.factoryFloor.alt}
        imagePosition="object-center"
      >
        <div className="mt-10 flex flex-wrap gap-6 items-center">
          <DSButton>
            <span className="flex items-center gap-3">Strategic Strategy Paper <FileDown size={18} /></span>
          </DSButton>
          <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-white/[0.1] bg-white/[0.05] backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Make In India Certified</span>
          </div>
        </div>
      </PageHero>

      {/* Military–industrial band (build + technical depth) */}
      <section
        className="relative overflow-hidden border-y border-white/[0.06]"
        aria-labelledby="atmanirbhar-industrial-band-heading"
      >
        <div className="relative min-h-[260px] md:min-h-[340px]">
          <img
            src={siteImagery.industrialRdLab.src}
            alt={siteImagery.industrialRdLab.alt}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col justify-center min-h-[260px] md:min-h-[340px]">
            <p className="text-primary text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Indigenous build & test
            </p>
            <h2
              id="atmanirbhar-industrial-band-heading"
              className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-on-background max-w-3xl leading-tight"
            >
              Industrial depth behind every indigenisation line item
            </h2>
            <p className="text-[#bfc6cc] mt-4 max-w-2xl text-base md:text-lg leading-[1.65]">
              Local content is not only where parts are stamped—it is who runs the process FMEAs, who holds the calibration records, and who signs off when the line is under load.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment & Experience */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold text-on-surface">Why this matters on the shop floor</h2>
              <p className="text-[#bfc6cc] leading-[1.65] text-base max-w-[560px]">
                Atmanirbhar is not a slogan on our wall—it shows up in BOM choices, second-source plans, and who signs the FAT documents. Roughly 150+ people, programmes in 25+ countries, and a bias toward suppliers we can audit in person.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className={`text-4xl font-headline font-bold ${s.color}`}>{s.value}</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-outline mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-tertiary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <GlassPanel className="p-1 relative">
                <div className="relative w-full aspect-video overflow-hidden rounded-xl ring-1 ring-white/[0.08]">
                  <img
                    src={siteImagery.heavyIndustrialProduction.src}
                    alt={siteImagery.heavyIndustrialProduction.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
                  <p className="absolute bottom-0 left-0 right-12 p-3 md:p-4 text-[10px] md:text-xs text-white/75 leading-relaxed">
                    Representative plant imagery — swap for cleared site photos when ready
                  </p>
                  <div className="absolute bottom-2.5 right-2.5 md:bottom-3 md:right-3 rounded-md bg-black/20 p-1.5 backdrop-blur-sm">
                    <Warehouse className="text-primary/50" size={18} aria-hidden />
                  </div>
                </div>
              </GlassPanel>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Commitment */}
      <Section bg="bg-background">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="National Priority" className="mb-4" />
            <h2 className="font-headline text-4xl font-bold text-on-background mb-6">{atmanirbharBharat.commitment.title}</h2>
            <p className="text-[#bfc6cc] text-base leading-[1.65] mb-4">{atmanirbharBharat.commitment.subtitle}</p>
            <p className="text-[#9aa3aa] leading-[1.65] mb-8">We actively contribute to national defence priorities by:</p>
            <ul className="space-y-4">
              {atmanirbharBharat.commitment.contributions.map((item) => (
                <li key={item} className="flex items-center gap-4 text-[#bfc6cc]">
                  <span className="h-1 w-4 bg-tertiary flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </Section>

      {/* Certifications Bar */}
      <section className="bg-surface-container-highest/30 py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="text-center text-[10px] uppercase font-bold tracking-[0.3em] text-outline mb-8">Global Quality Certifications</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {certifications.map((c) => (
              <div key={c.cert} className="text-center group">
                <span className="block text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{c.cert}</span>
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Indigenisation Modules (Bento Grid) */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <SectionLabel label="Our Pillars" className="mb-4" />
              <h2 className="font-headline text-4xl font-bold text-on-surface">Strategic Indigenisation Modules</h2>
            </div>
            <div className="max-w-md text-left md:text-right">
              <p className="text-sm text-outline">Pioneering high-performance safety components and materials for mission-critical applications across global industries.</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 md:items-stretch gap-6">
          {/* Indigenous Manufacturing - Large */}
          <AnimatedSection className="md:col-span-8 h-full min-h-0">
            <motion.div
              className="group relative overflow-hidden bg-surface-container-high rounded-2xl p-8 flex flex-col justify-between h-full min-h-[400px] md:min-h-[420px] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cog size={96} className="text-primary" />
              </div>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Manufacturing Excellence</span>
                <h3 className="text-3xl font-headline font-bold mb-4 text-on-background">Indigenous Material Systems</h3>
                <p className="text-on-surface-variant max-w-lg leading-relaxed">
                  Manufacturing high-performance silver-carbon and specialized materials. Our local production lines utilize aerospace-grade components designed for extreme environments.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-background/50 rounded-xl hover:bg-surface-container transition-colors">
                  <h4 className="text-sm font-bold text-on-surface mb-1">Impregnated Contact Materials</h4>
                  <p className="text-xs text-outline">Engineered for stable electrical contact and long-term durability under high pressure.</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl hover:bg-surface-container transition-colors">
                  <h4 className="text-sm font-bold text-on-surface mb-1">Specialized Rotary Materials</h4>
                  <p className="text-xs text-outline">Tailored for slip rings and rotary joints with low electrical noise and high wear resistance.</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Specialized Carbon Brushes - Tertiary Card */}
          <AnimatedSection delay={0.1} className="md:col-span-4 h-full min-h-0">
            <div className="bg-tertiary-container rounded-2xl p-8 flex flex-col justify-between h-full min-h-[400px] md:min-h-[420px] group hover:shadow-[0_0_40px_rgba(0,225,171,0.1)] transition-all">
              <div>
                <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6">
                  <Atom className="text-tertiary" size={24} />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-on-background">Specialized Carbon Brushes</h3>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed mb-4">
                  Precision-engineered silver and copper-impregnated brushes for wind turbines, generators, and medical equipment.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-tertiary uppercase"><Zap size={14} /> Power & Energy</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-tertiary uppercase"><TrainFront size={14} /> Railway & Transport</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-tertiary uppercase"><Cog size={14} /> OEM Manufacturing</div>
                </div>
              </div>
              <Link to="/services" className="text-tertiary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 mt-8 group">
                Industry Solutions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Global Supply Network */}
          <AnimatedSection delay={0.15} className="md:col-span-5 h-full min-h-0">
            <motion.div
              className="bg-surface-container-highest rounded-2xl p-8 h-full min-h-[300px] md:min-h-[320px] flex flex-col transition-all overflow-hidden group"
            >
              <div className="overflow-hidden mb-8">
                <div className="w-full h-48 bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <Warehouse className="text-primary/15" size={80} />
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-background">Global Supply Network</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                We export to 25+ countries and still push Indian vendors up the certification curve—AS9100-style discipline, not just paperwork.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Strategic Program Support */}
          <AnimatedSection delay={0.2} className="md:col-span-7 h-full min-h-0">
            <motion.div
              className="bg-surface-container rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center h-full min-h-[300px] md:min-h-[320px] transition-all"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-headline font-bold mb-4 text-on-background">Strategic Program Support</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Key partner to Defence PSUs and Global OEMs like Siemens and Wabtec. Supporting mission-critical programs with indigenous components and end-to-end support.
                </p>
                <div className="flex gap-4">
                  {[ShieldCheck, PlaneTakeoff, TrainFront].map((Icon, i) => (
                    <div key={i} className="h-10 w-10 bg-on-primary-fixed-variant/20 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={20} />
                    </div>
                  ))}
                </div>
              </div>
              <GlassPanel className="w-full md:w-48 aspect-square flex items-center justify-center p-4">
                <div className="text-center">
                  <span className="text-4xl font-headline font-bold text-on-surface">150+</span>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-outline mt-2">Team Size</span>
                </div>
              </GlassPanel>
            </motion.div>
          </AnimatedSection>
        </div>
        </div>
      </section>

      {/* AI + Indigenisation */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 text-on-background">
                AI where it shortens <span className="text-primary italic">detection and downtime</span>
              </h2>
              <p className="text-[#bfc6cc] text-base md:text-lg leading-[1.65] mb-12">
                Local build matters; so does the software stack on top. We pair Indian manufacture of brushes, slip-ring interfaces, and electronics with condition monitoring and analytics where customers want logged evidence, not guesses.
              </p>
              <div className="inline-flex items-center gap-12 py-8">
                {[
                  { icon: Workflow, label: 'Neural Networks' },
                  { icon: ScanEye, label: 'Edge Sensing' },
                  { icon: Fingerprint, label: 'Secure by design' },
                ].map(({ icon: Icon, label }) => (
                  <motion.div key={label} whileHover={{ scale: 1.1 }} className="flex flex-col items-center group cursor-default">
                    <Icon className="text-tertiary mb-2" size={24} />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-outline">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Localization */}
      <Section bg="bg-surface-container-low">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <SectionLabel label="Localization" className="mb-4" />
            <h2 className="font-headline text-4xl font-bold text-on-background mb-8">Technology Localization</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {atmanirbharBharat.makeInIndia.pillars[1].items.map((item, i) => (
                <AnimatedSection key={item} delay={i * 0.1} className="h-full min-h-0">
                  <div className="bg-surface-container-high p-8 rounded-2xl h-full min-h-[168px] flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest block mb-3">0{i + 1}</span>
                    <p className="text-on-background font-headline font-bold text-sm">{item}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Strategic Impact */}
      <Section bg="bg-background">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel label="Impact" className="justify-center mb-4" />
            <h2 className="font-headline text-4xl font-bold text-on-background mb-4">{atmanirbharBharat.strategicImpact.title}</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto items-stretch">
          {atmanirbharBharat.strategicImpact.impacts.map((item, i) => (
            <AnimatedSection key={item} delay={i * 0.1} className="h-full min-h-0">
              <div className="bg-surface-container-low p-8 rounded-2xl text-center h-full min-h-[200px] flex flex-col items-center justify-center">
                <span className="text-3xl font-headline font-bold text-primary block mb-4">0{i + 1}</span>
                <p className="text-sm text-on-background font-headline font-bold">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.5}>
          <p className="text-center text-[#9aa3aa] text-base italic max-w-2xl mx-auto mt-16 leading-[1.65]">
            "{atmanirbharBharat.aiIndigisation.philosophy}"
          </p>
        </AnimatedSection>
      </Section>

      <AnimatedSection>
        <CtaBanner
          title="Drive the indigenisation agenda"
          description="If you need Indian content on a PSU or OEM programme, we will match IP, tooling, and acceptance tests to what your contract actually says."
        >
          <Link to="/contact">
            <DSButton>Download Strategy Paper</DSButton>
          </Link>
        </CtaBanner>
      </AnimatedSection>
    </div>
  );
};
