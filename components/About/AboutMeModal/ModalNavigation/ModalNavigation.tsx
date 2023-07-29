import { motion } from 'framer-motion';
import { navigationVariants } from '../../../../lib/framerVariants/aboutMeModalVariants';
import { ChevronRight } from '../../../icons';
import { backWrapper, backBtn } from './ModalNavigation.css';

type ModalNavigationProps = {
  onClick: () => void;
};
const ModalNavigation = ({ onClick }: ModalNavigationProps) => {
  return (
    <div className={backWrapper}>
      <motion.button
        variants={navigationVariants}
        type="button"
        className={backBtn.base}
        onClick={onClick}
      >
        <ChevronRight />
      </motion.button>
      <motion.button
        variants={navigationVariants}
        type="button"
        className={backBtn.text}
        onClick={onClick}
      >
        Back
      </motion.button>
    </div>
  );
};

export default ModalNavigation;
