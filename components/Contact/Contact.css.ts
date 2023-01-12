import { style } from '@vanilla-extract/css';

export const lineBreak = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      display: 'initial'
    }
  }
});
