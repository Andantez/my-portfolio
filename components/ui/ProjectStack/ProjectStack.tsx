import { IconImgProps, IconSvgProps } from '../../../lib/types/icon';
import { stackWrapper, stackName } from './ProjectStack.css';

type ProjectStackProps = {
  name: string;
Icon:
    | null
    | React.ElementType<IconSvgProps>
    | React.ElementType<IconImgProps>;
};
const ProjectStack = ({ name, Icon }: ProjectStackProps): JSX.Element => {
  return (
    <div className={stackWrapper}>
      {Icon && <Icon width={20} height={20} />}
      <p className={stackName}>{name}</p>
    </div>
  );
};

export default ProjectStack;
