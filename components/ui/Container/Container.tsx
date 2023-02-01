import { pageContainer } from './Container.css';

type WrapperProps = {
  children: React.ReactNode;
};

const Container = ({ children }: WrapperProps): JSX.Element => {
  return <div className={pageContainer}>{children}</div>;
};

export default Container;
