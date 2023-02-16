import { Button } from '../ui';
import { notificationContainer } from './Notification.css';
import { Check } from '../icons';

type NotificationProps = {
  hideNotification: () => void;
};
const Notification = ({ hideNotification }: NotificationProps): JSX.Element => {
  return (
    <div className={notificationContainer}>
      <Check width="7.5rem" height="7.5rem" />
      <h3>
        Your message has been sent successfully<span>.</span>
      </h3>
      <p>I&apos;ll get back to you as soon as possible.</p>
      <Button type="button" handleClick={hideNotification}>
        Okay
      </Button>
    </div>
  );
};

export default Notification;
