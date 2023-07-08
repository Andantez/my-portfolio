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
      padding: '0 0 0 3rem',
    },
    'screen and (min-width: 87.5rem)': {
      marginRight: '.75rem',
    },
  },
});

const textToRight = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      order: 1,
      textAlign: 'right',
      padding: '0 3rem 0 0',
    },
    'screen and (min-width: 87.5rem)': {
      marginLeft: '.75rem'
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
  '@media': {
    'screen and (min-width: 37.5rem)': {
      margin: '0 1rem',
    },
    'screen and (min-width: 46.875rem)': {
      margin: '0 3.25rem',
    },
    'screen and (min-width: 64rem)': {
      flex: 1,
    },
    'screen and (min-width: 87.5rem)': {
      flexBasis: '50%',
      margin: 0,
    },
  },
});

const projectImgLeft = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      margin: '0 3rem 0 0',
    },
    'screen and (min-width: 87.5rem)': {
      marginLeft: '.75rem',
    },
  },
});
const projectImgRight = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      margin: '0 0 0 3rem',
    },
    'screen and (min-width: 87.5rem)': {
      marginRight: '.75rem',
    },
  },
});
export const projectImgWrapper = styleVariants({
  left: [projectImgWrapperBase, projectImgLeft],
  right: [projectImgWrapperBase, projectImgRight],
});
