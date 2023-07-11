import { style, styleVariants } from '@vanilla-extract/css';

import {
  accentColor,
  fs800,
  fs900,
  titleTextColor,
  fwBold,
  textColor,
  fs650,
  fs600,
  gap100,
  gap200,
  gap150,
} from '../../styles/vars.css';

export const accent = style({
  color: accentColor,
});

export const pageTitle = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 34.375rem)': {
      display: 'block',
      position: 'absolute',
      top: '-4.5rem',
      left: 0,
      zIndex: -1,
      fontSize: fs800,
      lineHeight: 0.875,
      fontWeight: fwBold,
      color: titleTextColor,
    },
    'screen and (min-width: 37.5rem)': {
      left: '-2rem',
    },
    'screen and (min-width: 64rem)': {
      fontSize: fs900,
      top: '-7.5rem',
      left: '-3rem',
    },
    'screen and (min-width: 87.5rem)': {
      // fontSize: 325,
      // top: '-13.3rem',
      left: '-4rem',
    },
  },
});

export const header = style({
  color: textColor,
  fontSize: fs600,
  '@media': {
    'screen and (min-width: 64rem)': {
      fontSize: fs650,
    },
    'screen and (min-width: 87.5rem)': {
      fontSize: fs650,
    },
  },
});

export const withBefore = style({
  position: 'relative',
  textAlign: 'center',
  color: textColor,
  '@media': {
    'screen and (min-width: 34.375rem)': {
      '::before': {
        content: 'Projects',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: -1,
        fontSize: fs800,
        lineHeight: 0.875,
        fontWeight: fwBold,
        color: titleTextColor,
      },
    },
    'screen and (min-width: 64rem)': {
      fontSize: fs650,
      '::before': {
        fontSize: fs900,
      },
    },
    'screen and (min-width: 87.5rem)': {
      fontSize: fs650,
    },
  },
});

export const baseSection = style({
  position: 'relative',
  fontFamily: 'var(--ff-heading)',
});

export const initial = style({
  '@media': {
    'screen and (min-width: 37.5rem)': {
      paddingLeft: 0,
      gridColumn: '2/ -1',
    },
  },
});

export const center = style({
  display: 'flex',
  flexDirection: 'column',
  gap: gap100,
  padding: '0 1rem',
  '@media': {
    'screen and (min-width: 34.375rem)': {
      gap: gap150,
      marginTop: '5rem',
    },
    'screen and (min-width: 64rem)': {
      gap: gap200,
    },
  },
});

export const section = styleVariants({
  initial: [baseSection, initial],
  center: [baseSection, center],
});
