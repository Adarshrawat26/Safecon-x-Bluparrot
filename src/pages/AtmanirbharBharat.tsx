import { Link } from 'react-router-dom';
import makeInIndiaLogo from '../assets/images/make-in-india-logo.svg';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import {
    CtaBanner,
    DSButton,
    PageHero,
    Section,
    SectionLabel,
} from '../components/ui/DesignSystem';
import { siteImagery } from '../data/siteImagery';

type ContentSection = {
  title: string;
  intro?: string;
  points: string[];
};

const contentSections: ContentSection[] = [
  {
    title: 'Indigenisation (Make in India)',
    intro: 'We actively drive indigenous defence capabilities through:',
    points: [
      'Local manufacturing of critical components',
      'Technology transfer & localization',
      'Reduced dependency on imports',
      'Alignment with Government of India defence initiatives',
    ],
  },
  {
    title: 'Global Supply Chain & Locations',
    points: [
      'Strong global supplier network (OEMs & partners)',
      'Access to critical industrial materials & components',
      'Presence across multiple global locations',
      'Ability to support both domestic and international defence programs',
    ],
  },
  {
    title: 'Key Programs & Expertise',
    points: [
      'SCA 2.2.2 Programs',
      'SDR Integration',
      'Slip Ring Systems',
      'Naval & Maritime Systems',
      'High Altitude Deployments',
      'Defence Electronics & Communication Systems',
      'DataScience and AI',
    ],
  },
  {
    title: 'Projects & Experience',
    intro: 'Our portfolio spans diverse defence environments:',
    points: [
      'Naval systems & maritime platforms',
      'High-altitude operational deployments',
      'Slip ring manufacturing & integration',
      'Lifeboat and safety systems',
      'AI-powered intelligence platforms , OSINT ( Open Souce intelligence )',
    ],
  },
  {
    title: 'Certifications & Compliance',
    points: [
      'ISO 9001:2015 (Quality Management System)',
      'ISO 14001:2015 (Environmental Management System)',
      'ISO 45001:2018 (Occupational Health & Safety Management)',
      'Defence-grade quality standards',
      'Compliance with global and Indian defence regulations',
      'Proven execution frameworks for sensitive projects',
    ],
  },
  {
    title: 'Whitepapers & Insights',
    intro: 'We contribute to the defence ecosystem with thought leadership on:',
    points: [
      'AI in Defence & Surveillance',
      'SDR & Communication Systems',
      'Integration Architectures',
      'Future of Defence Manufacturing',
      'Trainign and Capability Development',
    ],
  },
  {
    title: 'Why Safecon Blu Parrot',
    points: [
      'Unique blend of Defence Manufacturing + Indigenisation + Design + AI + Execution',
      'Strong focus on indigenisation and self-reliance',
      'Proven capabilities across manufacturing, integration, and lifecycle support',
      'Flexible onsite + offshore engagement model',
      'Trusted partner for complex defence programs',
    ],
  },
];

const heroCapabilityChips = [
  'Indigenous Manufacturing',
  'Global Supply Chain',
  'Defence Electronics',
  'AI & OSINT Systems',
];

const heroProgramFocus = [
  'SCA 2.2.2 Programs',
  'SDR Integration',
  'Naval & Maritime Systems',
  'High Altitude Deployments',
];

const certificateHighlights = [
  { code: 'ISO 9001:2015', area: 'Quality Management System' },
  { code: 'ISO 14001:2015', area: 'Environmental Management System' },
  { code: 'ISO 45001:2018', area: 'Occupational Health & Safety' },
];

export const AtmanirbharBharat = () => {
  return (
    <div className="w-full">
      <PageHero
        editorialLayout
        height="extended"
        badge="Atmanirbhar focus"
        title="Atmanirbhar Bharat | Make in India"
        description="Indigenous innovation, engineering, manufacturing, and AI for mission-critical defence programs."
        imageSrc={siteImagery.factoryFloor.src}
        imageAlt={siteImagery.factoryFloor.alt}
        imagePosition="object-center"
      >
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-8">
          <div>
            <div className="inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-sm">
              <img
                src={makeInIndiaLogo}
                alt="Make in India logo"
                className="h-16 w-auto rounded-lg border border-white/15 bg-black/30 p-1.5"
                loading="eager"
              />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-tertiary">National Mission</p>
                <p className="text-sm font-semibold text-on-background">Atmanirbhar Bharat | Make in India</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {heroCapabilityChips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d0d7de]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-black/45 to-black/20 p-5 backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">Program Focus</p>
            <ul className="mt-4 space-y-2.5">
              {heroProgramFocus.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#d0d7de] leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-tertiary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageHero>

      <Section bg="bg-background">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel label="Core Capabilities" className="mb-10" />
          </AnimatedSection>

          <div className="space-y-10 md:space-y-12">
            {contentSections.map((section, sectionIndex) => (
              <AnimatedSection key={section.title} delay={sectionIndex * 0.04}>
                <article
                  className={
                    section.title === 'Certifications & Compliance'
                      ? 'rounded-2xl border border-blue-300/20 bg-gradient-to-br from-[#1c2638]/90 via-[#1a2434]/85 to-[#182131]/90 p-6 md:p-8 shadow-[0_20px_80px_rgba(49,110,255,0.08)]'
                      : sectionIndex % 2 === 0
                        ? 'rounded-2xl border border-slate-500/25 bg-[#1b2637]/82 p-6 md:p-8'
                        : 'rounded-2xl border border-slate-400/20 bg-[#161d2b]/88 p-6 md:p-8'
                  }
                >
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-background">{section.title}</h2>

                  {section.title === 'Certifications & Compliance' && (
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                      {certificateHighlights.map((cert) => (
                        <div
                          key={cert.code}
                          className="rounded-xl border border-blue-200/25 bg-[#0f1728]/70 p-4 backdrop-blur-sm"
                        >
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-200">Certified</p>
                          <p className="mt-2 text-base font-semibold text-white">{cert.code}</p>
                          <p className="mt-1 text-xs text-slate-300">{cert.area}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.intro && (
                    <p className="mt-4 text-[#bfc6cc] text-base leading-[1.65]">{section.intro}</p>
                  )}

                  <ul className="mt-5 space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[#bfc6cc] leading-[1.65]">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Section>

      <AnimatedSection>
        <CtaBanner
          title="Atmanirbhar Bharat Execution"
          description="Safecon Blu Parrot supports complex defence programs through indigenous manufacturing, integration, compliance, and AI-enabled execution."
        >
          <Link to="/contact">
            <DSButton>Contact Us</DSButton>
          </Link>
        </CtaBanner>
      </AnimatedSection>
    </div>
  );
};
