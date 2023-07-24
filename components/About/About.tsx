import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import useDisableScroll from '../../lib/hooks/useDisableScroll';
import { aboutDescription, subHeading } from '../../styles/SharedStyles.css';
import { Button, Grid, Heading } from '../ui';
import SubHeading from '../ui/SubHeading';
import AboutMeModal from './AboutMeModal';

const About = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useDisableScroll(isModalOpen);
  
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <AboutMeModal handleClick={handleClick} isOpen={isModalOpen} />
        )}
      </AnimatePresence>
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
          I loved playing games as a child and developed interest in computers
          in general (which got me in trouble with my parents all the time) .
          Much to their annoyance my passion grew stronger and deeper. In recent
          years I had the opportunity to pursue my passion in web development.
        </p>
        <Button variant="withoutBorder" handleClick={handleClick}>
          More About Me
        </Button>
      </Grid>
    </>
  );
};

export default About;
