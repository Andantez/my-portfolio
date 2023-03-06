import { useEffect, useState } from 'react';
import { Moon, Sun } from '../icons';
import { themeBtn } from './Theme.css';

type ThemeToggleProps = {
  type: keyof typeof themeBtn;
};
const ThemeToggle = ({ type }: ThemeToggleProps) => {
  const [activeTheme, setActiveTheme] = useState<string>(
    document.body.dataset.theme!
  );
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);
  return (
    <button
      className={themeBtn[type]}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      {activeTheme === 'light' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
