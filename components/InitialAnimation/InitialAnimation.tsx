import { motion, Variants } from 'framer-motion';
import { animationContainer, heading } from './InitialAnimation.css';
import { accent } from '../../styles/SharedStyles.css';

const textVariant: Variants = {
  hidden: {
    WebkitMaskImage: `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 25px, rgba(0,0,0,1) 25px, rgba(0,0,0,1) 25px)`,
    opacity: 0,
  },
  visible: {
    WebkitMaskImage: `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 25px)`,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const dotVariant: Variants = {
  initial: {
    opacity: 0,
    y: '-100%',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      type: 'spring',
      stiffness: 225,
      damping: 7.5,
    },
  },
};
const InitialAnimation = () => {
  return (
    <motion.div
      // initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      // animate={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
      transition={{ duration: 1.6 }}
      className={animationContainer}
    >
      <motion.h1
        className={heading}
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        Loading
        <motion.span
          style={{ display: 'inline-block' }}
          initial="initial"
          animate="animate"
          variants={dotVariant}
          className={accent.base}
        >
          .
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default InitialAnimation;
