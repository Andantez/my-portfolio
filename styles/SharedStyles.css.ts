import { style, styleVariants } from '@vanilla-extract/css';
import {
  accentColor,
  fs300,
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
export const subHeading = style({
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

export const pageContainer = style({
  minHeight: '100%',
  paddingTop: '7.5rem',
  paddingBottom: '3rem',
  '@media': {
    'screen and (min-width: 34.375rem)': {
      paddingTop: '11rem',
    },
    'screen and (min-width: 64rem)': {
      paddingTop: '13rem',
    },
  },
});

export const checkIcon = style({
  filter: `drop-shadow(2px 4px 2px rgb(0 0 0 / 0.3));`,
  '@media': {
    'screen and (min-width: 64rem)': {
      width: '6rem',
      height: '6rem',
    },
  },
});

export const arrowIcon = style({
  '@media': {
    'screen and (min-width: 37.5rem)': {
      width: 65,
      height: 65,
    },
  },
});

export const buttonLink = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs300,
  color: textColor,
  backgroundColor: 'transparent',
  padding: '.5rem 1rem',
  borderRadius: '.25rem',
  border: `3px solid ${textColor}`,
  textDecoration: 'none',
  maxWidth: 'fit-content',
  marginLeft: '1rem',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      marginLeft: 0,
      gridColumn: '3 / span 4',
      gridRow: '3',
    },
    'screen and (min-width: 64rem)': {
      fontSize: fs400,
    },
  },
});

export const projectSubHeading = style({
  color: textColor,
  fontFamily: 'var(--ff-text)',
  fontSize: fs450,
  fontWeight: fwRegular,
  textAlign: 'center',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      maxWidth: '70vw',
    },
    'screen and (min-width: 87.5rem)': {
      maxWidth: '50vw',
      fontSize: fs500,
    },
  },
});
