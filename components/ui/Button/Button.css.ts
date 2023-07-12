import { style, styleVariants } from '@vanilla-extract/css';
import {
  fs200,
  fs300,
  fs400,
  fs450,
  fwBold,
  textColor,
} from '../../../styles/vars.css';

const btnBase = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  cursor: 'pointer',

  color: textColor,
  backgroundColor: 'transparent',

  '@media': {
    'screen and (min-width: 46.875rem)': {
      width: 'fit-content',
    },
    'screen and (min-width: 75rem)': {
      fontSize: fs300,
    },
  },
});

const btnWithBorder = style({
  marginTop: '1rem',
  border: `3px solid ${textColor}`,
  borderRadius: '.25rem',
  fontSize: fs200,
  padding: '.5rem 1rem',
  ':disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
    cursor: 'wait',
  },
});

const btnWIthoutBorder = style({
  position: 'relative',
  padding: 0,
  fontSize: fs400,
  marginLeft: '2rem',
  border: 'none',
  '::after': {
    content: '',
    position: 'absolute',
    height: '2px',
    width: '100%',
    background: textColor,
    left: 0,
    bottom: 0,
  },
  '@media': {
    'screen and (min-width: 37.5rem)': {
      marginLeft: 0,
      gridColumn: '4 / max-content',
    },
    'screen and (min-width: 87.5rem)': {
      fontSize: fs450,
    },
  },
});
export const btn = styleVariants({
  withBorder: [btnBase, btnWithBorder],

  withoutBorder: [btnBase, btnWIthoutBorder],
});
