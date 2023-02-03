import { style } from '@vanilla-extract/css';

// TODO: change the background color based on the Theme
export const addressBar = style({
  display: 'block',
  backgroundColor: '#FFFFFF',
  width: '65%',
  height: '8px',
  borderRadius: '3px',
  margin: '0 auto',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      height: '12px',
    },
    'screen and (min-width: 75rem)': {
      height: '14px',
    },
  },
});
