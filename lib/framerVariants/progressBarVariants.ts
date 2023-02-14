import type { Variants } from 'framer-motion';

export const drawProgressBar: Variants = {
  initial: {
    pathLength: 0,
  },
  animate: (animateTo: number) => {
    return {
      pathLength: animateTo,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 0.25, bounce: 0 },
      },
    };
  },
};

export const showValue: Variants = {
  initial: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.25,
      ease: 'easeIn',
    },
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};
