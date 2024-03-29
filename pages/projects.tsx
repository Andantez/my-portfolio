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
        minHeight="100svh"
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
          <br />
          Each project presented a unique opportunity for me to expand my skills
          and knowledge.
        </SubHeading>
      </Grid>
      <SingleProject
        name={firstProject.name}
        description={firstProject.description}
        stack={firstProject.stack}
        image={meowPortal}
        minHeight="100svh"
      />
      <SingleProject
        name={secondProject.name}
        description={secondProject.description}
        stack={secondProject.stack}
        image={adrastos}
        minHeight="100svh"
      />
      <SingleProject
        name={thirdProject.name}
        description={thirdProject.description}
        stack={thirdProject.stack}
        image={tintsAndShades}
        minHeight="100svh"
      />
    </>
  );
};

export default Projects;
