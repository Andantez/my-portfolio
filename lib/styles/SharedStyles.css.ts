import { style } from '@vanilla-extract/css';

import {
  accentColor,
  fs800,
  fs900,
  titleTextColor,
  fwBold,
  textColor,
  fs650,
  fs600,
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

export const section = style({
  position: 'relative',
  fontFamily: 'var(--ff-heading)',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      paddingLeft: 0,
      gridColumn: '2/ -1',
    },
  },
});
