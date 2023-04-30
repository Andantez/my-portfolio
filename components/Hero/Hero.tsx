import { Grid } from '../ui';
import { heroParagraph } from './Hero.css';
import {
  pageTitle,
  accent,
  header,
  section,
} from '../../lib/styles/SharedStyles.css';
import { buttonLink } from '../../styles/SharedStyles.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <Grid
      gap="small"
      minHeight="100%"
      padding="smallLeftAndRight"
      columnsMediaBreakpoint={600}
      placeContent="center"
    >
      <section className={section}>
        <h1 className={header}>
          I&apos;m <span className={accent}>Kaloyan</span>, Front-End developer
        </h1>
        <div className={pageTitle}>Hello</div>
      </section>
      <p className={heroParagraph}>
        Coder, Conceptual thinker with passion for UI effects and animations who
        loves to build creative things
      </p>
      <Link href={'/projects'} className={buttonLink}>
        View Projects
      </Link>
    </Grid>
  );
};

export default Hero;
