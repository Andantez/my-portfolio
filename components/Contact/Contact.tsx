import ContactForm from '../ContactForm';
import { Grid, Socials } from '../ui';
import { lineBreak } from './Contact.css';
import {
  aboutSubHeading,
  accent,
  noTextDecoration,
} from '../../styles/SharedStyles.css';
import Link from 'next/link';

type ContactProps = {
  children: React.ReactNode;
};
const Contact = ({ children }: ContactProps): JSX.Element => {
  return (
    <Grid
      minHeight="100%"
      placeContent="center"
      gap="small"
      padding="smallLeftAndRight"
      // overflow="hiddenX"
      columnsMediaBreakpoint={600}
      position="relative"
    >
      {children}
      <h3 className={aboutSubHeading}>
        Get in touch by filling the form below <br className={lineBreak} />
        or just send an{' '}
        <Link
          href="mailto:kaloyanatanasov83@gmail.com"
          className={`${accent.bold} ${noTextDecoration}`}
        >
          email here.
        </Link>
      </h3>
      <ContactForm />
      <Socials variant="desktop" />
    </Grid>
  );
};

export default Contact;
