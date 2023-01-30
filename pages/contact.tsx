import Contact from '../components/Contact';
import { Heading } from '../components/ui';
import { contactPageWrapper } from '../styles/SharedStyles.css';
// TODO: styling
const ContactPage = () => {
  return (
    <div className={contactPageWrapper}>
      <Contact>
        <Heading
          as="h1"
          accentType="dot"
          accentText="."
          title="Contact"
          headingText="Contact"
        />
      </Contact>
    </div>
  );
};

export default ContactPage;
