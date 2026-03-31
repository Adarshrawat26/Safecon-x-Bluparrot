/** Shared Framer Motion presets — keep durations short for defence / corporate tone */

export const easeOutExpo: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOutExpo },
  },
};

/** Slightly snappier for small tiles */
export const staggerItemTight = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: easeOutExpo },
  },
};

export const fadeUpViewport = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};
