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
  socialsWrapper,
  themeToggleWrapper,
  arrow,
} from './ModalContent.css';
import { motion } from 'framer-motion';
import { containerVariants, itemVariant } from '../../lib/framerVariants';
import ThemeToggle from '../Theme/ThemeToggle';
import { Arrow } from '../icons';

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
      <motion.div className={themeToggleWrapper} variants={itemVariant}>
        <ThemeToggle type="mobile" />
      </motion.div>
      <nav className={navWrapper}>
        <ul className={ulWrapper}>
          {navLinks.map((link, index) => {
            const { href, label } = link;
            const isSelectedRoute = router.route === href;
            return (
              <motion.li
                variants={itemVariant}
                key={label}
              >
                <Link href={href} className={linkItem}>
                  <span className={linkAccent}>0{index + 1}.</span> {label}
                  {isSelectedRoute && (
                    <motion.div
                      className={arrow}
                      layoutId="arrow"
                      transition={{
                        layout: {
                          ease: 'easeOut',
                          duration: 0.4,
                        },
                      }}
                    >
                      <Arrow />
                    </motion.div>
                  )}
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
