import { style, styleVariants } from "@vanilla-extract/css";
import { browserDot } from "../../../../styles/vars.css";


export const baseDot = style({
  display: 'block',
  width: '5px',
  height: '5px',
  borderRadius: '50%',
})

export const dotVariants = styleVariants({
  red: [
    baseDot,
    {
      vars: {
        [browserDot]: 'red',
      },
      backgroundColor: browserDot,
    },
  ],
  yellow: [
    baseDot,
    {
      vars: {
        [browserDot]: 'yellow',
      },
      backgroundColor: browserDot,
    },
  ],
  green: [
    baseDot,
    {
      vars: {
        [browserDot]: 'green',
      },
      backgroundColor: browserDot,
    },
  ],
});

export const dotsContainer = style({
  display: 'flex',
})