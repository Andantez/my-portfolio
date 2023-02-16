import { style } from '@vanilla-extract/css';

// This is temporary.
export const notificationContainer = style({
  display: 'grid',
  placeItems: 'center',
  padding: '3rem 2rem',
  fontFamily: 'var(--ff-text)',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      gridColumn: '3 / span 6',
      marginLeft: 0,
      marginRight: 0,
    },
  },
});
