import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../../data';
import { Socials } from '../ui';
import {
  asideContainer,
  navWrapper,
  ulWrapper,
  linkItem,
  linkAccent,
  activeRoute,
  listItem,
  socialsWrapper,
} from './ModalContent.css';
import { motion } from 'framer-motion';
import { containerVariants, itemVariant } from '../../lib/framerVariants';

const ModalContent = () => {
  const router = useRouter();

  return (
    <motion.aside
      key="modal-container"
      className={asideContainer}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
    >
      <nav className={navWrapper}>
        <ul className={ulWrapper}>
          {navLinks.map((link, index) => {
            const { href, label } = link;
            return (
              <motion.li
                variants={itemVariant}
                key={label}
                className={`${listItem} ${
                  router.route === href ? activeRoute : undefined
                }`}
              >
                <Link href={href} className={linkItem}>
                  <span className={linkAccent}>0{index + 1}.</span> {label}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
      <motion.div className={socialsWrapper} variants={itemVariant}>
        <Socials variant="mobile" />
      </motion.div>
    </motion.aside>
  );
};

export default ModalContent;
