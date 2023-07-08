import { style, styleVariants } from '@vanilla-extract/css';

import {
  fs300,
  fwBold,
  fwLight,
  textColor,
  gap100,
  fs650,
  fs500,
  backgroundColorText,
} from '../../../styles/vars.css';

const base = style({
  display: 'grid',
  gap: gap100,
  padding: '0 1rem',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      textAlign: 'center',
      padding: '0 3.25rem',
    },
    'screen and (min-width: 64rem)': {
      flex: 1,
      padding: '0 0 0 4.5rem',
    },
    'screen and (min-width: 87.5rem)': {
      flexBasis: '50%',
      paddingLeft: 0,
    },
    'screen and (min-width: 90.625rem)': {
      padding: 0,
    },
  },
});

const textToLeft = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      textAlign: 'left',
    },
  },
});

const textToRight = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      order: 1,
      textAlign: 'right',
    },
  },
});
export const projectInfo = styleVariants({
  left: [base, textToLeft],
  right: [base, textToRight],
});

export const projectName = style({
  fontFamily: 'var(--ff-heading)',
  fontWeight: fwBold,
  fontSize: fs500,
  color: textColor,
  '@media': {
    'screen and (min-width: 87.5rem)': {
      fontSize: fs650,
    },
  },
});

export const projectDescription = style({
  fontFamily: 'var(--ff-text)',
  fontSize: fs300,
  fontWeight: fwLight,
  color: textColor,
  '@media': {
    'screen and (min-width: 46.875rem)': {
      background: backgroundColorText,
      padding: '1rem',
      borderRadius: '.5rem',
    },
    'screen and (min-width: 75rem)': {
      padding: '2rem',
    },
  },
});

const projectStackToRight = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      justifyContent: 'flex-end',
    },
  },
});
const projectStackToLeft = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      justifyContent: 'flex-start',
    },
  },
});
const projectStackBase = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: gap100,
  padding: 0,
  '@media': {
    'screen and (min-width: 46.875rem)': {
      justifyContent: 'center',
    },
  },
});

export const projectStack = styleVariants({
  left: [projectStackBase, projectStackToLeft],
  right: [projectStackBase, projectStackToRight],
});

export const projectImgWrapperBase = style({
  padding: '1rem',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      padding: '1.5rem',
      margin: '0 1rem',
    },
    'screen and (min-width: 46.875rem)': {
      margin: '0 3.25rem',
    },
    'screen and (min-width: 64rem)': {
      flex: 1,
      margin: '0 3.25rem 0 1rem',
    },
    'screen and (min-width: 75rem)': {
      margin: '0 3.25rem 0 0rem',
    },
    'screen and (min-width: 87.5rem)': {
      flexBasis: '50%',
      margin: 0,
      padding: '1.5rem 2.5rem',
    },
  },
});

export const projectImgWrapper = styleVariants({
  red: [projectImgWrapperBase, { backgroundColor: '#FF4250' }],
  blue: [projectImgWrapperBase, { backgroundColor: '#6A8BC2' }],
  darkGrey: [projectImgWrapperBase, { backgroundColor: '#325055' }],
});
