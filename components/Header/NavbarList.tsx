import { navLinks } from '../../data';
import { navList, navItem, menuBtn } from './Header.css';
import { Menu } from '../icons';
import { NavLink } from '../ui';

type NavbarListProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};
const NavbarList = ({
  showModal,
  setShowModal,
}: NavbarListProps): JSX.Element => {
  return (
    <ul className={navList}>
      {navLinks.map(({ label, href }) => (
        <li key={label} className={navItem}>
          <NavLink label={label} href={href} textSize="sm" />
        </li>
      ))}
      <li className={navItem}>
        <button
          type="button"
          className={menuBtn}
          onClick={() => setShowModal(!showModal)}
        >
          <Menu />
        </button>
      </li>
    </ul>
  );
};

export default NavbarList;
