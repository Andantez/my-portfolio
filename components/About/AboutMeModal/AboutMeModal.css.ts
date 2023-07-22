import { style, styleVariants } from '@vanilla-extract/css';
import {
  accentColor,
  backgroundColor,
  fs200,
  fs400,
  fs450,
  fwBold,
  fwLight,
  gap150,
  gap200,
  modalBG,
  modalTextColor,
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

export const articleHeader = style({
  fontSize: fs400,
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

export const articleWrapper = style({
  position: 'relative',
  color: textColor,
  paddingLeft: '1.5rem',
  '::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: '-6px',
    width: 14,
    height: 14,
    background: backgroundColor,
    borderRadius: '50%',
    border: `2px solid ${accentColor}`,
  },
});
export const articleContentWrapper = style({
  display: 'grid',
  gap: '0.75rem',
});

export const articleItem = style({
  fontWeight: fwLight,
});

export const backWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid #eaeaea`,
  paddingBottom: '.75rem',
});

const backBtnBase = style({
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
});
const backBtnText = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs200,
  color: textColor,
});
export const backBtn = styleVariants({
  base: [backBtnBase],
  text: [backBtnBase, backBtnText],
});

export const socialsFooter = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  gap: gap150,
  fontFamily: 'var(--ff-text)',
  background: modalBG,
});

export const socialLink = style({
  textDecoration: 'none',
  color: modalTextColor,
});
