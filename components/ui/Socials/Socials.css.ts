import { style } from '@vanilla-extract/css';
import { gap100 } from '../../../styles/vars.css';

export const socialsWrapper = style({
  display: 'flex',
  gap: '0.5rem',
  '@media': {
    'screen and (min-width: 75rem)': {
      gap: gap100,
    },
  },
});
