import type { Heading, Styling } from '../../../lib/types/heading';

type SubHeadingOwnProps<T extends React.ElementType> = {
  children: React.ReactNode;
  as?: T;
  cssStyling: Styling;
};

type SubHeadingProps<T extends React.ElementType> = SubHeadingOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof SubHeadingOwnProps<T>>;

const SubHeading = <T extends React.ElementType = Heading>({
  children,
  as,
  cssStyling,
}: SubHeadingProps<T>): JSX.Element => {
  const ComponentHeading = as || 'h1';

  return <ComponentHeading className={cssStyling}>{children}</ComponentHeading>;
};

export default SubHeading;
