import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';
import type { FormInputs } from '../../../lib/types/form';
import { inputLabel, formInput } from './FormInput.css';

// TODO add "as" prop type
type FromInputProps = {
  label: string;
  name: string;
  type: 'text';
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors;
  required: boolean;
  validationSchema: RegisterOptions;
};

const FormInput = ({
  name,
  label,
  type,
  register,
  errors,
  required,
  validationSchema,
}: FromInputProps) => {
  return (
    <>
      <label
        className={required ? inputLabel.required : inputLabel.notRequired}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={errors.name ? formInput.inputError : formInput.base}
        type={type}
        id={name}
        {...register('name', validationSchema)}
      />
    </>
  );
};

export default FormInput;
