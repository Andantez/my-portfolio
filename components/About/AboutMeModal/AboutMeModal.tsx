import {
  articleItem,
  articlesWrapper,
  contentContainer,
  mainHeading,
  modalContainer,
  skillsUL,
} from './AboutMeModal.css';
import { skillList } from '../../../data';
import { ProjectStack } from '../../ui';
import { motion } from 'framer-motion';
import {
  aboutModalContainerVariants,
  itemWrapperVariants,
} from '../../../lib/framerVariants';
import { itemVariants } from '../../../lib/framerVariants/aboutMeModalVariants';
import ModalNavigation from './ModalNavigation';
import SvgPath from './SvgPath';
import ModalFooter from './ModalFooter';
import ModalItem from './ModalItem';

type MoreAboutMeProps = {
  handleClick: () => void;
};
const AboutMeModal = ({ handleClick }: MoreAboutMeProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={aboutModalContainerVariants}
      className={modalContainer}
      onClick={handleClick}
    >
      <SvgPath />
      <motion.aside
        variants={itemWrapperVariants}
        className={contentContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalNavigation onClick={handleClick} />
        <motion.h1 variants={itemVariants} className={mainHeading}>
          Hello I&apos;m Kaloyan Atanasov, Front-End developer.
          <br /> I love problem solving and I like making cool interactive
          things.
        </motion.h1>
        <motion.div className={articlesWrapper}>
          <ModalItem heading="Background">
            <p className={articleItem}>
              I&apos;ve always been fascinated with animations and cool UI
              effects I&apos;ve seen on the web. Having had an opportunity in
              recent years i decided to pursue a carrier in web development. I
              took part in Le-Wagon bootcamp and after completing I continued
              with my self learning journey. I followed with React and NextJs.{' '}
            </p>
          </ModalItem>
          <ModalItem heading="Future Goals">
            <p className={articleItem}>
              One of my next moves is to learn Vue.Js and Svelte to widen my
              Front-End skills. I&apos;m also planning to jump into the Back-End
              world
            </p>
          </ModalItem>
          <ModalItem heading="Hobbies">
            <p className={articleItem}>
              When I&apos;m not coding, I enjoy playing computer games and watch
              movies. I also recently took on reading again which was a
              childhood hobby of mine. I also enjoy playing bowling and darts
              (I&apos;m not that great at it though).
            </p>
          </ModalItem>
          <ModalItem heading="Skills">
            <ul className={skillsUL}>
              {skillList.map(({ name, icon: Icon }) => {
                return <ProjectStack key={name} name={name} Icon={Icon} />;
              })}
            </ul>
          </ModalItem>
        </motion.div>
        <ModalFooter />
      </motion.aside>
    </motion.div>
  );
};

export default AboutMeModal;
