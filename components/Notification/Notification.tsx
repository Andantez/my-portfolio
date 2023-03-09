import { Button } from '../ui';
import {
  notificationContainer,
  notificationWrapper,
  notificationParagraph,
  notificationHeading,
} from './Notification.css';
import { Check } from '../icons';
import { motion } from 'framer-motion';
import { container, content } from '../../lib/framerVariants';


type NotificationProps = {
  hideNotification: () => void;
};
const Notification = ({ hideNotification }: NotificationProps): JSX.Element => {
  return (
    <motion.div
      className={notificationContainer}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={container}
    >
      <motion.div className={notificationWrapper} variants={content}>
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
      </motion.div>
    </motion.div>
  );
};

export default Notification;
