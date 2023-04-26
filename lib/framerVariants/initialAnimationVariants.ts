import { Variants } from 'framer-motion';

export const textAnimation: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'circOut',
    },
  },
};

export const initialAnimationContainer: Variants = {
  animate: {
    y: '-100%',

    transition: {
      staggerChildren: 0.08,
      duration: 0.85,
      delay: 2,
      ease: [0.52, 0.25, 0.82, 0.68],
    },
  },
};

export const svgPath: Variants = {
  initial: {
    d: 'M0,0 L0,1 Q0.5,1,1,1 L1,0',
  },
  animate: {
    d: 'M0,0 L0,0.857 Q0.5,1,1,0.857 L1,0',
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};
