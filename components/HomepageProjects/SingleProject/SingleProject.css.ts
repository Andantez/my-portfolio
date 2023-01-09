import { style, styleVariants } from '@vanilla-extract/css';

import {
  fs300,
  fs600,
  fwBold,
  fwLight,
  textColor,
  gap,
  fs700,
} from '../../../styles/vars.css';

export const projectInfo = style({
  display: 'grid',
  gap,
  padding: '0 1rem',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      textAlign: 'center',
    },
    'screen and (min-width: 64rem)': {
      textAlign: 'left',
      padding: 0,
      flex: 1,
    },
    'screen and (min-width: 87.5rem)': {
      flexBasis: '45%',
    },
  },
});
export const projectName = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs600,
  color: textColor,
  '@media': {
    'screen and (min-width: 87.5rem)': {
      fontSize: fs700,
    },
  },
});

export const projectDescription = style({
  fontFamily: 'var(--ff-text)',
  fontSize: fs300,
  fontWeight: fwLight,
  color: textColor,
});

export const projectStack = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      justifyContent: 'center',
    },
    'screen and (min-width: 64rem)': {
      justifyContent: 'flex-start',
    },
  },
});

export const projectImgWrapperBase = style({
  padding: '0 1rem',
  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    inset: '-1rem 0 1rem 0',
    zIndex: -1,
  },
  '@media': {
    'screen and (min-width: 56.25rem)': {
      padding: '0 2rem',
      '::before': {
        inset: '-2rem 0 2rem 0',
      },
    },
    'screen and (min-width: 64rem)': {
      flex: 1,
    },
    'screen and (min-width: 87.5rem)': {
      flexBasis: '55%',
    },
  },
});

export const projectImgWrapper = styleVariants({
  red: [projectImgWrapperBase, { '::before': { backgroundColor: '#FF4250' } }],
  blue: [projectImgWrapperBase, { '::before': { backgroundColor: '#6A8BC2' } }],
  darkGrey: [
    projectImgWrapperBase,
    { '::before': { backgroundColor: '#325055' } },
  ],
});
