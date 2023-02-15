import { style } from '@vanilla-extract/css';
import { fs100, gap150, errorColor } from '../../styles/vars.css';

export const formContainer = style({
  display: 'grid',
  gap: gap150,
  marginTop: '1rem',

  '@media': {
    'screen and (min-width: 28.125rem)': {
      marginLeft: '1rem',
      marginRight: '1rem',
    },
    'screen and (min-width: 37.5rem)': {
      gridColumn: '3 / -3',
      marginLeft: 0,
      marginRight: 0,
    },
    'screen and (min-width: 64rem)': {
      gridTemplateAreas: `
        'name email'
        'subject subject'
        'message message'
      `,
    },
    'screen and (min-width:75rem)': {
      gridColumn: '3 / span 6',
    },
  },
});

export const formError = style({
  fontFamily: 'var(--ff-text)',
  fontSize: fs100,
  color: errorColor,
});

export const wrapper = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      selectors: {
        '&:nth-child(1)': {
          gridArea: 'name',
        },
        '&:nth-child(2)': {
          gridArea: 'email',
        },
        '&:nth-child(3)': {
          gridArea: 'subject',
        },
        '&:nth-child(4)': {
          gridArea: 'message',
        },
      },
    },
  },
});
