import { textColor } from '../../../styles/vars.css';
import {
  progressBarContainer,
  progressBarValue,
  progressBarSvgWrapper,
} from './ProgressBar.css';
import { motion } from 'framer-motion';
import { MAX_MESSAGE_LENGTH } from '../../../lib/constVariables';
import { drawProgressBar } from '../../../lib/framerVariants';

type ProgressBarProps = {
  messageLength: number;
};

const ProgressBar = ({ messageLength }: ProgressBarProps) => {
  const pathSegment = 1 / MAX_MESSAGE_LENGTH; // one segment equal one message character

  // Pass a value of 1 to custom prop if message longer than the allowed value to avoid potential bugs.
  const animateTo =
    messageLength > MAX_MESSAGE_LENGTH ? 1 : pathSegment * messageLength;

  return (
    <div className={progressBarContainer}>
      <div className={progressBarSvgWrapper}>
        <motion.svg
          viewBox="0 0 100 1"
          strokeWidth={1}
          width="100%"
          strokeLinecap={messageLength > 0 ? 'round' : 'butt'}
        >
          <motion.line
            initial="initial"
            animate="animate"
            variants={drawProgressBar}
            x1="0.5"
            x2="100%"
            y1="0.5"
            y2="0.5"
            stroke={textColor}
            custom={animateTo}
          />
        </motion.svg>
      </div>
      <span className={progressBarValue}>{messageLength}</span>
    </div>
  );
};

export default ProgressBar;
