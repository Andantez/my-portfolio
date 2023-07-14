import { style } from '@vanilla-extract/css';
import {
  backgroundColor,
  fs400,
  fs450,
  fs500,
  fwLight,
  gap150,
  gap200,
  textColor,
} from '../../../styles/vars.css';

export const modalContainer = style({
  position: 'fixed',
  background: 'rgb(25, 25, 25, .5)',
  inset: 0,
  zIndex: 1,
  overflowY: 'auto',
});

export const contentContainer = style({
  display: 'grid',
  gap: gap200,
  padding: '7rem 2rem 3rem',
  background: backgroundColor,
});

export const articlesWrapper = style({
  display: 'grid',
  gap: gap150,
  fontFamily: 'var(--ff-text)',
});

export const mainHeading = style({
  fontFamily: 'var(--ff-text)',
  fontSize: fs450,
  color: textColor,
});

export const articleHeader = style({
  fontSize: fs400,
  '@media': {
    'screen and (min-width: 75rem)': {
      fontSize: fs500,
    },
  },
});
export const skillsUL = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '.75rem',
  padding: 0,
});

export const articleWrapper = style({
  display: 'grid',
  gap: '0.75rem',
  color: textColor,
});

export const articleItem = style({
  fontWeight: fwLight,
});
