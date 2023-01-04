import type { Projects } from '../../../data/projects';
import { ProjectStack, Grid } from '../../ui';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
// TODO change the html structure
type ImageProp = {
  image: StaticImageData;
};
type SingleProjectProps = Projects & ImageProp;
const SingleProject = ({
  name,
  description,
  stack,
  image,
}: SingleProjectProps): JSX.Element => {
  return (
    <Grid gap="withoutGap" mediaBreakpoint="atLargeSizeScreen">
      <article>
        <h1>{name}</h1>
        <p>{description}</p>
        <div>
          {stack.map((stk) => (
            <ProjectStack key={stk.name} name={stk.name} Icon={stk.icon} />
          ))}
        </div>
        <div>
          <Link href="/">Visit Live</Link>
          <Link href="/">Source Code</Link>
        </div>
      </article>
      <div>
        <Image src={image} alt={name} priority />
      </div>
    </Grid>
  );
};

export default SingleProject;
