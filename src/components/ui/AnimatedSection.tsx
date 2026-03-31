import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOutExpo } from '../../lib/motionVariants';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Larger motion for heroes; subtle for dense grids */
  amount?: number;
}

export const AnimatedSection = ({ children, delay = 0, className = '', amount = 30 }: AnimatedSectionProps) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: amount }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.58,
        delay,
        ease: easeOutExpo,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
