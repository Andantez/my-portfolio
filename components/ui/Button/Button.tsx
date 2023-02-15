import { btn } from './Button.css';

type ButtonProps = {} & React.ComponentPropsWithoutRef<'button'>;

const Button = (props: ButtonProps): JSX.Element => {
  return <button {...props} className={btn} />;
};

export default Button;
