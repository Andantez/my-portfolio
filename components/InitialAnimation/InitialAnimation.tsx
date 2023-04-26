import { motion } from 'framer-motion';
import {
  animationContainer,
  heading,
  singleWord,
} from './InitialAnimation.css';
import {
  textAnimation,
  initialAnimationContainer,
  svgPath,
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
            initial="initial"
            animate="animate"
            variants={svgPath}
            d="M0,0 L0,1 Q0.5,1,1,1 L1,0"
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
