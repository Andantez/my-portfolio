import { style, styleVariants } from '@vanilla-extract/css';
import {  fs300, fs400, fs700, modalTextColor } from '../../../styles/vars.css';

const baseStyle = style({
  textDecoration: 'none',
  color: modalTextColor,
  fontFamily: 'var(--ff-text)',
  textTransform: 'uppercase',
});

export const navLink = styleVariants({
  sm: [baseStyle, { fontSize: fs300 }],
  md: [baseStyle, { fontSize: fs400 }],
  lg: [baseStyle, { fontSize: fs700 }],
});
