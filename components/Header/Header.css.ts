import { style } from '@vanilla-extract/css';
import { gap150 } from '../../styles/vars.css';

export const header = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
});
export const nav = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  maxWidth: 1400,
  margin: '0 auto',
  '@media': {
    'screen and (min-width: 64rem)': {
      gap: gap150,
    },
  },
});

export const navList = style({
  marginLeft: 'auto',
  display: 'none',
  '@media': {
    'screen and (min-width: 64rem)': {
      display: 'flex',
      gap: gap150,
    },
  },
});

export const menuBtn = style({
  backgroundColor: 'transparent',
  border: 'transparent',
  position: 'fixed',
  right: '1rem',
  top: '1rem',
  zIndex: 3,
  padding: 0,
  '@media': {
    'screen and (min-width: 64rem)': {
      display: 'none',
    },
  },
});
