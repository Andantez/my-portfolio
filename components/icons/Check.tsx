import { motion, SVGMotionProps } from 'framer-motion';
import { checkIcon } from '../../styles/SharedStyles.css';
import { drawIcon } from '../../lib/framerVariants';

const Check = ({
  width,
  height,
  ...rest
}: SVGMotionProps<SVGSVGElement>): JSX.Element => {
  return (
    <motion.svg
      className={checkIcon}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="#A1CC4D"
      strokeLinecap="round"
      width={width}
      height={height}
      {...rest}
    >
      <motion.path
        variants={drawIcon}
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </motion.svg>
  );
};

export default Check;
