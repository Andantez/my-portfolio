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
  socialLink,
  socialsFooter,
} from './AboutMeModal.css';
import { skillList } from '../../../data';
import { ProjectStack } from '../../ui';
import ChevronLeft from '../../icons/ChevronLeft';
import Link from 'next/link';
import { Github, Linkedin } from '../../icons';
import Email from '../../icons/Email';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.2,
      ease: 'easeInOut',
      staggerChildren: 0.07,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      duration: 0.25,
      ease: 'easeIn',
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};
const svgVariant: Variants = {
  initial: {
    d: 'M0,0 L1,0 L1,1 L1,1 C1,0.5,1,0.5,1,0',

  },
  animate: {
    d: 'M0,0 L1,0 L1,1 L0,1 C-0.211,0.75,-0.211,0.25,0,0',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {},
};
type MoreAboutMeProps = {
  handleClick: () => void;
};
const AboutMeModal = ({ handleClick }: MoreAboutMeProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
      className={modalContainer}
      onClick={handleClick}
    >
      <svg id="svg" width="0" height="0">
        <clipPath id="clipPath2" clipPathUnits="objectBoundingBox">
          <motion.path
            variants={svgVariant}
            d="M0,0 L1,0 L1,1 L1,1 C1,0.5,1,0.5,1,0"
          />
        </clipPath>
      </svg>
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
        <footer className={socialsFooter}>
          <Link
            href="mailto:kaloyanatanasov83@gmail.com"
            className={socialLink}
          >
            <Email />
          </Link>
          <Link
            href="https://github.com/Andantez"
            target="_blank"
            className={socialLink}
          >
            <Github screenType="mobile" width={25} height={25} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kaloyan-boyanov-atanasov/"
            target="_blank"
            className={socialLink}
          >
            <Linkedin screenType="mobile" width={25} height={25} />
          </Link>
        </footer>
      </aside>
    </motion.div>
  );
};

export default AboutMeModal;
