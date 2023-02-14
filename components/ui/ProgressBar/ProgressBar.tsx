import {
  attentionColor,
  errorColor,
  successColour,
} from '../../../styles/vars.css';
import {
  progressBarContainer,
  progressBarValue,
  progressBarSvgWrapper,
} from './ProgressBar.css';
import { motion } from 'framer-motion';
import { MAX_MESSAGE_LENGTH } from '../../../lib/constVariables';
import { drawProgressBar, showValue } from '../../../lib/framerVariants';

type ProgressBarProps = {
  messageLength: number;
};

const ProgressBar = ({ messageLength }: ProgressBarProps) => {
  const pathSegment = 1 / MAX_MESSAGE_LENGTH; // one segment equal one message character

  // Pass a value of 1 to custom prop if message longer than the allowed value to avoid potential bugs.
  const animateTo =
    messageLength > MAX_MESSAGE_LENGTH ? 1 : pathSegment * messageLength;

  const charactersLeft = MAX_MESSAGE_LENGTH - messageLength;
  const valueClassName =
    messageLength >= MAX_MESSAGE_LENGTH
      ? progressBarValue.warning
      : progressBarValue.base;

  const barColour =
    messageLength >= 250 && messageLength < 300
      ? attentionColor
      : messageLength >= MAX_MESSAGE_LENGTH
      ? errorColor
      : successColour;

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
            stroke={barColour}
            custom={animateTo}
          />
        </motion.svg>
      </div>
      <motion.span
        className={valueClassName}
        initial="initial"
        animate={messageLength > 0 ? 'animate' : undefined}
        variants={showValue}
      >
        {charactersLeft}
      </motion.span>
    </div>
  );
};

export default ProgressBar;
