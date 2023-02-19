import { style, styleVariants } from '@vanilla-extract/css';
import { fs200, fs300, fwBold, textColor } from '../../../styles/vars.css';

const btnBase = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  cursor: 'pointer',
  fontSize: fs200,
  color: textColor,
  backgroundColor: 'transparent',
  padding: '.5rem 1rem',
  borderRadius: '.25rem',
  border: `3px solid ${textColor}`,
  marginTop: '1rem',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      width: 'fit-content',
    },
    'screen and (min-width: 75rem)': {
      fontSize: fs300,
    },
  },
});

const btnDisabled = style({
  ':disabled': {
    cursor: 'wait',
    opacity: 0.5,
    pointerEvents: 'none',
  },
});

export const btn = styleVariants({
  base: [btnBase],
  disabled: [btnBase, btnDisabled],
});
