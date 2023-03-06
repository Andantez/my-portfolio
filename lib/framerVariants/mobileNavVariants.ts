import type { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  initial: {
    x: '100%',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,

      ease: 'easeOut',
      staggerChildren: 0.04,
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0.4,
      ease: [0.49, -0.07, 0.82, 0.68],
      staggerDirection: 1,
      staggerChildren: 0.04,
      when: 'afterChildren',
    },
  },
};
export const itemVariant: Variants = {
  initial: {
    y: -25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'backOut',
      duration: 0.4,
    },
  },
  exit: {
    y: -25,
    opacity: 0,
    transition: {
      ease: 'backIn',
      duration: 0.4,
    },
  },
};
