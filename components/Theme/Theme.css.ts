import { style, styleVariants } from '@vanilla-extract/css';

const desktop = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 64rem)': {
      display: 'block',
    },
  },
});
const base = style({
  border: 'transparent',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: 0,
});

const mobile = style({
  position: 'fixed',
  zIndex: 2,
  top: '1rem',
  left: '1rem',
  '@media': {
    'screen and (min-width: 64rem)': {
      display: 'none',
    },
  },
});

export const themeBtn = styleVariants({
  mobile: [base, mobile],
  desktop: [base, desktop],
});
