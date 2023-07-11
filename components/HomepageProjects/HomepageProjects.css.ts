import { style } from '@vanilla-extract/css';
import { gap500 } from '../../styles/vars.css';

export const homepageProjects = style({
  height: '100%',
  display: 'grid',
  gap: gap500,
});

export const homepageProjectsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 0 25px 3px rgba(175,175,175,.5)',
  maxWidth: '1400px',
  margin: '5rem 1rem 0',
  padding: '0 1rem',
  borderRadius: '.5rem',
  '@media': {
    'screen and (min-width: 34.375rem)': {
      marginBottom: '5rem',
    },
    'screen and (min-width: 46.875rem)': {
      padding: 0,
      margin: '5rem 2.5rem 5rem',
    },
    'screen and (min-width: 87.5rem)': {
      margin: '8rem auto 5rem',
      padding: '8rem 6rem',
      gap: '10rem',
    },
  },
});
