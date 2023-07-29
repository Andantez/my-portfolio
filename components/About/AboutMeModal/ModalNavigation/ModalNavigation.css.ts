import { style, styleVariants } from '@vanilla-extract/css';
import { fs200, fwBold, textColor } from '../../../../styles/vars.css';

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
