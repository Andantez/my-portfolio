import { style } from '@vanilla-extract/css';
import {
  accentColor,
  backgroundColor,
  fs400,
  textColor,
} from '../../../../styles/vars.css';

export const articleWrapper = style({
  position: 'relative',
  color: textColor,
  paddingLeft: '1.5rem',
  '::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: '-6px',
    width: 14,
    height: 14,
    background: backgroundColor,
    borderRadius: '50%',
    border: `2px solid ${accentColor}`,
  },
});

export const articleContentWrapper = style({
  display: 'grid',
  gap: '0.75rem',
});

export const articleHeader = style({
  fontSize: fs400,
});
