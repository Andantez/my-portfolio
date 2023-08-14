import { motion } from 'framer-motion';
import { svgVariants } from '../../../../lib/framerVariants';

const SvgPath = () => {
  return (
    <svg id="svg" width="0" height="0">
      <clipPath id="clipPath2" clipPathUnits="objectBoundingBox">
        <motion.path
          variants={svgVariants}
          d="M0,0 L1,0 L1,1 L1,1 C1,0.5,1,0.5,1,0"
        />
      </clipPath>
    </svg>
  );
};

export default SvgPath;
