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

const ModalContent = () => {
  const router = useRouter();

  return (
    <aside className={asideContainer}>
      <nav className={navWrapper}>
        <ul className={ulWrapper}>
          {navLinks.map((link, index) => {
            const { href, label } = link;
            return (
              <li
                key={label}
                className={`${listItem} ${
                  router.route === href ? activeRoute : undefined
                }`}
              >
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
