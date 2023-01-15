import { style, styleVariants } from '@vanilla-extract/css';
import {
  accentColor,
  fs400,
  fs450,
  fs500,
  fs600,
  fwBold,
  fwLight,
  fwRegular,
  textColor,
} from './vars.css';

// TODO: rename the variables.
export const aboutSubHeading = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwRegular,
  fontSize: fs450,
  marginLeft: ' 1rem',
  color: textColor,
  '@media': {
    'screen and (min-width: 37.5rem)': {
      gridColumn: '3 / -1',
      marginLeft: 0,
    },
    'screen and (min-width: 46.875rem)': {
      gridColumn: '3 / -2',
    },
    'screen and (min-width: 64rem)': {
      fontSize: fs500,
      marginTop: '1rem',
    },
    'screen and (min-width: 75rem)': {
      gridColumn: '3 / span 10',
    },
    'screen and (min-width: 87.5rem)': {
      gridColumn: '3 / span 10',
      fontSize: fs600,
    },
  },
});
export const aboutDescription = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwLight,
  color: textColor,
  marginLeft: '2rem',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      marginLeft: 0,
      gridColumn: '4 / -1',
    },
    'screen and (min-width: 46.875rem)': {
      gridColumn: '4 / -2',
    },
    'screen and (min-width: 87.5rem)': {
      gridColumn: '4 / span 8',
      fontSize: fs400,
      marginTop: '1rem',
    },
  },
});

export const aboutLink = style({
  fontFamily: 'var(--ff-text)',
  fontSize: fs400,
  fontWeight: fwBold,
  color: textColor,
  marginLeft: '2rem',
  textUnderlineOffset: 5,
  '@media': {
    'screen and (min-width: 37.5rem)': {
      marginLeft: 0,
      gridColumn: '4 / max-content',
    },
    'screen and (min-width: 87.5rem)': {
      fontSize: fs450,
    },
  },
});

const baseAccent = style({
  color: accentColor,
});

export const accent = styleVariants({
  base: [baseAccent],
  bold: [baseAccent, { fontWeight: fwBold }],
});

export const noTextDecoration = style({
  textDecoration: 'none',
});
