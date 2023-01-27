import { Flex, Socials } from '../ui';
import { footerWrapper, footerSpan } from './Footer.css';
const Footer = (): JSX.Element => {
  return (
    <footer className={footerWrapper}>
      <Flex
        flexDirection="column"
        alignItems="center"
        gap="small"
        padding="smallLeftAndRight"
      >
        <Socials />
        <span className={footerSpan}>
          © 2023 Kaloyan Atanasov. All rights reserved.
        </span>
      </Flex>
    </footer>
  );
};

export default Footer;
