import { style } from '@vanilla-extract/css';
import { textColor } from '../../../styles/vars.css';

export const progressBarContainer = style({
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',
});

export const progressBarValue = style({
  fontFamily: 'var(--ff-text)',
  color: textColor,
});

export const progressBarSvgWrapper = style({
  flex: 1,
});
