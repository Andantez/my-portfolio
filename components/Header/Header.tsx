import { Logo } from '../icons';
import NavbarList from './NavbarList';
import { nav, header } from './Header.css';
import { merriweather } from '../../lib/fonts';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Modal from '../Modal';

const ThemeToggle = dynamic(() => import('../Theme'), { ssr: false });

// const modalRoot = document.querySelector('#__next') as HTMLElement;
const Header = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={`${merriweather.variable} ${header}`}>
      {showModal && (
        <Modal>
          <h1>MODAL GOES HERE</h1>
        </Modal>
      )}
      <nav className={nav}>
        <Logo />
        <NavbarList setShowModal={setShowModal} showModal={showModal} />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
