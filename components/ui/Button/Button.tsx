import { btn } from './Button.css';

type ButtonProps = {
  handleClick?: () => void;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = ({ handleClick, ...rest }: ButtonProps): JSX.Element => {
  return (
    <button
      {...rest}
      onClick={handleClick}
      className={rest.disabled ? btn.disabled : btn.base}
    />
  );
};

export default Button;
