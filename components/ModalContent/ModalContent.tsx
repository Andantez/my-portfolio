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
import { motion, Variants } from 'framer-motion';

// temporary. To be exported to other file when done.
// values not final
const modalVariants: Variants = {
  initial: {
    x: '100%',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,

      ease: 'easeOut',
      staggerChildren: 0.04,
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0.4,
      ease: [0.49, -0.07, 0.82, 0.68],
      staggerDirection: 1,
      staggerChildren: 0.04,
      when: 'afterChildren',
    },
  },
};
const itemVariant: Variants = {
  initial: {
    y: -25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'backOut',
      duration: 0.4,
    },
  },
  exit: {
    y: -25,
    opacity: 0,
    transition: {
      ease: 'backIn',
      duration: 0.4,
    },
  },
};
const ModalContent = () => {
  const router = useRouter();

  return (
    <motion.aside
      key="modal-container"
      className={asideContainer}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={modalVariants}
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
