// import type { Projects } from '../../../data/projects';
import { ProjectStack, ProjectLinks, Flex, BrowserMenu } from '../../ui';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import {
  projectInfo,
  projectName,
  projectDescription,
  projectStack,
  projectImgWrapper,
} from './SingleProject.css';
import type { Stack } from '../../../data/projects';
import { boxShadow } from '../../../styles/vars.css';

type ProjectProps = {
  name: string;
  description: string;
  stack: Stack;
  image: StaticImageData;
  panelColor: keyof typeof projectImgWrapper;
};

const SingleProject = ({
  name,
  description,
  stack,
  image,
  panelColor,
}: ProjectProps): JSX.Element => {
  return (
    <Flex
      minHeight="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="columnReverse"
      gap="medium"
      directionMediaBreakpoint="rowAt1024"
      gapMediaBreakPoint="gap3At1400"
      paddingTop="4rem"
      paddingBottom="4rem"
    >
      <article className={projectInfo}>
        <h2 className={projectName}>{name}</h2>
        <p className={projectDescription}>{description}</p>
        <ul className={projectStack}>
          {stack.map((stk) => (
            <ProjectStack key={stk.name} name={stk.name} Icon={stk.icon} />
          ))}
        </ul>
        <ProjectLinks liveUrl="/" sourceUrl="/" />
      </article>
      <div className={projectImgWrapper[panelColor]}>
        <BrowserMenu />
        <Image
          src={image}
          alt={name}
          priority
          quality={100}
          style={{ height: 'auto', boxShadow }}
        />
      </div>
    </Flex>
  );
};

export default SingleProject;
