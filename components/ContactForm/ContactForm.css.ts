import { style, styleVariants } from '@vanilla-extract/css';
import {
  accentColor,
  backgroundColor,
  fs100,
  fs200,
  fs300,
  fs400,
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

  '@media': {
    'screen and (min-width: 28.125rem)': {
      marginLeft: '1rem',
      marginRight: '1rem',
    },
    'screen and (min-width: 37.5rem)': {
      gridColumn: '3 / -3',
      marginLeft: 0,
      marginRight: 0,
    },
    'screen and (min-width: 64rem)': {
      gridTemplateAreas: `
        'name email'
        'subject subject'
        'message message'
      `,
    },
    'screen and (min-width:75rem)': {
      gridColumn: '3 / span 6',
    },
  },
});

export const inputWrapper = style({
  display: 'grid',
  gap: '.5rem',
});

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
});

const formInputTextArea = style({
  resize: 'vertical',
});
const inputError = style({
  border: '1px solid #D90404',
  ':focus': {
    outline: 0,
  },
});
export const formInput = styleVariants({
  base: [formInputBase],
  textArea: [formInputBase, formInputTextArea],
  inputError: [formInputBase, inputError]
});

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
  '@media': {
    'screen and (min-width: 46.875rem)': {
      placeSelf: 'flex-start',
    },
    'screen and (min-width: 75rem)': {
      fontSize: fs300,
    },
  },
});


export const formError = style({
  fontFamily: 'var(--ff-text)',
  fontSize: fs100,
  color: '#D90404',
  // minHeight: '18px'
})

export const wrapper = style({
  '@media': {
    'screen and (min-width: 64rem)': {
      selectors: {
        '&:nth-child(1)': {
          gridArea: 'name',
        },
        '&:nth-child(2)': {
          gridArea: 'email',
        },
        '&:nth-child(3)': {
          gridArea: 'subject',
        },
        '&:nth-child(4)': {
          gridArea: 'message',
        },
      },
    },
  },
});