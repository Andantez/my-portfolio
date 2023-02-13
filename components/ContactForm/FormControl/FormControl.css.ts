import { style, styleVariants } from '@vanilla-extract/css';
import {
  accentColor,
  errorColor,
  fs100,
  fs400,
  fwBold,
  fwLight,
  textColor,
  titleTextColor,
  placeholderTextColor,
} from '../../../styles/vars.css';

const labelBase = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  color: textColor,
  '@media': {
    'screen and (min-width: 75rem)': {
      fontSize: fs400,
    },
  },
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
  color: textColor,
  padding: '.5rem 1rem',
  fontFamily: 'var(--ff-text)',
  fontWeight: fwLight,
  borderRadius: '0.25rem',
  caretColor: textColor,
  ':focus': {
    outline: `1px solid ${textColor}`,
  },
  '::-webkit-resizer': {
    backgroundColor: titleTextColor,
    border: '8px solid',
    borderColor: `transparent ${placeholderTextColor} ${placeholderTextColor} transparent`,
  },
});

const formInputTextArea = style({
  resize: 'vertical',
});
const inputError = style({
  border: `1px solid ${errorColor}`,
  ':focus': {
    outline: 0,
  },
});
export const formInput = styleVariants({
  base: [formInputBase],
  textArea: [formInputBase, formInputTextArea],
  textAreaError: [formInputBase, formInputTextArea, inputError],
  inputError: [formInputBase, inputError],
});

export const scrollbar = style({
  '::-webkit-scrollbar': {
    width: '.75rem',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: titleTextColor,
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: placeholderTextColor,
    borderRadius: '.75rem',
  },
});
