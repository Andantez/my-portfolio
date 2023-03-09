import type { Variants } from "framer-motion";

export const container: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};
export const content: Variants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 255,
      duration: 0.45,
      damping: 13,
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 225,
      duration: 0.45,
      damping: 13,
    },
  },
};

export const drawIcon: Variants = {
  initial: {
    pathLength: 0,
    // strokeLinecap: 'butt',
  },
  animate: {
    pathLength: 1,
    // strokeLinecap: 'round',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      delay: 0.2,
    },
  },
};