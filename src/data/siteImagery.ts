import armyFactory1 from '../assets/images/sections/army-factory-1.png';
import defenceFactory2 from '../assets/images/sections/defence-factory-2.png';
import heavyFactory4 from '../assets/images/sections/heavy-factory-4.png';
import roboticsFactory3 from '../assets/images/sections/robotics-factory-3.png';

/** Licensed stock (Unsplash) — swap for your own programme photography when cleared for web use. */
export const siteImagery = {
  engineeringProduction: {
    src: armyFactory1,
    alt: 'Armoured vehicle assembly inside a defence manufacturing facility.',
  },
  factoryFloor: {
    src: defenceFactory2,
    alt: 'Defence industrial floor with munitions and heavy manufacturing lines.',
  },
  defenceAviation: {
    src: roboticsFactory3,
    alt: 'Advanced robotics inside a mission-critical manufacturing plant.',
  },
  industrialRdLab: {
    src: heavyFactory4,
    alt: 'Large-scale defence fabrication and heavy industrial machinery.',
  },
  heavyIndustrialProduction: {
    src: defenceFactory2,
    alt: 'Defence factory production line for strategic systems and components.',
  },
} as const;
