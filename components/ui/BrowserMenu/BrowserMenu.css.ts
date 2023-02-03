import { styleVariants } from '@vanilla-extract/css';
import { browserDot } from '../../../styles/vars.css';

export const dotVariants = styleVariants({
  red: {
    vars: {
      [browserDot]: 'red',
    },
    color: browserDot,
  },
  yellow: {
    vars: {
      [browserDot]: 'yellow',
    },
    color: browserDot,
  },
  green: {
    vars: {
      [browserDot]: 'green',
    },
    color: browserDot,
  },
});
