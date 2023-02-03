import BrowserDots from './BrowserDots';
import AddressBar from './AddressBar';
import { browserMenuContainer } from './BrowserMenu.css';

const BrowserMenu = () => {
  return (
    <div className={browserMenuContainer}>
      <BrowserDots />
      <AddressBar />
    </div>
  );
};

export default BrowserMenu;
