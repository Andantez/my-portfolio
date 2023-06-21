import { projects } from '../data';
import SingleProject from '../components/HomepageProjects/SingleProject';
import { Grid, Heading } from '../components/ui';
import meowPortal from '../public/meowPortal.png';
import adrastos from '../public/adrastos.png';
import tintsAndShades from '../public/tintsAndShades.png';
import { subHeading } from '../styles/SharedStyles.css';
import SubHeading from '../components/ui/SubHeading';

// Not final.
const Projects = () => {
  const [firstProject, secondProject, thirdProject] = projects;
  return (
    <>
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
          accentType="dot"
          accentText="."
          headingText="Projects"
          title="Projects"
        />
        <SubHeading as="h3" cssStyling={subHeading}>
          Here are some of my most recent projects that I have built!
        </SubHeading>
      </Grid>
      <SingleProject
        name={firstProject.name}
        description={firstProject.description}
        stack={firstProject.stack}
        image={meowPortal}
        panelColor="blue"
        projectNumber="01"
      />
      <SingleProject
        name={secondProject.name}
        description={secondProject.description}
        stack={secondProject.stack}
        image={adrastos}
        panelColor="red"
        projectNumber="02"
      />
      <SingleProject
        name={thirdProject.name}
        description={thirdProject.description}
        stack={thirdProject.stack}
        image={tintsAndShades}
        panelColor="darkGrey"
        projectNumber="03"
      />
    </>
  );
};

export default Projects;
