import { inputWrapper } from './InputWrapper.css';

type InputWrapperProps = {
  children: React.ReactNode;
};
const InputWrapper = ({ children }: InputWrapperProps): JSX.Element => {
  return <div className={inputWrapper}>{children}</div>;
};

export default InputWrapper;
