import { Github, Linkedin } from '../../icons';
import { socialsWrapper } from './Socials.css';
import Link from 'next/link';

type SocialsProps = {
  variant: keyof typeof socialsWrapper;
};
const Socials = ({ variant }: SocialsProps) => {
  return (
    <div className={socialsWrapper[variant]}>
      <Link href="https://github.com/Andantez" target="_blank">
        <Github />
      </Link>
      <Link
        href="https://www.linkedin.com/in/kaloyan-boyanov-atanasov/"
        target="_blank"
      >
        <Linkedin />
      </Link>
    </div>
  );
};

export default Socials;
