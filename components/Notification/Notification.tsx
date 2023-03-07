import { Button } from '../ui';
import {
  notificationContainer,
  notificationWrapper,
  notificationParagraph,
  notificationHeading,
} from './Notification.css';
import { Check } from '../icons';
import { motion, Variants } from 'framer-motion';

const container: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  },
};
const content: Variants = {
  initial: {
    y: -150,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 255,
      duration: 0.45,
      damping: 15,
    },
  },
  exit: {
    y: -150,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 225,
      duration: 0.45,
      damping: 15,
    },
  },
};

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
