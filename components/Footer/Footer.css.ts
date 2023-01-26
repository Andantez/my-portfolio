import { style } from "@vanilla-extract/css";
import { textColor } from "../../styles/vars.css";

export const footerWrapper = style({
  padding: '1rem 0'
})
export const footerSpan = style({
  fontFamily: 'var(--ff-heading)',
  color: textColor
})