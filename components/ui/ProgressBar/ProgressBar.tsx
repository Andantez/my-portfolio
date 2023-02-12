import { textColor } from '../../../styles/vars.css';
import {
  progressBarContainer,
  progressBarValue,
  progressBarSvgWrapper,
} from './ProgressBar.css';

type ProgressBarProps = {
  charactersLeft: number;
};
const ProgressBar = ({ charactersLeft }: ProgressBarProps) => {
  return (
    <div className={progressBarContainer}>
      <div className={progressBarSvgWrapper}>
        <svg
          viewBox="0 0 100 1"
          strokeWidth={1}
          width="100%"
          strokeLinecap="round"
        >
          <line x1="0" x2="100%" y1="0.5" y2="0.5" stroke={textColor} />
        </svg>
      </div>
      <span className={progressBarValue}>{charactersLeft}</span>
    </div>
  );
};

export default ProgressBar;
