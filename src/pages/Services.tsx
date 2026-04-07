import { motion } from 'framer-motion';
import {
    Anchor,
    Antenna,
    BadgeCheck,
    BrainCircuit,
    CircuitBoard,
    FileDown,
    Kanban,
    MapPinned,
    MessageSquarePlus,
    Mountain,
    Radar,
    ScanEye,
    Sparkles,
    Target,
    Wifi,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import {
    BulletItem,
    CtaBanner,
    DSButton,
    FeatureRow,
    GlassPanel,
    PageHero,
    ProgressBar,
    Section,
    SectionLabel,
    TechTag,
    TonalCard,
} from '../components/ui/DesignSystem';
import { Stagger, StaggerItem } from '../components/ui/Stagger';
import { certifications, keyPrograms, projectExperience, whitepapers } from '../data/services';
import { siteImagery } from '../data/siteImagery';

export const Services = () => {
  return (
    <div className="w-full">
      <PageHero
        editorialLayout
        badge="Strategic Defence Portfolio"
        title={
          <>
            Detailed breakdown of <span className="text-primary italic">core capabilities</span>
          </>
        }
        description="We keep engineering, integration, and supply-chain under one roof where programmes need it—so accountability stays clear and delivery does not fragment."
        height="tall"
        imageSrc={siteImagery.heavyIndustrialProduction.src}
        imageAlt={siteImagery.heavyIndustrialProduction.alt}
        imagePosition="object-[center_40%]"
      />

      {/* Bento Grid */}
      <Section bg="bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-stretch gap-6">
          {/* Manufacturing */}
          <AnimatedSection className="md:col-span-8 h-full min-h-0">
            <TonalCard className="h-full bg-surface-container-high">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <CircuitBoard className="text-primary mb-4" size={36} />
                  <h2 className="font-headline text-3xl font-bold tracking-tight uppercase text-on-background">Manufacturing & Systems Integration</h2>
                </div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest mt-2">M01_INTEGRATION</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1 min-h-0">
                <ul className="space-y-4">
                  <BulletItem text="Advanced Electronics Fabrication" />
                  <BulletItem text="Mechanical Systems Engineering" />
                  <BulletItem text="SDR Integration & Testing" />
                </ul>
                <ul className="space-y-4">
                  <BulletItem text="Naval Equipment Hardening" />
                  <BulletItem text="Embedded Systems Architecture" />
                </ul>
              </div>
            </TonalCard>
          </AnimatedSection>

          {/* AI Defence */}
          <AnimatedSection delay={0.1} className="md:col-span-4 h-full min-h-0">
            <GlassPanel className="p-8 h-full min-h-0 flex flex-col">
              <BrainCircuit className="text-tertiary mb-4" size={36} />
              <h2 className="font-headline text-2xl font-bold tracking-tight mb-4 uppercase text-on-background">AI for Defence & Intel</h2>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed font-light">Transforming raw data into operational superiority through advanced analytics.</p>
              <div className="space-y-4 mt-auto">
                <ProgressBar label="Satellite Analytics" status="98.4% ACC" percent={90} delay={0.3} />
                <div className="pt-2">
                  <ProgressBar label="ISR Data Fusion" status="LIVE" percent={75} delay={0.5} />
                </div>
              </div>
            </GlassPanel>
          </AnimatedSection>

          {/* Project Management */}
          <AnimatedSection delay={0.15} className="md:col-span-4 h-full min-h-0">
            <motion.div className="bg-surface-container p-8 rounded-2xl h-full min-h-0 flex flex-col transition-all">
              <Kanban className="text-primary mb-4" size={28} />
              <h2 className="font-headline text-xl font-bold tracking-tight mb-4 uppercase text-on-background">Project Management</h2>
              <p className="text-sm text-on-surface-variant mb-8 font-light leading-relaxed">End-to-end program management and global deployment compliance.</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <TechTag label="Compliance" />
                <TechTag label="Global Logistics" />
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Supply Chain */}
          <AnimatedSection delay={0.2} className="md:col-span-8 h-full min-h-0">
            <div className="relative overflow-hidden bg-surface-container-high p-8 rounded-2xl h-full min-h-[280px] md:min-h-0">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h2 className="font-headline text-3xl font-bold tracking-tight mb-2 uppercase text-on-background">Global Supply Chain</h2>
                  <p className="text-on-surface-variant max-w-md text-sm font-light">Resilient network design and risk-mitigated sourcing for defence-grade hardware components.</p>
                </div>
                <div className="flex gap-12 mt-8">
                  <div><div className="text-3xl font-headline font-bold text-primary">45+</div><div className="text-[10px] uppercase font-bold text-outline tracking-widest">Global Nodes</div></div>
                  <div><div className="text-3xl font-headline font-bold text-primary">0%</div><div className="text-[10px] uppercase font-bold text-outline tracking-widest">Critical Failure</div></div>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none grayscale">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-tertiary/10 to-transparent" />
              </div>
            </div>
          </AnimatedSection>

          {/* Interior Design & Infrastructure Development */}
          <AnimatedSection delay={0.08} className="md:col-span-12 h-full min-h-0">
            <TonalCard className="h-full bg-surface-container-high">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-primary mb-4"><path d="M3 21V5.6a1 1 0 0 1 .553-.894l7-3.5a1 1 0 0 1 .894 0l7 3.5A1 1 0 0 1 21 5.6V21M3 21h18M3 21v-2.4a1 1 0 0 1 .553-.894l7-3.5a1 1 0 0 1 .894 0l7 3.5A1 1 0 0 1 21 18.6V21"/><path d="M7 10v4m5-4v4m5-4v4"/></svg>
                  <h2 className="font-headline text-3xl font-bold tracking-tight uppercase text-on-background">Interior Design & Infrastructure Development</h2>
                </div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest mt-2">ID01_ENVIRONMENTS</span>
              </div>
              <div className="space-y-6">
                <p className="text-on-surface-variant text-base leading-relaxed mb-4">
                  <strong>Safecon Blu Parrot</strong> offers end-to-end interior design and infrastructure development services for showrooms, warehouses, and factory environments, combining aesthetic excellence with operational efficiency. We design spaces that are visually impactful, functional, scalable, and aligned with modern industrial requirements.
                </p>
                <div className="relative overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-low">
                  <img
                    src={siteImagery.interiorDesignInfrastructure.src}
                    alt={siteImagery.interiorDesignInfrastructure.alt}
                    className="h-[260px] w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-headline text-lg font-bold mb-2 text-on-background">Showroom Design (Experience-Led Spaces)</h3>
                    <ul className="list-disc pl-5 text-on-surface-variant space-y-2 text-sm">
                      <li>Premium showroom interiors for engineering, manufacturing, industrial, and consumer brands</li>
                      <li>Product display optimization and customer journey design</li>
                      <li>Integration of digital screens, interactive zones, and branding elements</li>
                      <li>High-end finishes aligned with global brand standards</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold mb-2 text-on-background">Warehouse Design (Efficiency & Flow)</h3>
                    <ul className="list-disc pl-5 text-on-surface-variant space-y-2 text-sm">
                      <li>Layout planning for optimized storage and movement</li>
                      <li>Zoning for inventory, dispatch, and logistics</li>
                      <li>Space utilization for maximum operational efficiency</li>
                      <li>Integration with supply chain and workflow systems</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold mb-2 text-on-background">Factory & Industrial Interiors</h3>
                    <ul className="list-disc pl-5 text-on-surface-variant space-y-2 text-sm">
                      <li>Functional design for manufacturing units and assembly lines</li>
                      <li>Workflow-driven layouts to improve productivity</li>
                      <li>Safety-compliant infrastructure design</li>
                      <li>Integration with engineering systems and equipment setup</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold mb-2 text-on-background">Turnkey Execution</h3>
                    <ul className="list-disc pl-5 text-on-surface-variant space-y-2 text-sm">
                      <li>Concept design to final execution</li>
                      <li>Vendor management and procurement</li>
                      <li>Civil, electrical, and finishing work</li>
                      <li>Project timelines and quality control</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold mb-2 text-on-background">Our Approach</h3>
                    <ul className="list-disc pl-5 text-on-surface-variant space-y-2 text-sm">
                      <li><strong>Design Thinking</strong> → Aesthetic + Brand Alignment</li>
                      <li><strong>Engineering Mindset</strong> → Efficiency + Functionality</li>
                      <li><strong>Execution Excellence</strong> → Timely Delivery + Quality</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold mb-2 text-on-background">Where We Add Value</h3>
                    <ul className="list-disc pl-5 text-on-surface-variant space-y-2 text-sm">
                      <li>Industrial manufacturing units</li>
                      <li>Commercial showrooms & experience centres</li>
                      <li>Warehousing & logistics hubs</li>
                      <li>Large-scale operational facilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TonalCard>
          </AnimatedSection>
        </div>
      </Section>

      {/* Support Models & Training */}
      <Section bg="bg-surface">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-12 h-px bg-tertiary" />
                  <span className="text-tertiary font-label text-xs uppercase tracking-[0.2em] font-bold">Engagement & Readiness</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-background leading-[1.15]">
                  Support Models & Training
                </h2>
              </div>
              <p className="text-sm text-[#9aa3aa] max-w-[420px] md:text-right leading-relaxed">
                Flexible deployment options and specialized programmes designed for mission-critical readiness.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch gap-8 lg:auto-rows-fr">
            {/* Support Models */}
            <AnimatedSection className="h-full min-h-0 flex flex-col gap-6 lg:min-h-[480px]">
                <motion.div
                  className="bg-surface-container-low p-8 rounded-2xl transition-all flex-1 flex flex-col min-h-[200px]"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPinned className="text-primary" size={22} />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-2 text-on-background">Onbase (Onsite)</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">Direct personnel integration within secure facilities for real-time mission support, field engineering, and system adjustments.</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <TechTag label="Field Support" />
                        <TechTag label="Installation" />
                        <TechTag label="Testing" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-surface-container-low p-8 rounded-2xl transition-all flex-1 flex flex-col min-h-[200px]"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Wifi className="text-tertiary" size={22} />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-2 text-on-background">Offbase (Offshore)</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">Secure, remote technical support centers handling maintenance cycles, AI model upgrades, and multi-source data processing.</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <TechTag label="Remote Diagnostics" />
                        <TechTag label="AI Upgrades" />
                      </div>
                    </div>
                  </div>
                </motion.div>
            </AnimatedSection>

            {/* Specialized Training */}
            <AnimatedSection delay={0.2} className="h-full min-h-0 lg:min-h-[480px]">
              <div className="relative p-10 bg-surface-container-highest rounded-2xl h-full min-h-[420px] lg:min-h-full overflow-hidden flex flex-col">
                <div className="absolute top-4 right-4 opacity-10">
                  <Target className="text-tertiary" size={80} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <ScanEye className="text-tertiary" size={24} />
                    <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background">Specialized Training</h2>
                  </div>
                  <div className="space-y-8">
                    <FeatureRow icon={<Antenna className="text-tertiary" size={22} />} title="SDR Integration" description="Tactical radio operations and spectral analysis training for field operators." />
                    <FeatureRow icon={<Sparkles className="text-tertiary" size={22} />} title="AI Applications" description="Leveraging neural networks for intelligence synthesis and threat detection." />
                    <FeatureRow icon={<Target className="text-tertiary" size={22} />} title="Operational Readiness" description="Technical manual mastery and rapid hardware deployment protocols." />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
      </Section>

      {/* Key Programs & Expertise */}
      <Section bg="bg-surface-container-low">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <SectionLabel label="Program Verticals" className="mb-4" />
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background">Key Programs & Expertise</h2>
            </div>
            <p className="text-sm text-[#9aa3aa] max-w-[420px] md:text-right leading-relaxed">
              Proven execution across high-stakes defence verticals and mission-critical deployments.
            </p>
          </div>
        </AnimatedSection>
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          {keyPrograms.map((program, i) => (
            <StaggerItem key={program} tight className="h-full min-h-0">
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-surface-container-high p-6 rounded-2xl h-full min-h-[132px] flex flex-col justify-center ring-1 ring-white/[0.04]"
              >
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">0{i + 1}</span>
                <h4 className="font-headline font-bold text-on-background text-sm">{program}</h4>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Projects & Experience */}
      <Section bg="bg-background">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <SectionLabel label="Track Record" className="mb-4" />
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background">Projects & Experience</h2>
            </div>
            <p className="text-sm text-[#9aa3aa] max-w-[420px] md:text-right leading-relaxed">
              Our portfolio spans diverse defence environments and operational theatres.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projectExperience.map((project, i) => {
            const icons = [Anchor, Mountain, CircuitBoard, Target, BrainCircuit, Radar];
            const Icon = icons[i] || CircuitBoard;
            return (
              <AnimatedSection key={project} delay={i * 0.08} className="h-full min-h-0">
                <div className="bg-surface-container-low p-8 rounded-2xl h-full min-h-[168px] flex flex-col">
                  <Icon className={i % 2 === 0 ? 'text-primary mb-4' : 'text-tertiary mb-4'} size={24} />
                  <p className="text-on-background font-headline font-bold text-base">{project}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* Certifications & Compliance */}
      <Section bg="bg-surface-container-low">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel label="Quality Assurance" className="justify-center mb-4" />
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background mb-4">{certifications.title}</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-stretch">
          {certifications.items.map((item, i) => (
            <AnimatedSection key={item} delay={i * 0.1} className="h-full min-h-0">
              <div className="bg-surface-container-high p-8 rounded-2xl text-center h-full min-h-[200px] flex flex-col items-center justify-center">
                <BadgeCheck className={i % 2 === 0 ? 'text-primary mx-auto mb-4' : 'text-tertiary mx-auto mb-4'} size={28} />
                <p className="text-on-background font-headline font-bold text-sm">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Whitepapers & Insights */}
      <Section bg="bg-background">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <SectionLabel label="Knowledge Base" className="mb-4" />
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background">Whitepapers & Insights</h2>
              <p className="text-[#bfc6cc] mt-4 max-w-lg leading-[1.6]">
                Notes from programmes we have run—integration, AI, and procurement—not generic market commentary.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {whitepapers.map((wp, i) => (
            <AnimatedSection key={wp.id} delay={i * 0.08} className="h-full min-h-0 flex">
              <div className="bg-surface-container-low p-8 rounded-2xl h-full min-h-[320px] w-full flex flex-col ring-1 ring-white/[0.06]">
                <div className="flex-1 min-h-0 flex flex-col">
                  <FileDown className={i % 2 === 0 ? 'text-primary mb-4 shrink-0' : 'text-tertiary mb-4 shrink-0'} size={24} />
                  <h4 className="font-headline font-bold text-on-background mb-3 min-h-[3rem] sm:min-h-[3.25rem] line-clamp-2">{wp.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed flex-1 min-h-[4.5rem] line-clamp-4">{wp.description}</p>
                </div>
                <button
                  type="button"
                  className="mt-8 pt-6 border-t border-outline-variant/20 text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:gap-3 transition-all shrink-0"
                >
                  Download <FileDown size={14} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Need a module brief or SOW language?"
        description="Tell us the programme, security context, and interfaces—we will point you to the right team and artefacts."
      >
        <Link to="/contact"><DSButton>Request Module Briefing</DSButton></Link>
        <DSButton variant="outline">Download Tech Stack</DSButton>
      </CtaBanner>

      {/* FAB */}
      <Link to="/contact" className="fixed bottom-8 right-8 z-50 bg-tertiary text-on-tertiary w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform hover:shadow-[0_0_20px_rgba(0,225,171,0.4)]">
        <MessageSquarePlus size={24} />
      </Link>
    </div>
  );
};
