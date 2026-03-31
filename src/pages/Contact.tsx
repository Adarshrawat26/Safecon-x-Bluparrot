import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import {
  PageHero,
  SectionLabel,
  GlassPanel,
  DSButton,
  CtaBanner,
} from '../components/ui/DesignSystem';
import { contact } from '../data/content';
import { siteImagery } from '../data/siteImagery';
import {
  Mail,
  PhoneCall,
  MapPinned,
  SendHorizontal,
  Earth,
  LockKeyhole,
  ArrowRight,
  Landmark,
  CalendarClock,
} from 'lucide-react';

const inquiryTypes = [
  'Defence Program Inquiry',
  'AI & Intelligence Solutions',
  'Supply Chain & Sourcing',
  'Israel Desk & Partnerships',
  'Atmanirbhar / Make in India',
  'Training & Capability Building',
  'General Inquiry',
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(
      `[${formData.inquiry || 'Inquiry'}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nPhone: ${formData.phone}\nInquiry Type: ${formData.inquiry}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <PageHero
        editorialLayout
        badge="Contact"
        title={
          <>
            Talk to us about <span className="text-primary italic">your programme</span>
          </>
        }
        description="Ready to discuss your defence and aerospace initiatives? Our team is available to scope requirements, share whitepapers, or set up a strategic consultation."
        imageSrc={siteImagery.factoryFloor.src}
        imageAlt={siteImagery.factoryFloor.alt}
        imagePosition="object-[center_45%]"
      />

      {/* Main Content */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
            {/* Left: Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <SectionLabel label="Reach Out" className="mb-6" />
                  <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Direct Channels</h2>
                  <p className="text-[#9aa3aa] leading-[1.65] max-w-[520px]">
                    For defence program inquiries, partnership discussions, or technical consultations — connect with us through any of the channels below.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <GlassPanel className="p-6 group transition-all">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Email</p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-lg font-headline font-bold text-on-surface hover:text-primary transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </GlassPanel>

                  <GlassPanel className="p-6 group transition-all">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <PhoneCall className="text-primary" size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Phone</p>
                        <p className="text-lg font-headline font-bold text-on-surface">{contact.phone}</p>
                      </div>
                    </div>
                  </GlassPanel>

                  <GlassPanel className="p-6 group transition-all">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CalendarClock className="text-tertiary" size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Business Hours</p>
                        <p className="text-sm font-bold text-on-surface">Mon – Fri, 09:00 – 18:00 IST</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">Response within 24 business hours</p>
                      </div>
                    </div>
                  </GlassPanel>
                </div>

                {/* Offices */}
                <div className="pt-4">
                  <SectionLabel label="Locations" className="mb-6" />
                  <div className="space-y-4">
                    {contact.offices.map((office) => (
                      <div key={office.location} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-surface-container-highest rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                          {office.type === 'Headquarters' ? (
                            <Landmark className="text-primary" size={18} />
                          ) : (
                            <Earth className="text-tertiary" size={18} />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-headline font-bold text-on-surface">{office.location}</span>
                            <span className="text-[9px] uppercase tracking-widest font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full">{office.type}</span>
                          </div>
                          <p className="text-sm text-on-surface-variant">{office.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Note */}
                <div className="pt-8">
                  <div className="flex items-start gap-3">
                    <LockKeyhole className="text-tertiary flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      All communications are handled under strict defence-grade confidentiality protocols. ITAR and EAR compliance maintained across all channels.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={0.15}>
              <div className="bg-surface-container-high rounded-2xl p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface">Send a Secure Message</h3>
                    <p className="text-sm text-on-surface-variant mt-1">Fields marked with * are required</p>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary/10 rounded-xl items-center justify-center">
                    <SendHorizontal className="text-primary" size={20} />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange('name')}
                        className="w-full px-4 py-3.5 bg-surface-container-highest border-b-2 border-surface-variant text-on-surface text-sm placeholder:text-outline/50 focus:border-tertiary focus:shadow-[0_2px_8px_rgba(0,225,171,0.15)] outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange('email')}
                        className="w-full px-4 py-3.5 bg-surface-container-highest border-b-2 border-surface-variant text-on-surface text-sm placeholder:text-outline/50 focus:border-tertiary focus:shadow-[0_2px_8px_rgba(0,225,171,0.15)] outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={handleChange('organization')}
                        className="w-full px-4 py-3.5 bg-surface-container-highest border-b-2 border-surface-variant text-on-surface text-sm placeholder:text-outline/50 focus:border-tertiary focus:shadow-[0_2px_8px_rgba(0,225,171,0.15)] outline-none transition-all"
                        placeholder="Company / Organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        className="w-full px-4 py-3.5 bg-surface-container-highest border-b-2 border-surface-variant text-on-surface text-sm placeholder:text-outline/50 focus:border-tertiary focus:shadow-[0_2px_8px_rgba(0,225,171,0.15)] outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange('inquiry')}
                      className="w-full px-4 py-3.5 bg-surface-container-highest border-b-2 border-surface-variant text-on-surface text-sm focus:border-tertiary focus:shadow-[0_2px_8px_rgba(0,225,171,0.15)] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-surface-container-highest">Select inquiry type...</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type} className="bg-surface-container-highest">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange('message')}
                      className="w-full px-4 py-3.5 bg-surface-container-highest border-b-2 border-surface-variant text-on-surface text-sm placeholder:text-outline/50 focus:border-tertiary focus:shadow-[0_2px_8px_rgba(0,225,171,0.15)] outline-none transition-all resize-none"
                      placeholder="Tell us about your programme requirements, timelines, or technical specifications..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
                    <p className="text-[10px] text-outline max-w-xs leading-relaxed">
                      By submitting, you agree to our confidentiality and data handling protocols.
                    </p>
                    <button
                      type="submit"
                      className="group flex items-center gap-3 bg-primary text-on-primary px-7 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs whitespace-nowrap hover:translate-y-[-2px] transition-all active:scale-95 shadow-lg shadow-primary/15"
                    >
                      Send Message
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Presence Strip */}
      <section className="py-20 bg-surface overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel label="Global Reach" className="justify-center mb-6" />
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Multi-Location Operations</h2>
              <p className="text-[#bfc6cc] max-w-2xl mx-auto leading-[1.65]">
                Supporting defence programs across India and globally with flexible onsite and offshore engagement models.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                icon: MapPinned,
                title: 'India Operations',
                desc: 'Headquarters in Delhi NCR with manufacturing and integration facilities across the country.',
                tag: 'Primary Hub',
              },
              {
                icon: Earth,
                title: 'International Reach',
                desc: '25+ countries served through strategic partnerships, supply chain networks, and offshore teams.',
                tag: '25+ Nations',
              },
              {
                icon: LockKeyhole,
                title: 'Secure Engagement',
                desc: 'Defence-grade communication protocols, ITAR compliance, and classified program support capability.',
                tag: 'Cleared Facility',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} className="h-full min-h-0">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-surface-container-low rounded-2xl p-8 h-full min-h-[220px] flex flex-col transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <item.icon className="text-primary" size={22} />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-tertiary">{item.tag}</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-3">{item.title}</h3>
                  <p className="text-sm text-[#9aa3aa] leading-[1.65] flex-1">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection>
        <CtaBanner
          title="Ready for a strategic consultation?"
          description="Schedule a call with our leadership team to discuss programme requirements, technology partnerships, or indigenisation roadmaps."
        >
          <a href={`mailto:${contact.email}?subject=Strategic Consultation Request`}>
            <DSButton>
              <span className="flex items-center gap-3">Schedule Call <ArrowRight size={18} /></span>
            </DSButton>
          </a>
        </CtaBanner>
      </AnimatedSection>
    </div>
  );
};
