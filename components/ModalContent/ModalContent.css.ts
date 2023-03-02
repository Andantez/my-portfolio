import { style } from '@vanilla-extract/css';
import {
  accentColor,
  backgroundColor,
  fs450,
  fs600,
  fs650,
  fwBold,
  gap100,
  textColor,
} from '../../styles/vars.css';

export const asideContainer = style({
  position: 'fixed',
  inset: '0px 0 0',
  background: 'lightgrey',
  // background: backgroundColor,
  zIndex: 1,
  display: 'grid',
  '@media': {
    'screen and (min-width: 64rem)': {
      display: 'none',
    },
  },
});

export const navWrapper = style({
  placeSelf: 'flex-end center',
});

export const ulWrapper = style({
  display: 'flex',
  gap: gap100,
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '0 1rem',
});

export const linkItem = style({
  fontFamily: 'var(--ff-text)',
  textDecoration: 'none',
  color: textColor,
  fontSize: fs600,
  fontWeight: fwBold,
  '@media': {
    'screen and (min-width: 37.5rem)': {
      fontSize: fs650,
    },
  },
});

export const linkAccent = style({
  color: accentColor,
  fontSize: fs450,
});

export const listItem = style({
  position: 'relative',
});
export const activeRoute = style({
  // '::before': {
  //   content: '',
  //   position: 'absolute',
  //   height: '100%',
  //   backgroundColor,
  //   zIndex: -1,
  //   left: '-1.5rem',
  //   right: '-1.5rem',
  //   borderRadius: '-5rem',
  // },
  // '::after': {
  //   content: '',
  //   position: 'absolute',
  //   height: '.25rem',
  //   width: '100vw',
  //   display: 'block',
  //   backgroundColor: textColor,
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   zIndex: -2,
  // },
});

export const socialsWrapper = style({
  placeSelf: 'center',
});

export const themeToggleWrapper = style({
  position: 'absolute',
  zIndex: 2,
  top: '1.5rem',
  left: '1.5rem',
});
