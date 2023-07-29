import { motion } from 'framer-motion';
import { itemVariants } from '../../../../lib/framerVariants';
import {
  articleWrapper,
  articleContentWrapper,
  articleHeader,
} from './ModalItem.css';

type ModalItemProps = {
  heading: string;
  children: React.ReactNode;
};

const ModalItem = ({ heading, children }: ModalItemProps) => {
  return (
    <article className={articleWrapper}>
      <motion.div variants={itemVariants} className={articleContentWrapper}>
        <h2 className={articleHeader}>{heading}</h2>
        {children}
      </motion.div>
    </article>
  );
};

export default ModalItem;
