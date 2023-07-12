import { aboutDescription, aboutLink, subHeading } from '../../styles/SharedStyles.css';
import { Grid, Heading } from '../ui';
import SubHeading from '../ui/SubHeading';
import Link from 'next/link';

const About = (): JSX.Element => {
  return (
    <Grid
      minHeight="100%"
      placeContent="center"
      gap="small"
      padding="smallLeftAndRight"
      overflow="hiddenX"
      columnsMediaBreakpoint={600}
    >
      <Heading
        as="h2"
        accentType="number"
        accentText="02."
        title="About"
        headingText="My bio."
      />
      <SubHeading as="h3" cssStyling={subHeading}>
        My love for computers and inquisitive mind stems from a young age
      </SubHeading>
      <p className={aboutDescription}>
        I loved playing games as a child and developed interest in computers in
        general (which got me in trouble with my parents all the time) . Much to
        their annoyance my passion grew stronger and deeper. In recent years I
        had the opportunity to pursue my passion in web development.
      </p>
      <Link href="/about" className={aboutLink}>
        More About Me
      </Link>
    </Grid>
  );
};

export default About;
