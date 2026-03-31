import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card = ({ children, className = '', hover = true, gradient = false }: CardProps) => {
  const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';
  const gradientStyles = gradient 
    ? 'bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800' 
    : 'bg-white dark:bg-gray-900';
  const borderStyles = 'border border-gray-200 dark:border-gray-800';
  const shadowStyles = 'shadow-md';

  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' } : {}}
      className={`${baseStyles} ${gradientStyles} ${borderStyles} ${shadowStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};
