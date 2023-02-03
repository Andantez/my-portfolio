import { style, styleVariants } from "@vanilla-extract/css";
import { browserDot } from "../../../../styles/vars.css";


export const baseDot = style({
  display: 'block',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      width: '8px',
      height: '8px',
    },
    'screen and (min-width: 75rem)': {
      width: '10px',
      height: '10px',
    },
  },
});

export const dotVariants = styleVariants({
  red: [
    baseDot,
    {
      vars: {
        [browserDot]: '#FF5F56',
      },
      backgroundColor: browserDot,
    },
  ],
  yellow: [
    baseDot,
    {
      vars: {
        [browserDot]: '#FFBD2E',
      },
      backgroundColor: browserDot,
    },
  ],
  green: [
    baseDot,
    {
      vars: {
        [browserDot]: '#27C93F',
      },
      backgroundColor: browserDot,
    },
  ],
});

export const dotsContainer = style({
  display: 'flex',
  gap: '.25rem'
})