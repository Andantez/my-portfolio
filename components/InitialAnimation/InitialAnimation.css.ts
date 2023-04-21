import { style, styleVariants } from '@vanilla-extract/css';
import {
  accentColor,
  fs650,
  fs700,
  modalBG,
  modalTextColor,
} from '../../styles/vars.css';

export const animationContainer = style({
  position: 'fixed',
  inset: 0,
  background: modalBG,
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const heading = style({
  color: modalTextColor,
  fontFamily: 'var(--ff-heading)',
  fontSize: fs650,
  whiteSpace: 'pre-wrap',
  margin: '0 1rem',
  '@media': {
    'screen and (min-width: 50rem)': {
      textAlign: 'center',
    },
    'screen and (min-width: 64rem)': {
      fontSize: fs700,
      margin: 0,
      maxWidth: 1200,
    },
  },
});

const wordBase = style({
  display: 'inline-block',
});

export const singleWord = styleVariants({
  base: [wordBase],
  withAccent: [wordBase, { color: accentColor }],
});
