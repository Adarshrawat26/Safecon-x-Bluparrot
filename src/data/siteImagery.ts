import defenceAviation from '../assets/images/sections/defence-aviation.jpg';
import engineeringProduction from '../assets/images/sections/engineering-production.jpg';
import factoryFloor from '../assets/images/sections/factory-floor.jpg';
import heavyIndustrialProduction from '../assets/images/sections/heavy-industrial-production.jpg';
import industrialRdLab from '../assets/images/sections/industrial-rd-lab.jpg';

/** Licensed stock (Unsplash) — swap for your own programme photography when cleared for web use. */
export const siteImagery = {
  engineeringProduction: {
    src: engineeringProduction,
    alt: 'Engineers and technicians working with industrial production equipment.',
  },
  factoryFloor: {
    src: factoryFloor,
    alt: 'Manufacturing floor with industrial machinery and production lines.',
  },
  defenceAviation: {
    src: defenceAviation,
    alt: 'Military fast jets on a flight line at sunset.',
  },
  industrialRdLab: {
    src: industrialRdLab,
    alt: 'Engineers working with industrial equipment in a technical environment.',
  },
  heavyIndustrialProduction: {
    src: heavyIndustrialProduction,
    alt: 'Large-scale industrial plant with piping and heavy production infrastructure.',
  },
} as const;
