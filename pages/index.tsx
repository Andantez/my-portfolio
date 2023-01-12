import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import HomepageProjects from '../components/HomepageProjects';
import { Grid, Heading } from '../components/ui';
import {
  aboutDescription,
  aboutLink,
  aboutSubHeading,
} from '../styles/SharedStyles.css';
export default function Home() {
  return (
    <>
      <Hero />
      <Grid
        gap="small"
        height="100%"
        padding="smallLeftAndRight"
        columnsMediaBreakpoint={600}
        placeContent="center"
        overflow="hiddenX"
      >
        <Heading
          as='h2'
          accentType="number"
          accentText="01."
          headingText="Some things I've build."
          title="Projects"
        />
        {/* TODO add paragraph here  */}
      </Grid>
      <HomepageProjects />
      <About>
        <h3 className={aboutSubHeading}>
          My love for computers and inquisitive mind stems from a young age
        </h3>
        <p className={aboutDescription}>
          I loved playing games as a child and developed interest in computers
          in general (which got me in trouble with my parents all the time) .
          Much to their annoyance my passion grew stronger and deeper. In recent
          years I had the opportunity to pursue my passion in web development.
        </p>
        <Link href="/" className={aboutLink}>
          More About Me
        </Link>
      </About>
      <Contact />
    </>
  );
}
