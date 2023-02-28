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
} from './ModalContent.css';
import { motion, Variants } from 'framer-motion';

// temporary. To be exported to other file when done.
// values not final
const modalVariants: Variants = {
  initial: {
    // clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    x: '100%',
  },
  animate: {
    // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    x: 0,
    transition: {
      duration: 0.6,

      ease: 'easeOut',
      delayChildren: 0.2,
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
  exit: {
    // clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
    x: '-100%',
    transition: {
      duration: 0.6,
      ease: [0.49, -0.07, 0.82, 0.68],
      staggerDirection: -1,
      delayChildren: 0.2,
      staggerChildren: 0.2,
      when: 'afterChildren',
    },
  },
};
const itemVariant: Variants = {
  initial: {
    y: -25,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: 25,
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
      <Socials variant="mobile" />
    </motion.aside>
  );
};

export default ModalContent;
