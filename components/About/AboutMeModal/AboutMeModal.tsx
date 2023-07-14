import { modalContainer } from './AboutMeModal.css';
import { skillList } from '../../../data';
import { ProjectStack } from '../../ui';

type MoreAboutMeProps = {
  handleClick: () => void;
};
const AboutMeModal = ({ handleClick }: MoreAboutMeProps) => {
  return (
    <div className={modalContainer}>
      {/* This button will be removed later */}
      <button onClick={handleClick}>CLOSE</button>
      <article>
        <h1>
          Hello I&apos;m Kaloyan Atanasov, Front-End developer.
          <br /> I love problem solving and I like making cool interactive
          things.
        </h1>
        <article>
          <h2>Background</h2>
          <p>
            I&apos;ve always been fascinated with animations and cool UI effects
            I&apos;ve seen on the web. Having had an opportunity in recent years
            i decided to pursue a carrier in web development. I took part in
            Le-Wagon bootcamp and after completing I continued with my self
            learning journey. I followed with React and NextJs.{' '}
          </p>
        </article>
        <article>
          <h2>Future Goals</h2>
          <p>
            One of my next moves is to learn Vue.Js and Svelte to widen my
            Front-End skills. I&apos;m also planning to jump into the Back-End
            world
          </p>
        </article>
        <article>
          <h3>My Hobbies</h3>
          <p>
            When I&apos;m not coding, I enjoy playing computer games and watch
            movies. I also recently took on reading again which was a childhood
            hobby of mine. I also enjoy playing bowling and darts (I&apos;m not
            that great at it though).
          </p>
        </article>
        <article>
          <h3>Skills</h3>
          <ul>
            {skillList.map(({ name, icon: Icon }) => {
              return <ProjectStack key={name} name={name} Icon={Icon} />;
            })}
          </ul>
        </article>
      </article>
    </div>
  );
};

export default AboutMeModal;
