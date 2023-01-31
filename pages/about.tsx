import { Grid, Heading, ProjectStack } from '../components/ui';
import { skillList } from '../data';
import { aboutSubHeading, pageContainer } from '../styles/SharedStyles.css';
import {
  sectionHeader,
  sectionContainer,
  sectionParagraph,
  sectionWrapper,
  skillsUL,
} from '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className={pageContainer}>
      <Grid
        minHeight="100%"
        placeContent="center"
        gap="small"
        padding="smallLeftAndRight"
        columnsMediaBreakpoint={600}
      >
        <Heading
          accentText="."
          accentType="dot"
          title="About"
          headingText="About"
        />
        <h2 className={aboutSubHeading}>
          Hello I&apos;m Kaloyan Atanasov, Front-End developer.
          <br /> I love problem solving and I like making cool interactive
          things.
        </h2>
        <div className={sectionContainer}>
          <section className={sectionWrapper}>
            <h3 className={sectionHeader}>Background</h3>
            <p className={sectionParagraph}>
              I&apos;ve always been fascinated with animations and cool UI
              effects I&apos;ve seen on the web. Having had an opportunity in
              recent years i decided to pursue a carrier in web development. I
              took part in Le-Wagon bootcamp and after completing I continued
              with my self learning journey. I followed with React and NextJs.{' '}
            </p>
          </section>
          <section className={sectionWrapper}>
            <h3 className={sectionHeader}>Future Goals</h3>
            <p className={sectionParagraph}>
              One of my next moves is to learn Vue.Js and Svelte to widen my
              Front-End skills. I&apos;m also planning to jump into the Back-End
              world
            </p>
          </section>
          <section className={sectionWrapper}>
            <h3 className={sectionHeader}>My Hobbies</h3>
            <p className={sectionParagraph}>
              When I&apos;m not coding, I enjoy playing computer games and watch
              movies. I also recently took on reading again which was a
              childhood hobby of mine. I also enjoy playing bowling and darts
              (I&apos;m not that great at it though).
            </p>
          </section>
          <section className={sectionWrapper}>
            <h3 className={sectionHeader}>Skills</h3>
            <ul className={skillsUL}>
              {skillList.map(({ name, icon: Icon }) => {
                return <ProjectStack key={name} name={name} Icon={Icon} />;
              })}
            </ul>
          </section>
        </div>
      </Grid>
    </div>
  );
};

export default AboutPage;
