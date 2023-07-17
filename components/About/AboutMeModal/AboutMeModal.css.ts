import { style, styleVariants } from '@vanilla-extract/css';
import {
  accentColor,
  backgroundColor,
  fs200,
  fs400,
  fs450,
  fs500,
  fwBold,
  fwLight,
  gap150,
  gap200,
  textColor,
  titleTextColor,
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
  position: 'relative',
  display: 'grid',
  gap: '0.75rem',
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
});
const backBtnText = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs200,
});
export const backBtn = styleVariants({
  base: [backBtnBase],
  text: [backBtnBase, backBtnText],
});
