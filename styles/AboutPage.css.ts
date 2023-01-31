import { style } from '@vanilla-extract/css';
import { fs300, fs400, fs500, fwLight, gap200, textColor } from './vars.css';

export const sectionContainer = style({
  display: 'grid',
  gap: gap200,
  fontFamily: 'var(--ff-text)',
  marginLeft: '1rem',
  marginTop: '2rem',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      gridColumn: '3 / -2',
      marginLeft: 0,
    },
    'screen and (min-width: 56.25rem)': {
      gridColumn: '3 / -3',
    },
    'screen and (min-width: 64rem)': {
      gridColumn: '4 / span 6',
      marginTop: '3rem',
    },
    'screen and (min-width: 75rem)': {
      gridColumn: '4 / span 6',
      marginTop: '4rem',
    },
  },
});

export const sectionHeader = style({
  fontSize: fs400,
  '@media': {
    'screen and (min-width: 75rem)': {
      fontSize: fs500,
    },
  },
});

export const sectionParagraph = style({
  fontSize: fs300,
  fontWeight: fwLight,
  '@media': {
    'screen and (min-width: 75rem)': {
      fontSize: fs400,
    },
  },
});

export const sectionWrapper = style({
  display: 'grid',
  gap: '0.75rem',
  color: textColor,
});

export const skillsUL = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '.75rem',
  padding: 0,
  '@media': {
    'screen and (min-width: 28.125rem)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    'screen and (min-width: 37.5rem)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    'screen and (min-width: 46.875rem)': {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  },
});
