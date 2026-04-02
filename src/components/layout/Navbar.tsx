import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { staggerContainer, staggerItem } from '../../lib/motionVariants';
import { BluParrotLogo } from '../brand/BluParrotLogo';
import { SafeconLogo } from '../brand/SafeconLogo';

const MotionLink = motion(Link);

const navLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Capabilities' },
  { path: '/leadership', label: 'Leadership' },
  { path: '/israel-desk', label: 'Israel Desk' },
  { path: '/atmanirbhar-bharat', label: 'Atmanirbhar Bharat' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-outline-variant/15 shadow-lg shadow-black/30'
          : 'bg-background/55 backdrop-blur-md'
      }`}
    >
      <div className="h-[72px] flex justify-between items-center px-6 sm:px-10 lg:px-12 max-w-none mx-auto">
        <MotionLink
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex h-11 items-center rounded-[var(--radius-sm)] px-3 py-1.5 shrink-0 min-w-0 max-w-[min(100%,560px)]"
          aria-label="Safecon Blu Parrot — Home"
          whileHover={reduceMotion ? undefined : { scale: 1.005 }}
          whileTap={reduceMotion ? undefined : { scale: 0.995 }}
          transition={{ type: 'spring', stiffness: 460, damping: 26 }}
        >
          <span className="flex items-center gap-2.5 sm:gap-4">
            <SafeconLogo className="h-7 sm:h-8 w-auto max-w-[100px] sm:max-w-[140px] shrink-0" />
            <span className="h-7 sm:h-8 w-px bg-white/20 shrink-0" aria-hidden />
            <BluParrotLogo className="max-h-7 sm:max-h-8 w-auto max-w-[min(48vw,260px)] sm:max-w-[300px] shrink-0" />
          </span>
        </MotionLink>

        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <MotionLink
              key={link.path}
              to={link.path}
              className={`relative text-sm font-semibold tracking-[0.5px] transition-opacity duration-200 ${
                location.pathname === link.path
                  ? 'text-accent-soft opacity-100'
                  : 'text-white/85 hover:text-white hover:opacity-100 opacity-85'
              }`}
              whileHover={reduceMotion ? undefined : { y: -1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              {link.label}
            </MotionLink>
          ))}
        </div>

        <MotionLink to="/contact" className="hidden md:block">
          <motion.button
            type="button"
            className="ds-interactive bg-primary text-on-primary-fixed px-[18px] py-2.5 rounded-full text-sm font-medium tracking-[0.02em] shadow-md shadow-black/10"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 450, damping: 22 }}
          >
            Contact Us
          </motion.button>
        </MotionLink>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden p-2 text-white/90 hover:text-accent-soft transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden bg-surface-container border-t border-outline-variant/20 overflow-hidden"
          >
            <motion.div
              className="px-6 py-4 space-y-1"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={staggerItem}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2.5 text-sm font-semibold tracking-[0.5px] transition-colors ${
                      location.pathname === link.path ? 'text-accent-soft' : 'text-white/85 hover:text-accent-soft'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={staggerItem} className="pt-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block">
                  <motion.button
                    type="button"
                    className="ds-interactive w-full bg-primary text-on-primary-fixed px-[18px] py-2.5 rounded-full text-sm font-medium mt-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
