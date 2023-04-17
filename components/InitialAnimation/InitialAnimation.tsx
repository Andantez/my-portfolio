import { motion, Variants } from 'framer-motion';
import { animationContainer, heading } from './InitialAnimation.css';
import { accent } from '../../styles/SharedStyles.css';

const textVariant: Variants = {
  hidden: {
    WebkitMaskImage: `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 25px, rgba(0,0,0,1) 25px, rgba(0,0,0,1) 25px), repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 25px, rgba(0,0,0,1) 25px, rgba(0,0,0,1) 25px)`,
    opacity: 0,
  },
  visible: {
    WebkitMaskImage: `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 25px), repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 25px)`,
    opacity: 1,
    y: '-100%',
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      y: {
        ease: 'easeIn',
        delay: 2,
        duration: 1.5,
      },
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
      delay: 1.5,
      type: 'spring',
      stiffness: 225,
      damping: 7.5,
    },
  },
};
const InitialAnimation = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1.5, delay: 2.5, ease: 'easeIn' }}
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
