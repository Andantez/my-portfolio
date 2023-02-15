import { style } from '@vanilla-extract/css';

// This is temporary.
export const notificationContainer = style({
  '@media': {
    'screen and (min-width: 37.5rem)': {
      gridColumn: '3 / span 6',
      marginLeft: 0,
      marginRight: 0,
    },
  },
});
