import { navLinks } from '../../data';
import { navList } from './Header.css';
import { NavLink } from '../ui';

const NavbarList = (): JSX.Element => {
  return (
    <ul className={navList}>
      {navLinks.map(({ label, href }) => (
        <li key={label}>
          <NavLink label={label} href={href} textSize="sm" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
