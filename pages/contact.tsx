import Contact from '../components/Contact';
import { Container, Heading } from '../components/ui';

const ContactPage = () => {
  return (
    <Container>
      <Contact>
        <Heading
          as="h1"
          accentType="dot"
          accentText="."
          title="Contact"
          headingText="Contact"
        />
      </Contact>
    </Container>
  );
};

export default ContactPage;
