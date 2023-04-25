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
      style={{
        clipPath: 'url(#clippath)',
      }}
    >
      <svg id="svg" width="0" height="0">
        <clipPath id="clippath" clipPathUnits="objectBoundingBox">
          <motion.path
            initial={{
              d: 'M0,0 L0,1 C0,1,0,1,1,1 L1,0',
            }}
            animate={{
              d: 'M0,0 L0,0.769 C0.125,1,0.875,1,1,0.769 L1,0',
            }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
            // d="M 0 1 Q 0.5 1.4 1 1 L 1 1 L 0 1 z"
          />
        </clipPath>
      </svg>
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
