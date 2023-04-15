import { motion } from 'framer-motion';
import { animationContainer } from './InitialAnimation.css';

const InitialAnimation = () => {
  return (
    <motion.div
      initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      animate={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
      transition={{ duration: 1.6 }}
      className={animationContainer}
    />
  );
};

export default InitialAnimation;
