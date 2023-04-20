import { style, styleVariants } from '@vanilla-extract/css';
import { accentColor, modalBG, modalTextColor } from '../../styles/vars.css';

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
  fontSize: '3.5rem',
  whiteSpace: 'pre-wrap',
});

const wordBase = style({
  display: 'inline-block',
});

export const singleWord = styleVariants({
  base: [wordBase],
  withAccent: [wordBase, {color: accentColor}]
})