import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BrainCircuit, CircuitBoard, Cog, Radar, Satellite, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import {
    Chip,
    CtaBanner,
    DSButton,
    PageHero,
    Section,
    ValueItem,
} from '../components/ui/DesignSystem';
import { leadership, leadershipThought } from '../data/leadership';
import { siteImagery } from '../data/siteImagery';

export const Leadership = () => {
  const leadershipImageByName = Object.fromEntries(leadership.map((member) => [member.name, member.imagePath]));

  return (
    <div className="w-full">
      {/* Hero */}
      <PageHero
        editorialLayout
        badge="Leadership"
        title={
          <>
            People behind <span className="text-primary italic">aerospace & defence</span> delivery.
          </>
        }
        description="Operators and builders first: integration leads, AI leads, and programme managers who still touch hardware and customer sites."
        imageSrc={siteImagery.defenceAviation.src}
        imageAlt={siteImagery.defenceAviation.alt}
        imagePosition="object-[center_35%]"
      />

      {/* Company Story & Values */}
      <Section bg="bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <AnimatedSection className="md:col-span-5">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-8 w-1.5 bg-tertiary rounded-full" />
                <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase text-on-background">Company Story & Values</h2>
              </div>
              <p className="text-[#bfc6cc] leading-[1.65] text-base max-w-[520px]">
                We started from manufacturing and integration work that had to pass customer FAT and field trials. AI joined the picture where programmes actually needed imagery, fusion, and operator workflows—not as a slide-deck add-on.
              </p>
              <div className="space-y-6">
                <ValueItem title="Domestic ownership" description="Where Atmanirbhar applies, we document Indian content, suppliers, and tech transfer steps so audits are boring—in a good way." />
                <ValueItem title="Test like it ships" description="Environmental, EMI, and software regression paths are scoped to the platform’s real deployment—not a lab demo." />
                <ValueItem title="Useful AI only" description="Models and pipelines ship when they improve detection, maintenance, or C2 decisions—not when they merely look modern." />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="md:col-span-7">
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="space-y-6 pt-12">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest flex items-center justify-center">
                    <div className="text-6xl font-headline font-bold text-on-surface/10">AI</div>
                  </div>
                </div>
                <div className="bg-surface-container-highest p-6 rounded-2xl shadow-xl">
                  <span className="text-tertiary font-label text-[10px] uppercase tracking-widest font-black">System Status</span>
                  <div className="text-xl font-headline font-bold mt-2 text-on-background">100% Indigenous Development</div>
                </div>
              </div>
              <div className="space-y-6">
                  <div className="p-6 rounded-2xl transition-colors" style={{ background: 'linear-gradient(135deg, rgba(0, 27, 61, 0.35) 0%, rgba(28, 34, 43, 0.5) 100%)' }}>
                  <CircuitBoard className="text-primary" size={36} />
                  <div className="text-on-primary-container mt-4 font-headline font-bold">Advanced Systems Integration</div>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="w-full h-96 bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container-lowest flex items-center justify-center">
                    <div className="text-6xl font-headline font-bold text-on-surface/10">ENG</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Leadership Profiles */}
      <Section bg="bg-surface" className="!py-24 md:!py-32">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary uppercase">Strategic Command</h2>
              <p className="text-[#9aa3aa] font-body leading-relaxed max-w-xl">
                Guided by industry veterans with deep expertise in aerospace engineering and tactical artificial intelligence.
              </p>
            </div>
            <div className="flex gap-4">
              <Chip label="Executive Board" />
              <Chip label="Delivery-focused" variant="tertiary" />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {[
            { name: 'Nitin Kalra', initials: 'NK', title: 'Co-Founder & Technology Strategist', icon: <Satellite size={18} />, focus: 'AI & data platforms, satellite image analytics, and autonomous decision support for modern warfare.', tag: 'Strategic Focus: AI Integration', gradient: 'from-primary-container via-surface-container to-surface-container-lowest' },
            { name: 'Aditya Arora', initials: 'AA', title: 'Co-Founder & Chief Systems Engineer', icon: <Cog size={18} />, focus: 'Defence engineering, naval systems integration, and modular architectures for operational readiness.', tag: 'Strategic Focus: System Readiness', gradient: 'from-surface-container via-surface-container-high to-primary-container' },
          ].map((leader, i) => {
            const leaderImage = leadershipImageByName[leader.name];
            return (
            <AnimatedSection key={leader.name} delay={i * 0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative bg-surface-container rounded-[16px] overflow-hidden border border-white/[0.06] transition-all duration-300 shadow-xl hover:shadow-2xl hover:bg-white/[0.04]"
              >
                <div className="aspect-[4/4.35] w-full overflow-hidden">
                  {leaderImage ? (
                    <img
                      src={leaderImage}
                      alt={leader.name}
                      className={`w-full h-full ${leader.name === 'Nitin Kalra' ? 'object-contain object-[center_42%] bg-[#ececec]' : 'object-cover object-center'}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center`}>
                      <div className="text-[120px] font-headline font-bold text-on-surface/5">{leader.initials}</div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8" style={{ background: 'rgba(61, 68, 80, 0.45)', backdropFilter: 'blur(24px)' }}>
                  <div className="font-headline text-3xl font-bold mb-1 text-on-background">{leader.name}</div>
                  <div className="text-tertiary font-label text-xs uppercase tracking-[0.2em] mb-6 font-bold">{leader.title}</div>
                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-primary font-bold">{leader.icon}<span>Focus Areas</span></div>
                      <p className="text-[#bfc6cc] leading-[1.65]">{leader.focus}</p>
                    </div>
                    <div className="pt-6 flex justify-between items-center">
                      <span className="text-[10px] uppercase font-black text-outline tracking-wider">{leader.tag}</span>
                      <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          );})}
        </div>
      </Section>

      {/* Detailed Expertise */}
      <Section bg="bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          {leadership.map((leader, idx) => (
            <AnimatedSection key={leader.id} delay={idx * 0.15} className="h-full min-h-0">
              <div className="space-y-8 h-full min-h-[520px] flex flex-col">
                <div>
                  <span className="text-tertiary font-label text-xs uppercase tracking-[0.2em] font-bold block mb-2">{leader.title}</span>
                  <h3 className="font-headline text-2xl font-bold text-on-background mb-4">{leader.name}</h3>
                  {leader.bio.map((p, i) => (
                    <p key={i} className="text-[#bfc6cc] leading-[1.65] mb-3 max-w-[560px]">
                      {p}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="text-primary font-headline font-bold text-sm uppercase tracking-widest mb-4">Core Expertise</h4>
                  <ul className="space-y-3">
                    {leader.expertise.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-on-surface-variant">
                        <span className="h-1 w-4 bg-tertiary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-primary font-headline font-bold text-sm uppercase tracking-widest mb-4">Leadership Focus</h4>
                  <ul className="space-y-3">
                    {leader.focus.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-on-surface-variant">
                        <span className="h-1 w-4 bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Thought Leadership */}
      <Section bg="bg-background">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-12 h-px bg-tertiary" />
              <span className="text-tertiary font-label text-xs uppercase tracking-[0.2em] font-bold">{leadershipThought.subtitle}</span>
              <span className="w-12 h-px bg-tertiary" />
            </div>
            <h2 className="font-headline text-4xl font-bold text-on-background mb-6">{leadershipThought.title}</h2>
            <p className="text-[#bfc6cc] text-base leading-[1.65] max-w-2xl mx-auto">{leadershipThought.description}</p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {leadershipThought.contributions.map((item, i) => {
            const icons = [BrainCircuit, Workflow, Radar, BookOpen];
            const Icon = icons[i] || BookOpen;
            return (
              <AnimatedSection key={item} delay={i * 0.1} className="h-full min-h-0">
                <div className="bg-white/[0.04] border border-white/[0.06] p-8 rounded-[16px] text-center h-full min-h-[200px] flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/[0.06] motion-safe:hover:-translate-y-1">
                  <Icon className={i % 2 === 0 ? 'text-primary mx-auto mb-4' : 'text-tertiary mx-auto mb-4'} size={28} />
                  <p className="text-sm text-on-background font-headline font-bold">{item}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Join the Vanguard of Defence"
        description="We hire engineers and programme people who like classified hangars as much as Git repos. If that sounds like you, get in touch."
      >
        <Link to="/contact"><DSButton>Explore Careers</DSButton></Link>
        <Link to="/contact"><DSButton variant="outline">Partner With Us</DSButton></Link>
      </CtaBanner>
    </div>
  );
};
