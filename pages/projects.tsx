import { projects } from '../data';
import SingleProject from '../components/HomepageProjects/SingleProject';
import { Grid, Heading } from '../components/ui';
import meowPortal from '../public/meowPortal.png';
import adrastos from '../public/adrastos.png';
import tintsAndShades from '../public/tintsAndShades.png';

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
        {/* TODO add paragraph here  */}
      </Grid>
      <SingleProject
        name={firstProject.name}
        description={firstProject.description}
        stack={firstProject.stack}
        image={meowPortal}
        panelColor="blue"
      />
      <SingleProject
        name={secondProject.name}
        description={secondProject.description}
        stack={secondProject.stack}
        image={adrastos}
        panelColor="red"
      />
      <SingleProject
        name={thirdProject.name}
        description={thirdProject.description}
        stack={thirdProject.stack}
        image={tintsAndShades}
        panelColor="darkGrey"
      />
    </>
  );
};

export default Projects;
