import { modalTextColor } from '../../styles/vars.css';
import { motion } from 'framer-motion';
import { sunInner, sunOuter } from '../../lib/framerVariants';

const Sun = (): JSX.Element => {
  return (
    <motion.svg
      fill="none"
      stroke={modalTextColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="20px"
      width="20px"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.path
        d="M17 12 A5 5 0 0 1 12 17 A5 5 0 0 1 7 12 A5 5 0 0 1 17 12 z"
        variants={sunInner}
      />
      <motion.path
        variants={sunOuter}
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </motion.svg>
  );
};

export default Sun;
