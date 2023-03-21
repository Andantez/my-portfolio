type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type SubHeadingOwnProps<T extends React.ElementType> = {
  children: React.ReactNode;
  as?: T;
};

type SubHeadingProps<T extends React.ElementType> = SubHeadingOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof SubHeadingOwnProps<T>>;

const SubHeading = <T extends React.ElementType = Heading>({
  children,
  as,
}: SubHeadingProps<T>): JSX.Element => {
  const ComponentHeading = as || 'h1';

  return <ComponentHeading>{children}</ComponentHeading>;
};

export default SubHeading;
