import { style } from '@vanilla-extract/css';

export const modalContainer = style({
  position: 'fixed',
  background: 'rgb(25, 25, 25, .5)',
  inset: 0,
  zIndex: 1,
  // backdropFilter: 'blur(5px)',
  // display: 'flex',
  // justifyContent: 'center',
});
