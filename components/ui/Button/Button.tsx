import { btn } from './Button.css';

type ButtonProps = {
  handleClick?: () => void;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = ({ handleClick, ...rest }: ButtonProps): JSX.Element => {
  return <button {...rest} onClick={handleClick} className={btn} />;
};

export default Button;
