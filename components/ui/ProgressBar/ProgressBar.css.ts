import { style, styleVariants } from '@vanilla-extract/css';
import { errorColor, fs100, fs200, textColor } from '../../../styles/vars.css';

export const progressBarContainer = style({
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',
  marginTop: '.25rem',
});

export const progressBarValueBase = style({
  fontFamily: 'var(--ff-text)',
  fontSize: fs100,
  '@media': {
    'screen and (min-width: 64rem )': {
      fontSize: fs200,
    },
  },
});

const valueBaseColour = style({
  color: textColor,
});
const valueWarningColour = style({
  color: errorColor,
});
export const progressBarValue = styleVariants({
  base: [progressBarValueBase, valueBaseColour],
  warning: [progressBarValueBase, valueWarningColour],
});

export const progressBarSvgWrapper = style({
  flex: 1,
});
