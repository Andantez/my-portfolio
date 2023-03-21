import { style } from '@vanilla-extract/css';

export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type Styling = ReturnType<typeof style>;
