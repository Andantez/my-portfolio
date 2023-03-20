import { Logo, Menu } from '../icons';
import NavbarList from './NavbarList';
import { nav, header, menuBtn } from './Header.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Modal from '../Modal';
import ModalContent from '../ModalContent';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

const ThemeToggle = dynamic(() => import('../Theme'), { ssr: false });

const Header = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = () => {
      setShowModal(false);
    };
    router.events.on('routeChangeComplete', handleRouterChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
    };
  }, [router.events]);

  return (
    <header className={header}>
      <Modal>
        <AnimatePresence>
          <button
            key="menu-btn"
            type="button"
            onClick={() => setShowModal(!showModal)}
            className={menuBtn}
            aria-label="Open menu"
          >
            <Menu showModal={showModal} />
          </button>
          {showModal && <ModalContent />}
        </AnimatePresence>
      </Modal>

      <nav className={nav}>
        <Logo />
        <NavbarList />
        <ThemeToggle type="desktop" />
      </nav>
    </header>
  );
};

export default Header;
