import { style } from '@vanilla-extract/css';
import {
  accentColor,
  backgroundColor,
  fs600,
  fwBold,
  textColor,
} from '../../styles/vars.css';

export const asideContainer = style({
  position: 'fixed',
  inset: '75px 0 0',
  background: backgroundColor,
});

export const navWrapper = style({
  height: '100%',
});

export const ulWrapper = style({
  display: 'flex',
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
});

export const linkAccent = style({
  color: accentColor,
});
