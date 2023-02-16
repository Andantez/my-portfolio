import { Button } from '../ui';
import { notificationContainer, notificationWrapper } from './Notification.css';
import { Check } from '../icons';

type NotificationProps = {
  hideNotification: () => void;
};
const Notification = ({ hideNotification }: NotificationProps): JSX.Element => {
  return (
    <div className={notificationContainer}>
      <div className={notificationWrapper}>
        <Check width="5rem" height="5rem" />
        <h3>
          Your message has been sent successfully<span>.</span>
        </h3>
        <p>I&apos;ll get back to you as soon as possible.</p>
        <Button type="button" handleClick={hideNotification}>
          Okay
        </Button>
      </div>
    </div>
  );
};

export default Notification;
