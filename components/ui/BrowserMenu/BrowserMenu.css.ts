import { style } from '@vanilla-extract/css';

// TODO: change the background color based on the Theme
export const browserMenuContainer = style({
  position: 'relative',
  backgroundColor: '#DFDFDF',
  padding: '.25rem 0.5rem',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      padding: '.35rem 0.5rem',
    },
    'screen and (min-width: 64rem)': {
      borderTopLeftRadius: '6px',
      borderTopRightRadius: '6px',
    },
    'screen and (min-width: 75rem)': {
      padding: '.45rem 0.65rem',
    },
  },
});
