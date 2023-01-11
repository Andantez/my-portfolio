import ContactForm from '../ContactForm';
import { Grid, Heading } from '../ui';

const Contact = (): JSX.Element => {
  return (
    <Grid>
      <Heading
        accentType="number"
        accentText="03."
        title="Contact"
        headingText="Get in touch"
      />
      <h3>
        Get in touch by filling the form below or just send an{' '}
        <span>email here.</span>
      </h3>
      <ContactForm />
    </Grid>
  );
};

export default Contact;
