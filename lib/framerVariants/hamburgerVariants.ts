import type { Variants } from 'framer-motion';

export const topAndBottomLine: Variants = {
  initial: {
    pathLength: 0.4, // stroke-dasharray first value
    pathSpacing: 1, // stroke-dasharray second value
    pathOffset: 0.71, // stroke-dashoffset
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
      delay: 0.25,
    },
  },
  animate: {
    pathLength: 0.3,
    pathSpacing: 1,
    pathOffset: 0.035,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export const middleLine: Variants = {
  initial: {
    pathLength: 1,
    pathSpacing: 1,
    pathOffset: 0,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      delay: 0.4,
    },
  },
  animate: {
    pathLength: 1,
    pathSpacing: 1,
    pathOffset: 1,
    x: 15,
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
};
