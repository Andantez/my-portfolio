import SingleProject from './SingleProject';
import { projects } from '../../data';
import meowPortal from '../../public/meowPortal.png';
import adrastos from '../../public/adrastos.png';
import tintsAndShades from '../../public/tintsAndShades.png';
import { homepageProjectsContainer } from './HomepageProjects.css';

const HomepageProjects = () => {
  const [firstProject, secondProject, thirdProject] = projects;
  return (
    <div className={homepageProjectsContainer}>
      <SingleProject
        name={firstProject.name}
        description={firstProject.description}
        stack={firstProject.stack}
        image={meowPortal}
      />
      <SingleProject
        name={secondProject.name}
        description={secondProject.description}
        stack={secondProject.stack}
        image={adrastos}
        textPosition="right"
      />
      <SingleProject
        name={thirdProject.name}
        description={thirdProject.description}
        stack={thirdProject.stack}
        image={tintsAndShades}
      />
    </div>
  );
};

export default HomepageProjects;
