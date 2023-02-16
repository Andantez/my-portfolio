import { style } from '@vanilla-extract/css';
import { backgroundColor, textColor } from '../../styles/vars.css';

// This is temporary.
export const notificationContainer = style({
  position: 'fixed',
  inset: 0,
  display: 'grid',
  placeContent: 'center',
  textAlign: 'center',
  border: '2px solid black',
  fontFamily: 'var(--ff-text)',
  backdropFilter: 'blur(7px)',
  background: 'rgb(235, 235, 235, 0.8)',
  zIndex: 1,
  color: textColor,
});

export const notificationWrapper = style({
  background: backgroundColor,
  margin: '0 1rem',
  padding: '2rem',
});
