import { style } from '@vanilla-extract/css';
import { gap150, modalBG, modalTextColor } from '../../../../styles/vars.css';

export const socialsFooter = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  gap: gap150,
  fontFamily: 'var(--ff-text)',
  background: modalBG,
});

export const socialLink = style({
  textDecoration: 'none',
  color: modalTextColor,
});
