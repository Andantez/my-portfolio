import { style } from "@vanilla-extract/css";
import { fs100, fs200, textColor } from "../../styles/vars.css";

export const footerWrapper = style({
  padding: '1rem 0'
})
export const footerSpan = style({
  fontFamily: 'var(--ff-heading)',

  color: textColor,
  fontSize: fs100,
  '@media': {
    'screen and (min-width: 64rem)': {
      fontSize: fs200,
    }
  }
})