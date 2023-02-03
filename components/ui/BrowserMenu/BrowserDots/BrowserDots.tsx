import { dotVariants, dotsContainer } from "./Menu.css";

const BrowserDots = () => {
  return (
    <div className={dotsContainer}>
      <span className={dotVariants.red}></span>
      <span className={dotVariants.yellow}></span>
      <span className={dotVariants.green}></span>
    </div>
  );
};

export default BrowserDots;
