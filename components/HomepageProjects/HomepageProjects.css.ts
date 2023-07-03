import { style } from '@vanilla-extract/css';
import { gap500 } from '../../styles/vars.css';

export const homepageProjects = style({
  height: '100%',
  display: 'grid',
  gap: gap500,
});

// TEMPORARY
export const homepageProjectsContainer = style({
  border: '1px solid #363636',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '5rem',
  backgroundColor: '#363636',
  marginTop: '5rem',
});
