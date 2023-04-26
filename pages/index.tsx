import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import HomepageProjects from '../components/HomepageProjects';
import InitialAnimation from '../components/InitialAnimation';
import { Grid, Heading } from '../components/ui';
import SubHeading from '../components/ui/SubHeading';
import {
  aboutDescription,
  aboutLink,
  subHeading,
} from '../styles/SharedStyles.css';
import type { FirstMount } from '../lib/types/global';

export default function Home({ isFirstMount }: FirstMount) {
  return (
    <>
      {isFirstMount && <InitialAnimation />}
      <Hero />
      <Grid
        gap="small"
        minHeight="100%"
        padding="smallLeftAndRight"
        columnsMediaBreakpoint={600}
        placeContent="center"
        overflow="hiddenX"
      >
        <Heading
          as="h2"
          accentType="number"
          accentText="01."
          headingText="Some things I've build."
          title="Projects"
        />
        <SubHeading as="h3" cssStyling={subHeading}>
          Here are some of my most recent projects that I have built!
        </SubHeading>
      </Grid>
      <HomepageProjects />
      <About>
        <SubHeading as="h3" cssStyling={subHeading}>
          My love for computers and inquisitive mind stems from a young age
        </SubHeading>
        <p className={aboutDescription}>
          I loved playing games as a child and developed interest in computers
          in general (which got me in trouble with my parents all the time) .
          Much to their annoyance my passion grew stronger and deeper. In recent
          years I had the opportunity to pursue my passion in web development.
        </p>
        <Link href="/about" className={aboutLink}>
          More About Me
        </Link>
      </About>
      <Contact>
        <Heading
          as="h2"
          accentType="number"
          accentText="03."
          title="Contact"
          headingText="Get in touch"
        />
      </Contact>
    </>
  );
}
