import { Grid, Heading } from '../ui';

type AboutProps = {
  children: React.ReactNode;
};
const About = ({ children }: AboutProps): JSX.Element => {
  return (
    <Grid
      height="100%"
      placeContent="center"
      gap="small"
      padding="smallLeftAndRight"
      overflow="hiddenX"
      columnsMediaBreakpoint={600}
    >
      <Heading
        as='h2'
        accentType="number"
        accentText="02."
        title="About"
        headingText="My bio."
      />
      {children}
    </Grid>
  );
};

export default About;
