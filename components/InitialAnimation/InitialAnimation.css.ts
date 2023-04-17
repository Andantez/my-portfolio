import { style } from '@vanilla-extract/css';
import { modalBG, modalTextColor } from '../../styles/vars.css';

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
  fontSize: '13.5rem',
});
