import { style } from '@vanilla-extract/css';
import { fs200, fs300, fwBold, textColor } from '../../../styles/vars.css';

export const btn = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  cursor: 'pointer',
  fontSize: fs200,
  color: textColor,
  backgroundColor: 'transparent',
  padding: '.5rem 1rem',
  borderRadius: '.25rem',
  marginTop: '1rem',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      width: 'fit-content',
    },
    'screen and (min-width: 75rem)': {
      fontSize: fs300,
    },
  },
});
