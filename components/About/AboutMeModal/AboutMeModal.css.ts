import { style } from '@vanilla-extract/css';
import {
  backgroundColor,
  fs450,
  fwLight,
  gap150,
  gap200,
  textColor,
  titleTextColor,
} from '../../../styles/vars.css';

export const modalContainer = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1,
  overflowY: 'auto',
  background: 'rgb(48, 48, 48, .8)',
  backdropFilter: 'blur(8px)',
});

export const contentContainer = style({
  position: 'relative',
  display: 'grid',
  placeContent: 'flex-start',
  gap: gap200,
  padding: '6rem 2rem 6rem',
  background: backgroundColor,
  minHeight: '100%',
  marginLeft: 'auto',
  clipPath: 'url(#clipPath2)',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      width: 'min(75vw, 38rem)',
    },
    'screen and (min-width: 64rem)': {
      padding: '2rem 2rem 6rem',
    },
  },
});

export const articlesWrapper = style({
  position: 'relative',
  display: 'grid',
  gap: gap150,
  fontFamily: 'var(--ff-text)',
  paddingBottom: '.5rem',
  '::before': {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '2px',
    height: '100%',
    background: titleTextColor,
  },
});

export const mainHeading = style({
  fontFamily: 'var(--ff-text)',
  fontSize: fs450,
  color: textColor,
});

export const skillsUL = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '.75rem',
  padding: 0,
  '@media': {
    'screen and (min-width: 34.375rem)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const articleItem = style({
  fontWeight: fwLight,
});
