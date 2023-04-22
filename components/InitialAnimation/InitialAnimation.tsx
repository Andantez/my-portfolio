import { motion, Variants } from 'framer-motion';
import {
  animationContainer,
  heading,
  singleWord,
} from './InitialAnimation.css';

const wordVariant: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'circOut',
    },
  },
};

const container: Variants = {
  animate: {
    y: '-100%',
    transition: {
      staggerChildren: 0.08,
      duration: 1,
      delay: 2,
      ease: [0.52, 0.25, 0.82, 0.68],
    },
  },
};
const text = 'Bringing my ideas to life and growing as a developer';
const InitialAnimation = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={container}
      className={animationContainer}
    >
      <motion.h1 className={heading}>
        {text.split(' ').map((word, index, arr) => {
          const isLastWord = index === arr.length - 1;
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
