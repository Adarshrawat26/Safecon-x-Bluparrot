import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact } from '../../data/content';
import { BluParrotLogo } from '../brand/BluParrotLogo';
import { SafeconLogo } from '../brand/SafeconLogo';

const footerNav = {
  company: [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Capabilities' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/israel-desk', label: 'Israel Desk' },
    { to: '/atmanirbhar-bharat', label: 'Atmanirbhar Bharat' },
    { to: '/contact', label: 'Contact Us' },
  ],
  programmes: [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Capabilities' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/israel-desk', label: 'Israel Desk' },
    { to: '/atmanirbhar-bharat', label: 'Atmanirbhar Bharat' },
    { to: '/contact', label: 'Contact Us' },
  ],
  legal: [
    { to: '/contact', label: 'Privacy' },
    { to: '/contact', label: 'Terms' },
    { to: '/contact', label: 'Security & clearance' },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const reduce = useReducedMotion();

  return (
    <motion.footer
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative w-full bg-surface-container-lowest border-t border-outline-variant/15"
    >
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-tertiary/40 to-transparent opacity-90"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(168,199,255,0.05),transparent_55%)] pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-12 py-14 md:py-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 items-start">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <motion.div
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              <Link
                to="/"
                className="flex h-11 items-center rounded-[var(--radius-sm)] shrink-0 min-w-0 max-w-[min(100%,560px)]"
                aria-label="Safecon Blu Parrot — Home"
              >
                <span className="flex items-center gap-2.5 sm:gap-4">
                  <SafeconLogo className="h-7 sm:h-8 w-auto max-w-[100px] sm:max-w-[140px] shrink-0" />
                  <span className="h-7 sm:h-8 w-px bg-white/20 shrink-0" aria-hidden />
                  <BluParrotLogo className="max-h-7 sm:max-h-8 w-auto max-w-[min(48vw,260px)] sm:max-w-[300px] shrink-0" />
                </span>
              </Link>
            </motion.div>
            <p className="text-sm text-[#bfc6cc] leading-[1.6] max-w-[320px]">
              Defence manufacturing, systems integration, and applied AI—executed with programme discipline and
              export-aware compliance.
            </p>
          </div>

          <nav aria-label="Company">
            <h3 className="text-[12px] font-headline font-bold uppercase tracking-[0.2em] text-tertiary mb-4 opacity-90">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map(({ to, label }) => (
                <li key={to + label}>
                  <Link
                    to={to}
                    className="text-sm text-[#bfc6cc] leading-[1.6] hover:text-accent-soft transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programmes">
            <h3 className="text-[12px] font-headline font-bold uppercase tracking-[0.2em] text-tertiary mb-4 opacity-90">
              Programmes
            </h3>
            <ul className="space-y-3">
              {footerNav.programmes.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-[#bfc6cc] leading-[1.6] hover:text-accent-soft transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Direct line */}
          <div className="sm:col-span-2 lg:col-span-1 rounded-[var(--radius)] bg-[var(--bg-glass)] ring-1 ring-white/[0.1] backdrop-blur-[10px] p-6 sm:p-7 transition-[background-color,box-shadow] duration-300 hover:bg-white/[0.07]">
            <h3 className="text-[12px] font-headline font-bold uppercase tracking-[0.2em] text-[#9aa3aa] mb-2 opacity-80">
              Direct line
            </h3>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 text-base font-semibold text-white hover:text-accent-soft transition-colors duration-300 group"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-primary/10 text-primary ring-1 ring-primary/25 group-hover:bg-primary/15 transition-colors">
                <Mail size={18} strokeWidth={1.5} />
              </span>
              <span className="break-all">{contact.email}</span>
            </a>
            <p className="mt-3 text-sm text-[#bfc6cc] leading-[1.6]">
              {contact.offices[0]?.location} · {contact.offices[1]?.type}
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-[#22c7a8] font-headline text-xs font-semibold uppercase tracking-widest hover:gap-3 transition-all duration-300 group/link"
            >
              Start a conversation
              <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <p className="text-sm text-[#bfc6cc] order-2 lg:order-1">
            © {currentYear} Safecon Blu Parrot. All rights reserved.
          </p>
          <nav
            className="flex flex-wrap gap-x-8 gap-y-2 order-1 lg:order-2 justify-start lg:justify-end"
            aria-label="Legal"
          >
            {footerNav.legal.map(({ to, label }) => (
              <Link
                key={label}
                to={to}
                className="text-xs uppercase tracking-widest font-headline font-semibold text-[#9aa3aa] hover:text-white transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.footer>
  );
};
