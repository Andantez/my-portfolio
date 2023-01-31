import { style } from "@vanilla-extract/css";
import { fs300, fs400, fwLight, gap200} from "./vars.css";

export const sectionContainer = style({
  display: 'grid',
  gap: gap200,
  fontFamily: 'var(--ff-text)',
  marginLeft: '1rem',
  marginTop: '2rem',
})

export const sectionHeader = style({
  fontSize: fs400
})


export const sectionParagraph = style({
  fontSize: fs300,
  fontWeight: fwLight
})

export const sectionWrapper = style({
  display: 'grid',
  gap: '0.5rem',
})