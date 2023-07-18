import {
  articleHeader,
  articleItem,
  articlesWrapper,
  articleWrapper,
  backBtn,
  backWrapper,
  contentContainer,
  mainHeading,
  modalContainer,
  skillsUL,
} from './AboutMeModal.css';
import { skillList } from '../../../data';
import { ProjectStack } from '../../ui';
import ChevronLeft from '../../icons/ChevronLeft';
import Link from 'next/link';

type MoreAboutMeProps = {
  handleClick: () => void;
};
const AboutMeModal = ({ handleClick }: MoreAboutMeProps) => {
  return (
    <div className={modalContainer} onClick={handleClick}>
      <aside className={contentContainer} onClick={(e) => e.stopPropagation()}>
        <div className={backWrapper}>
          <button type="button" className={backBtn.base} onClick={handleClick}>
            <ChevronLeft />
          </button>
          <button type="button" className={backBtn.text} onClick={handleClick}>
            Back
          </button>
        </div>
        <h1 className={mainHeading}>
          Hello I&apos;m Kaloyan Atanasov, Front-End developer.
          <br /> I love problem solving and I like making cool interactive
          things.
        </h1>
        <div className={articlesWrapper}>
          <article className={articleWrapper}>
            <h2 className={articleHeader}>Background</h2>
            <p className={articleItem}>
              I&apos;ve always been fascinated with animations and cool UI
              effects I&apos;ve seen on the web. Having had an opportunity in
              recent years i decided to pursue a carrier in web development. I
              took part in Le-Wagon bootcamp and after completing I continued
              with my self learning journey. I followed with React and NextJs.{' '}
            </p>
          </article>
          <article className={articleWrapper}>
            <h2 className={articleHeader}>Future Goals</h2>
            <p className={articleItem}>
              One of my next moves is to learn Vue.Js and Svelte to widen my
              Front-End skills. I&apos;m also planning to jump into the Back-End
              world
            </p>
          </article>
          <article className={articleWrapper}>
            <h3 className={articleHeader}>My Hobbies</h3>
            <p className={articleItem}>
              When I&apos;m not coding, I enjoy playing computer games and watch
              movies. I also recently took on reading again which was a
              childhood hobby of mine. I also enjoy playing bowling and darts
              (I&apos;m not that great at it though).
            </p>
          </article>
          <article className={articleWrapper}>
            <h3 className={articleHeader}>Skills</h3>
            <ul className={skillsUL}>
              {skillList.map(({ name, icon: Icon }) => {
                return <ProjectStack key={name} name={name} Icon={Icon} />;
              })}
            </ul>
          </article>
        </div>
        <footer>
          {/* might change text to icons */}
          <Link href="mailto:kaloyanatanasov83@gmail.com">Email</Link>
          <Link href="https://github.com/Andantez" target="_blank">Github</Link>
          <Link href="https://www.linkedin.com/in/kaloyan-boyanov-atanasov/" target="_blank">
            Linkedin
          </Link>
        </footer>
      </aside>
    </div>
  );
};

export default AboutMeModal;
