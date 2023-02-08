import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';
import type { FormInputs } from '../../../lib/types/form';
import { inputLabel, formInput, scrollbar } from './FormInput.css';

// TODO add "as" prop type
type FormInputOwnProps = {
  label: string;
  name: keyof FormInputs;
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors;
  required: boolean;
  validationSchema: RegisterOptions;
};

type FormInputProps<T extends React.ElementType> = {
  as?: T;
} & FormInputOwnProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof FormInputOwnProps>;

const FormInput = <T extends React.ElementType = 'input'>({
  name,
  label,
  type,
  register,
  errors,
  required,
  validationSchema,
  as,
  ...props
}: FormInputProps<T>) => {
  const Component = as || 'input';
  let inputClassNames: string;

  if (as === 'input') {
    if (errors[name]) {
      inputClassNames = formInput.inputError;
    } else {
      inputClassNames = formInput.base;
    }
  } else {
    if (errors[name]) {
      inputClassNames = `${formInput.textAreaError} ${scrollbar}`;
    } else {
      inputClassNames = `${formInput.textArea} ${scrollbar}`;
    }
  }

  return (
    <>
      <label
        className={required ? inputLabel.required : inputLabel.notRequired}
        htmlFor={name}
      >
        {label}
      </label>
      <Component
        className={inputClassNames}
        type={type}
        id={name}
        {...register(name, validationSchema)}
        {...props}
      />
    </>
  );
};

export default FormInput;
