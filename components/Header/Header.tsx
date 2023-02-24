import { Logo } from '../icons';
import NavbarList from './NavbarList';
import { nav, header, menuBtn } from './Header.css';
import { merriweather } from '../../lib/fonts';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Modal from '../Modal';
import ModalContent from '../ModalContent';

const ThemeToggle = dynamic(() => import('../Theme'), { ssr: false });

const Header = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={`${merriweather.variable} ${header}`}>
      <Modal>
        <button
          type="button"
          onClick={() => setShowModal(!showModal)}
          className={menuBtn}
          aria-label="Open menu"
        >
          {/* TODO: replace with proper icon */}
          {/* <Menu /> */}
          MENU
        </button>
        {showModal && <ModalContent />}
      </Modal>

      <nav className={nav}>
        <Logo />
        <NavbarList />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
