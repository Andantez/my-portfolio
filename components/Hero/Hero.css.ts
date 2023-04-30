import { style } from '@vanilla-extract/css';
import { textColor, fs400 } from '../../styles/vars.css';

export const heroParagraph = style({
  fontFamily: 'var(--ff-text)',
  paddingLeft: '1rem',
  color: textColor,
  '@media': {
    'screen and (min-width: 37.5rem)': {
      paddingLeft: 0,
      gridColumn: '3/ span 8',
      gridRow: '2',
    },
    'screen and (min-width: 64rem)': {
      fontSize: fs400,
    },
    'screen and (min-width: 87.5rem)': {
      gridColumn: '3/ span 6',
    },
  },
});
