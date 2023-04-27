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
      duration: 1.5,
      ease: 'circOut',
    },
  },
};

export const initialAnimationContainer: Variants = {
  animate: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
      when: 'afterChildren',
    },
  },
};

export const fadeOut: Variants = {
  animate: {
    y: -30,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      staggerChildren: 0.08,
      when: 'afterChildren',
    },
  },
};
