import Link from 'next/link';
import { navLinks } from '../../data';
import { Socials } from '../ui';
import {
  asideContainer,
  navWrapper,
  ulWrapper,
  linkItem,
  linkAccent,
} from './ModalContent.css';

const ModalContent = () => {
  return (
    <aside className={asideContainer}>
      <nav className={navWrapper}>
        <ul className={ulWrapper}>
          {navLinks.map((link, index) => {
            const { href, label } = link;
            return (
              <li key={label}>
                <Link href={href} className={linkItem}>
                  <span className={linkAccent}>0{index + 1}.</span> {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Socials variant="mobile" />
    </aside>
  );
};

export default ModalContent;
