import Link from 'next/link';
import { Email, Github, Linkedin } from '../../../icons';
import { socialsFooter, socialLink } from './ModalFooter.css';

const ModalFooter = () => {
  return (
    <footer className={socialsFooter}>
      <Link href="mailto:kaloyanatanasov83@gmail.com" className={socialLink}>
        <Email />
      </Link>
      <Link
        href="https://github.com/Andantez"
        target="_blank"
        className={socialLink}
      >
        <Github screenType="mobile" width={25} height={25} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/kaloyan-boyanov-atanasov/"
        target="_blank"
        className={socialLink}
      >
        <Linkedin screenType="mobile" width={25} height={25} />
      </Link>
    </footer>
  );
};

export default ModalFooter;
