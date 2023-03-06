import { textColor } from '../../styles/vars.css';
import { motion, Variants } from 'framer-motion';

const moon: Variants = {
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
    },
  },
};
const Moon = (): JSX.Element => {
  return (
    <motion.svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="25px"
      width="25px"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.path
        variants={moon}
        fill="none"
        stroke={textColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
      />
    </motion.svg>
  );
};

export default Moon;
