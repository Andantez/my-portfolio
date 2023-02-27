import { textColor } from '../../styles/vars.css';
import { motion } from 'framer-motion';
import { topAndBottomLine, middleLine } from '../../lib/framerVariants';

type MenuProps = {
  showModal: boolean;
};
const Menu = ({ showModal }: MenuProps): JSX.Element => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 100 100"
      fill="none"
      stroke={textColor}
      strokeWidth={6}
      width={50}
      height={50}
      initial="initial"
      animate={showModal ? 'animate' : 'initial'}
    >
      <motion.path
        variants={topAndBottomLine}
        d="M22.974,77l57.526,-57c8.411,-8.338 12.46,8.56 13,13.5c0.42,3.84 2.455,31.807 -13,36.5l-60.5,0"
      />
      <motion.path variants={middleLine} d="M20.181,50l59.819,0" />
      <motion.path
        variants={topAndBottomLine}
        d="M23.155,23l57.526,57c8.411,8.338 12.459,-8.56 13,-13.5c0.419,-3.84 2.454,-31.807 -13,-36.5l-60.5,-0"
      />
    </motion.svg>
  );
};

export default Menu;
