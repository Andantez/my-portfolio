import { style } from '@vanilla-extract/css';
import { fs200, textColor } from '../../../styles/vars.css';

export const progressBarContainer = style({
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',
  marginTop: '.25rem',
});

export const progressBarValue = style({
  fontFamily: 'var(--ff-text)',
  color: textColor,
  fontSize: fs200,
});

export const progressBarSvgWrapper = style({
  flex: 1,
});
