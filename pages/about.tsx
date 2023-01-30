import { Grid, Heading } from '../components/ui';
import { aboutSubHeading } from '../styles/SharedStyles.css';

const AboutPage = () => {
  return (
    <Grid
      minHeight="100%"
      placeContent="center"
      gap="small"
      padding="smallLeftAndRight"
      overflow="hiddenX"
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
        <br /> I love problem solving and I like making cool interactive things.
      </h2>
      <div>
        <section>
          <h3>Background</h3>
          <p>
            I&apos;ve always been fascinated with animations and cool UI effects
            I&apos;ve seen on the web. Having had an opportunity in recent years
            i decided to pursue a carrier in web development. I took part in
            Le-Wagon bootcamp and after completing I continued with my self
            learning journey. I followed with React and NextJs.{' '}
          </p>
        </section>
        <section>
          <h3>Future Goals</h3>
          <p>
            One of my next moves is to learn Vue.Js and Svelte to widen my
            Front-End skills. I&apos;m also planning to jump into the Back-End
            world
          </p>
        </section>
        <section>
          <h3>My Hobbies</h3>
          <p>
            When I&apos;m not coding, I enjoy playing computer games and watch
            movies. I also recently took on reading again which was a childhood
            hobby of mine. I also enjoy playing bowling and darts (I&apos;m not
            that great at it though).
          </p>
        </section>
        <section>
          <h3>Skills</h3>
          {/* This is temporary. To be replaced with icons */}
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>NextJs</li>
            <li>React</li>
            <li>Ruby</li>
            <li>Rails</li>
            <li>MongoDB</li>
            <li>SWR</li>
            <li>Framer Motion</li>
            <li>NextAuth</li>
          </ul>
        </section>
      </div>
    </Grid>
  );
};

export default AboutPage;
