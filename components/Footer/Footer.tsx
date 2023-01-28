import { footerWrapper, footerSpan } from './Footer.css';
const Footer = (): JSX.Element => {
  return (
    <footer className={footerWrapper}>
      <span className={footerSpan}>
        © 2023 Kaloyan Atanasov. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
