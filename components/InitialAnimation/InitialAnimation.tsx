import { motion, Variants } from 'framer-motion';
import {
  animationContainer,
  heading,
  singleWord,
} from './InitialAnimation.css';

const wordVariant: Variants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const container: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const text = 'Bringing my ideas to life and growing as a developer';
const InitialAnimation = () => {
  return (
    <motion.div
      // initial={{ y: 0 }}
      // animate={{ y: '-100%' }}
      initial="initial"
      animate="animate"
      variants={container}
      transition={{ duration: 1.5, delay: 2.5, ease: 'easeIn' }}
      className={animationContainer}
    >
      <motion.h1 className={heading}>
        {text.split(' ').map((word, index, arr) => {
          const isLastWord = index === arr.length - 1
          return (
            <motion.span
              className={isLastWord ? singleWord.withAccent : singleWord.base}
              variants={wordVariant}
              key={`${word}-${index}`}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.h1>
    </motion.div>
  );
};

export default InitialAnimation;
