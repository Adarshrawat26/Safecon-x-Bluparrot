import { motion } from 'framer-motion';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imagePath?: string;
  gradient?: boolean;
  height?: 'full' | 'tall' | 'medium';
}

export const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  imagePath,
  gradient = true,
  height = 'tall'
}: PageHeroProps) => {
  const heights = {
    full: 'min-h-screen',
    tall: 'min-h-[70vh]',
    medium: 'min-h-[50vh]'
  };

  return (
    <div className={`relative ${heights[height]} flex items-center justify-center overflow-hidden`}>
      {imagePath && (
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={imagePath} 
            alt={title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
        </div>
      )}
      
      {!imagePath && gradient && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-navy via-bluparrot-primary to-brand-blue opacity-95" />
      )}

      <div className="relative z-10 container-custom px-6 md:px-12 text-center">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-cyan uppercase tracking-widest text-sm md:text-base font-semibold mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mb-6 ${imagePath || gradient ? 'text-white' : 'text-gradient'}`}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${
              imagePath || gradient ? 'text-gray-200' : 'text-gray-600'
            }`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
};
