import { Button } from '../ui';
import {
  notificationContainer,
  notificationWrapper,
  notificationParagraph,
  notificationHeading,
} from './Notification.css';
import { Check } from '../icons';

type NotificationProps = {
  hideNotification: () => void;
};
const Notification = ({ hideNotification }: NotificationProps): JSX.Element => {
  return (
    <div className={notificationContainer}>
      <div className={notificationWrapper}>
        <Check width="4rem" height="4rem" />
        <h3 className={notificationHeading}>
          Your message has been sent successfully.
        </h3>
        <p className={notificationParagraph}>
          I&apos;ll get back to you as soon as possible.
        </p>
        <Button type="button" handleClick={hideNotification}>
          Okay
        </Button>
      </div>
    </div>
  );
};

export default Notification;
