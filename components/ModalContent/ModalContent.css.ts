import { style } from '@vanilla-extract/css';
import {
  accentColor,
  fs600,
  fs650,
  fwBold,
  gap100,
  modalBG,
  modalTextColor,
} from '../../styles/vars.css';

export const asideContainer = style({
  position: 'fixed',
  inset: '0px 0 0',
  background: modalBG,
  zIndex: 1,
  display: 'grid',
  '@media': {
    'screen and (min-width: 64rem)': {
      display: 'none',
    },
  },
});

export const navWrapper = style({
  placeSelf: 'flex-end center',
});

export const ulWrapper = style({
  display: 'flex',
  gap: gap100,
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '0 1rem',
});

export const linkItem = style({
  position: 'relative',
  fontFamily: 'var(--ff-text)',
  textDecoration: 'none',
  color: modalTextColor,
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

export const socialsWrapper = style({
  placeSelf: 'center',
});

export const themeToggleWrapper = style({
  position: 'absolute',
  zIndex: 2,
  top: '1.65rem',
  left: '1.65rem',
});

export const arrow = style({
  position: 'absolute',
  right: '-45px',
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      right: -65,
    },
  },
});
