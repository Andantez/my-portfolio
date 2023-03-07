import type { Variants } from 'framer-motion';

export const sunInner: Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    pathLength: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
export const sunOuter: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const moon: Variants = {
  initial: {
    pathLength: 0,
    rotate: 90,
  },
  animate: {
    pathLength: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 75,
    },
  },
  exit: {
    pathLength: 0,
    rotate: 90,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
