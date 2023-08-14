import { btn } from './Button.css';

type ButtonProps = {
  handleClick?: () => void;
  variant: 'withBorder' | 'withoutBorder';
} & React.ComponentPropsWithoutRef<'button'>;

const Button = ({
  handleClick,
  variant,
  ...rest
}: ButtonProps): JSX.Element => {
  return <button {...rest} onClick={handleClick} className={btn[variant]} />;
};

export default Button;
