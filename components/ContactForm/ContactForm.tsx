import { useForm, SubmitHandler } from 'react-hook-form';
import {
  formContainer,
  inputWrapper,
  inputLabel,
  formInput,
  formButton,
  formError,
  wrapper,
} from './ContactForm.css';
import { MAX_MESSAGE_LENGTH, REGEX } from '../../lib/constVariables';
import { useEffect } from 'react';

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
    formState: { errors, isSubmitSuccessful },
    watch,
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const charactersLeft = MAX_MESSAGE_LENGTH - watch('message').length;

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // TODO: to be implemented
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <form className={formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={wrapper}>
        <div className={inputWrapper}>
          <label className={inputLabel.required} htmlFor="name">
            Name
          </label>
          <input
            className={errors.name ? formInput.inputError : formInput.base}
            type="text"
            id="name"
            {...register('name', {
              required: true,
              minLength: {
                value: 2,
                message: 'Please supply a valid name',
              },
            })}
          />
        </div>
        <span className={formError}>{errors?.name?.message}</span>
      </div>
      <div className={wrapper}>
        <div className={inputWrapper}>
          <label className={inputLabel.required} htmlFor="email">
            Email
          </label>
          <input
            className={errors.email ? formInput.inputError : formInput.base}
            type="email"
            id="email"
            autoComplete="email"
            {...register('email', {
              required: 'Please enter an email address',
              pattern: {
                value: REGEX,
                message:
                  'Enter a valid email address e.g in the format user@domain.com',
              },
            })}
          />
        </div>
        <span className={formError}>{errors?.email?.message}</span>
      </div>
      <div className={wrapper}>
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
        {/* <span className={formError}>{errors?.subject?.message}</span> */}
      </div>
      <div className={wrapper}>
        <div className={inputWrapper}>
          <label className={inputLabel.required} htmlFor="message">
            Message
          </label>
          <textarea
            className={
              errors.message ? formInput.textAreaError : formInput.textArea
            }
            id="message"
            cols={30}
            rows={5}
            {...register('message', {
              required: true,
              minLength: {
                value: 15,
                message: 'Min length is 15',
              },
              maxLength: MAX_MESSAGE_LENGTH,
            })}
          ></textarea>
        </div>
        <div>
          <span className={formError}>{errors?.message?.message}</span>
          {/* TODO: add svg line indicating the number of characters left. Next line is temporary */}
          <span> Number of characters left {charactersLeft}</span>
        </div>
      </div>
      <button className={formButton} type="submit">
        Send your message
      </button>
    </form>
  );
};

export default ContactForm;
