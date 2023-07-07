import { style, styleVariants } from '@vanilla-extract/css';
import {
  fs300,
  fwBold,
  textColor,
  fs200,
  gap150,
} from '../../../styles/vars.css';

const projectLinksBase = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: gap150,
  marginTop: '1.5rem',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      flexWrap: 'nowrap',
    },
    'screen and (min-width: 46.875rem)': {
      margin: '1.5rem 8rem 0',
    },
    'screen and (min-width: 64rem)': {
      margin: '0',
      justifyContent: 'flex-start',
    },
    'screen and (min-width: 87.5rem)': {
      marginTop: '1rem',
    },
  },
});
const projectLinksLeft = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      justifyContent: 'flex-start',
    },
  },
});
const projectLinksRight = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      justifyContent: 'flex-end',
    },
  },
});
export const projectLinksWrapper = styleVariants({
  left: [projectLinksBase, projectLinksLeft],
  right: [projectLinksBase, projectLinksRight],
});

export const projectLink = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs200,
  color: textColor,
  backgroundColor: 'transparent',
  textDecoration: 'none',
  padding: '.5rem 1rem',
  borderRadius: '.25rem',
  border: `1px solid ${textColor}`,
  textAlign: 'center',
  width: '100%',
  '@media': {
    'screen and (min-width: 64rem)': {
      width: 'auto',
    },
    'screen and (min-width: 87.5rem)': {
      width: 'auto',
      fontSize: fs300,
    },
  },
});
