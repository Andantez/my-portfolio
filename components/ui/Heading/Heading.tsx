import {
  accent,
  pageTitle,
  header,
  section,
} from '../../../lib/styles/SharedStyles.css';

type Title = 'Projects' | 'About' | 'Contact';

type AccentDot = {
  accentType: 'dot';
  accentText: '.';
};
type AccentNumber = {
  accentType: 'number';
  accentText: '01.' | '02.' | '03.';
};

type HeadingOwnProps<T extends React.ElementType> = {
  headingText: string;
  title: Title;
  as?: T;
};

type HeadingProps<T extends React.ElementType> = HeadingOwnProps<T> &
  (AccentDot | AccentNumber) &
  Omit<React.ComponentPropsWithoutRef<T>, keyof HeadingOwnProps<T>>;

const Heading = <T extends React.ElementType = 'h1'>({
  accentType,
  accentText,
  headingText,
  title,
  as,
  ...rest
}: HeadingProps<T>) => {
  const Component = as || 'h1';
  if (accentType === 'number') {
    return (
      <section className={section}>
        <Component className={header} {...rest}>
          <span className={accent}>{accentText}</span> {headingText}
        </Component>
        <div className={pageTitle}>{title}</div>
      </section>
    );
  }
  return (
    <section className={section}>
      <h1 className={header}>
        {headingText}
        <span className={accent}>{accentText}</span>
      </h1>
      <div className={pageTitle}>{title}</div>
    </section>
  );
};

export default Heading;
