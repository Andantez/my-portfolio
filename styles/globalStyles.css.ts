import { globalStyle } from '@vanilla-extract/css';
import {
  textColor,
  backgroundColor,
  accentColor,
  titleTextColor,
  placeholderTextColor,
  fwLight,
  fwRegular,
  fwBold,
  fs100,
  fs200,
  fs300,
  fs400,
  fs500,
  fs600,
  fs650,
  fs700,
  fs800,
  fs900,
  boxShadow,
  shadowColor,
  gap100,
  gap150,
  gap200,
  gap250,
  gap300,
  gap350,
  gap400,
  gap450,
  gap500,
} from './vars.css';

globalStyle(':root', {
  vars: {
    [textColor]: '#0D0D0D',
    [backgroundColor]: '#FFFFFF',
    [accentColor]: '#FF4250',
    [titleTextColor]: '#F8F8F8',
    [placeholderTextColor]: '#DBDBDB',
    [fwLight]: '300',
    [fwRegular]: '400',
    [fwBold]: '700',
    [fs100]: '0.75rem',
    [fs200]: '0.875rem',
    [fs300]: '1rem',
    [fs400]: '1.125rem',
    [fs500]: '1.5rem',
    [fs600]: '2rem',
    [fs650]: '3rem',
    [fs700]: '4rem',
    [fs800]: '8rem',
    [fs900]: '13rem',
    [gap100]: '1rem',
    [gap150]: '1.5em',
    [gap200]: '2rem',
    [gap250]: '2.5rem',
    [gap300]: '3rem',
    [gap350]: '3.5rem',
    [gap400]: '4rem',
    [gap450]: '4.5rem',
    [gap500]: '5rem',
    [boxShadow]: `0px 0.4px 0.4px hsl(${shadowColor} / 0.44),
    0px 0.8px 0.7px -0.9px hsl(${shadowColor} / 0.38),
    0px 1.7px 1.6px -1.9px hsl(${shadowColor} / 0.32),
    0px 3.9px 3.6px -2.8px hsl(${shadowColor} / 0.26),
    -0.1px 8.1px 7.5px -3.8px hsl(${shadowColor} / 0.2);`,
    [shadowColor]: '0deg 0% 63%',
  },
});

globalStyle('body[data-theme="light"]', {
  vars: {
    [textColor]: '#0D0D0D',
    [backgroundColor]: '#FFFFFF',
    [titleTextColor]: '#F8F8F8',
  },
});

globalStyle('body[data-theme="dark"]', {
  vars: {
    [textColor]: '#FFFFFF',
    [backgroundColor]: '#0D0D0D',
    [titleTextColor]: '#363636',
  },
});

globalStyle('body', {
  backgroundColor,
});
