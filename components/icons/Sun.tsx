import { textColor } from '../../styles/vars.css';
import { motion, Variants } from 'framer-motion';

const sun: Variants = {
  initial: {
    pathLength: 0,
    // opacity: 0,
    // rotate: 90,
  },
  animate: {
    pathLength: 1,
    // opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    pathLength: 0,
    // opacity: 0,
    // rotate: 90,
    transition: {
      duration: 0.5,
    },
  },
};
const sun2: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Sun = (): JSX.Element => {
  return (
    <motion.svg
      fill="none"
      stroke={textColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="25px"
      width="25px"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.path
        d="M17 12 A5 5 0 0 1 12 17 A5 5 0 0 1 7 12 A5 5 0 0 1 17 12 z"
        variants={sun}
      />
      <motion.path
        variants={sun2}
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </motion.svg>
  );
};

export default Sun;
