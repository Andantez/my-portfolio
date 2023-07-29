import type { Variants } from 'framer-motion';

export const aboutModalContainerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};
export const svgVariants: Variants = {
  initial: {
    d: 'M0,0 L1,0 L1,1 L1,1 C1,0.5,1,0.5,1,0',
  },
  animate: {
    d: 'M0,0 L1,0 L1,1 L0,1 C-0.211,0.75,-0.211,0.25,0,0',
    transition: {
      type: 'spring',
      stiffness: 55,
      restDelta: 2,
    },
  },
  exit: {
    d: 'M0,0 L1,0 L1,1 L1,1 C1,0.5,1,0.5,1,0',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 300,
      damping: 40,
    },
  },
};

export const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const itemWrapperVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

export const navigationVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
      delay: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
};
