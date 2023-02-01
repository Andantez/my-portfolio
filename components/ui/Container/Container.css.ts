import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  minHeight: '100%',
  paddingTop: '7.5rem',
  paddingBottom: '3rem',
  '@media': {
    'screen and (min-width: 34.375rem)': {
      paddingTop: '11rem',
    },
    'screen and (min-width: 64rem)': {
      paddingTop: '13rem',
    },
  },
});
