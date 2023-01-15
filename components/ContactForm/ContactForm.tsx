import { useForm, SubmitHandler } from 'react-hook-form';
import {
  formContainer,
  inputWrapper,
  inputLabel,
  formInput,
  formButton,
} from './ContactForm.css';
import { REGEX } from '../../lib/constVariables';
import { charsLeft } from '../../lib/helpers';
type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // TODO: to be implemented
  };
  return (
    <form className={formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={inputWrapper}>
        <label className={inputLabel.required} htmlFor="name">
          Name
        </label>
        <input
          className={formInput.base}
          type="text"
          id="name"
          {...register('name', {
            minLength: {
              value: 2,
              message: 'Minimum length is 2',
            },
          })}
        />
        {errors.name && <small>{errors.name.message}</small>}
      </div>
      <div className={inputWrapper}>
        <label className={inputLabel.required} htmlFor="email">
          Email
        </label>
        <input
          className={formInput.base}
          type="email"
          id="email"
          // autoComplete="email"
          {...register('email', {
            pattern: {
              value: REGEX,
              message:
                'Enter a valid email address e.g in the format user@domain.com',
            },
          })}
        />
        {errors.email && <small>{errors.email.message}</small>}
      </div>
      <div className={inputWrapper}>
        <label className={inputLabel.notRequired} htmlFor="subject">
          Subject
        </label>
        <input
          className={formInput.base}
          type="text"
          id="subject"
          {...register('subject')}
        />
      </div>
      <div className={inputWrapper}>
        <label className={inputLabel.required} htmlFor="message">
          Message
        </label>
        <textarea
          className={formInput.textArea}
          id="message"
          cols={30}
          rows={5}
          {...register('message', {
            minLength: {
              value: 15,
              message: 'Min length is 15',
            },
            validate: {
              charsLeft,
            },
          })}
        ></textarea>
        {errors.message && <small>{errors.message.message}</small>}
      </div>
      <button className={formButton} type="submit">
        Send your message
      </button>
    </form>
  );
};

export default ContactForm;
