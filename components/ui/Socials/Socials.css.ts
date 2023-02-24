import { style, styleVariants } from '@vanilla-extract/css';
import { gap100 } from '../../../styles/vars.css';

const desktop = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 64rem)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '0.5rem',
      position: 'absolute',
      right: 0,
      height: '100%',
      marginRight: '2rem',
    },
    'screen and (min-width: 75rem)': {
      gap: gap100,
    },
    'screen and (min-width: 87.5rem)': {
      marginRight: 0,
    },
  },
});

const mobile = style({});
export const socialsWrapper = styleVariants({
  desktop: [desktop],
  mobile: [mobile],
});
