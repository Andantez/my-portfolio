import { style, styleVariants } from '@vanilla-extract/css';

import {
  fs300,
  fs600,
  fwBold,
  fwLight,
  textColor,
  fs700,
  gap100,
  gap150,
} from '../../../styles/vars.css';

export const projectInfo = style({
  display: 'grid',
  gap: gap100,
  padding: '0 1rem',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      textAlign: 'center',
      padding: '0 3.25rem',
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
  gap: gap150,
  padding: 0,
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
  padding: '0 2rem',
  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    inset: '-1rem 1rem 1rem',
    zIndex: -1,
  },
  '@media': {
    'screen and (min-width: 28.125rem)': {
      padding: '0 2.25rem',
      '::before': {
        inset: '-1.25rem 1rem 1.25rem',
      },
    },
    'screen and (min-width: 37.5rem)': {
      padding: '0 2.5rem',
      '::before': {
        inset: '-1.5rem 1rem 1.5rem',
      },
    },
    'screen and (min-width: 46.875rem)': {
      padding: '0 5rem',
      '::before': {
        inset: '-1.75rem 3.25rem 1.75rem',
      },
    },
    'screen and (min-width: 64rem)': {
      flex: 1,
      padding: '0 2rem',
      '::before': {
        inset: '-2rem 0 2rem',
      },
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
