import { style, globalStyle } from '@vanilla-extract/css';
import { fwBold, textColor, fs400 } from '../../styles/vars.css';
import { grid } from '../../lib/styles/Grid.css';

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

globalStyle(`${grid()} a[data-link="nav"]`, {
  maxWidth: 'fit-content',
  marginLeft: '1rem',
  fontWeight: fwBold,
  textDecoration: 'underline',
  textUnderlineOffset: 5,
  '@media': {
    'screen and (min-width: 37.5rem)': {
      marginLeft: 0,
      gridColumn: '3 / span 3',
      gridRow: '3',
    },
  },
});
