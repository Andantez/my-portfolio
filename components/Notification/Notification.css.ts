import { style } from '@vanilla-extract/css';
import {
  boxShadow,
  fs450,
  fwLight,
  gap100,
  notificationBG,
  textColor,
  titleTextColor,
} from '../../styles/vars.css';

export const notificationContainer = style({
  position: 'fixed',
  inset: 0,
  display: 'grid',
  placeContent: 'center',
  textAlign: 'center',
  fontFamily: 'var(--ff-text)',
  backdropFilter: 'blur(7px)',
  background: 'rgb(48, 48, 48, .8)',
  zIndex: 1,
  color: textColor,
});

export const notificationWrapper = style({
  display: 'grid',
  placeItems: 'center',
  gap: gap100,
  background: notificationBG,
  margin: '0 1rem',
  padding: '2.5rem 1rem',
  borderRadius: '0.5rem',
  boxShadow,
  border: `1px solid ${titleTextColor}`,
  '@media': {
    'screen and (min-width: 28.125rem)': {
      padding: '2.5rem 3rem',
    },
    'screen and (min-width: 34.5rem)': {
      margin: 0,
    },
    'screen and (min-width: 75rem)': {
      padding: '3rem 5rem',
    },
  },
});

export const notificationHeading = style({
  fontSize: fs450,
});
export const notificationParagraph = style({
  fontWeight: fwLight,
});
