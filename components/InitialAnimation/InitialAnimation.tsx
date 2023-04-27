import { motion, useAnimate } from 'framer-motion';
import {
  animationContainer,
  heading,
  singleWord,
} from './InitialAnimation.css';
import {
  textAnimation,
  initialAnimationContainer,
  fadeOut,
} from '../../lib/framerVariants';
import { WORDS } from '../../lib/constVariables';
import { useEffect, useState } from 'react';

const InitialAnimation = () => {
  const [scope, animate] = useAnimate();
  const [animatePath, setAnimatePath] = useState(false);

  useEffect(() => {
    if (animatePath) {
      animate(
        scope.current,
        { d: 'M0,0 L0,0.667 Q0.5,1,1,0.667 L1,0' },
        { duration: 1, ease: [0.25, 1, 0.5, 1] }
      );
    }
  }, [animatePath, animate, scope]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={initialAnimationContainer}
      className={animationContainer}
    >
      <svg id="svg" width="0" height="0">
        <clipPath id="clippath" clipPathUnits="objectBoundingBox">
          <path ref={scope} d="M0,0 L0,1 Q0.5,1,1,1 L1,0" />
        </clipPath>
      </svg>
      <motion.h1
        className={heading}
        variants={fadeOut}
        onAnimationComplete={() => setAnimatePath(true)}
      >
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
