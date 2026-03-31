import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
  dark?: boolean;
}

export const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  gradient = false,
  dark = false
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`mb-4 ${gradient ? 'text-gradient' : dark ? 'text-white' : ''}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg md:text-xl max-w-3xl mx-auto ${
            dark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
