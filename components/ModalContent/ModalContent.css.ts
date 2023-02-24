import { style } from '@vanilla-extract/css';
import {
  accentColor,
  backgroundColor,
  fs600,
  fs650,
  fwBold,
  textColor,
} from '../../styles/vars.css';

export const asideContainer = style({
  position: 'fixed',
  inset: '0px 0 0',
  background: backgroundColor,
  zIndex: 1,
  display: 'grid',
  '@media': {
    'screen and (min-width: 64rem)': {
      display: 'none',
    },
  },
});

export const navWrapper = style({
  placeSelf: 'flex-end flex-start',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      placeSelf: 'flex-end center',
    },
  },
});

export const ulWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '0 1rem',
});

export const linkItem = style({
  fontFamily: 'var(--ff-text)',
  textDecoration: 'none',
  color: textColor,
  fontSize: fs600,
  fontWeight: fwBold,
  '@media': {
    'screen and (min-width: 37.5rem)': {
      fontSize: fs650,
    },
  },
});

export const linkAccent = style({
  color: accentColor,
});
