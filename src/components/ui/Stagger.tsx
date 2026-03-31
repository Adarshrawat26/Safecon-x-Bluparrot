import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerItem, staggerItemTight } from '../../lib/motionVariants';

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Viewport margin (px) before triggering */
  margin?: string;
};

/** Parent: use with StaggerItem children only */
export const Stagger = ({ children, className = '', margin = '-70px' }: StaggerProps) => {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = '',
  tight = false,
}: {
  children: ReactNode;
  className?: string;
  tight?: boolean;
}) => {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div className={className} variants={tight ? staggerItemTight : staggerItem}>
      {children}
    </motion.div>
  );
};
