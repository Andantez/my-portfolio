import { Button } from '../ui';
import { notificationContainer } from './Notification.css';

const Notification = () => {
  return (
    <div className={notificationContainer}>
      <span>SVG ICON GOES HERE</span>

      <h3>
        Your message has been sent successfully<span>.</span>
      </h3>
      <p>I&apos;ll get back to you as soon as possible.</p>
      <Button type="button">Okay</Button>
    </div>
  );
};

export default Notification;
