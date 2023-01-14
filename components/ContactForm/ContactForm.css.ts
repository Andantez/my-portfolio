import { style, styleVariants } from '@vanilla-extract/css';
import {
  accentColor,
  backgroundColor,
  fs100,
  fs200,
  fwBold,
  fwLight,
  gap150,
  textColor,
  titleTextColor,
} from '../../styles/vars.css';

export const formContainer = style({
  display: 'grid',
  gap: gap150,
  marginTop: '1rem',
  // gridTemplateAreas:`
  //   'name email'
  //   'subject subject'
  //   'message message'
  // `
});

export const inputWrapper = style({
  display: 'grid',
  gap: '.5rem',
});

const labelBase = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  color: textColor,
});

const labelRequired = style({
  position: 'relative',
  '::after': {
    position: 'absolute',
    content: '*',
    color: accentColor,
    fontSize: fs100,
  },
});
export const inputLabel = styleVariants({
  notRequired: [labelBase],
  required: [labelBase, labelRequired],
});

const formInputBase = style({
  border: '1px solid transparent',
  backgroundColor: titleTextColor,
  padding: '.5rem 1rem',
  fontFamily: 'var(--ff-text)',
  fontWeight: fwLight,
  borderRadius: '0.25rem',
  ':focus': {
    border: '1px solid transparent',
    outline: `2px solid ${textColor}`,
  },
});

const formInputTextArea = style({
  resize: 'vertical',
});

export const formInput = styleVariants({
  base: [formInputBase],
  textArea: [formInputBase, formInputTextArea]
})

export const formButton = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs200,
  color: backgroundColor,
  backgroundColor: textColor,
  padding: '.5rem 1rem',
  borderRadius: '.25rem',
  cursor: 'pointer',
  marginTop: '1.5rem',
});