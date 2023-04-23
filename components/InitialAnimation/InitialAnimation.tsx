import { motion } from 'framer-motion';
import {
  animationContainer,
  heading,
  singleWord,
} from './InitialAnimation.css';
import {
  textAnimation,
  initialAnimationContainer,
} from '../../lib/framerVariants';
import { WORDS } from '../../lib/constVariables';

const InitialAnimation = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={initialAnimationContainer}
      className={animationContainer}
    >
      <motion.h1 className={heading}>
        {WORDS.map((word, index) => {
          const isLastWord = index === WORDS.length - 1;
          return (
            <motion.span
              className={isLastWord ? singleWord.withAccent : singleWord.base}
              variants={textAnimation}
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
