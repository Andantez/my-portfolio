import { useForm, SubmitHandler } from 'react-hook-form';
import {
  formContainer,
  formButton,
  formError,
  wrapper,
} from './ContactForm.css';
import { MAX_MESSAGE_LENGTH, REGEX } from '../../lib/constVariables';
import { useEffect, useState } from 'react';
import type { FormInputs, Error } from '../../lib/types/form';
import InputWrapper from './InputWrapper';
import FormControl from './FormControl';
import { ProgressBar } from '../ui';

const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    watch,
    reset,
    setError,
  } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  const [showNotification, setShowNotification] = useState(false);
  const charactersLeft = MAX_MESSAGE_LENGTH - watch('message').length;

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const res = await (
        await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
      ).json();

      if (res.status === 'invalid data') {
        res.errors.forEach(({ name, type, message }: Error) => {
          if (message) {
            setError(name, { type, message });
          }
        });
      }
      if (res.status === 'success') {
        setShowNotification(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <form className={formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={wrapper}>
        <InputWrapper>
          <FormControl
            as="input"
            name="name"
            label="Name"
            register={register}
            errors={errors}
            required={true}
            validationSchema={{
              required: 'Please supply a valid name',
              minLength: {
                value: 2,
                message: 'Please supply a valid name',
              },
            }}
          />
        </InputWrapper>
        <span className={formError}>{errors?.name?.message}</span>
      </div>
      <div className={wrapper}>
        <InputWrapper>
          <FormControl
            as="input"
            label="Email"
            type="email"
            name="email"
            register={register}
            errors={errors}
            required={true}
            validationSchema={{
              required: 'Please enter an email address',
              pattern: {
                value: REGEX,
                message:
                  'Enter a valid email address e.g in the format user@domain.com',
              },
            }}
          />
        </InputWrapper>
        <span className={formError}>{errors?.email?.message}</span>
      </div>
      <div className={wrapper}>
        <InputWrapper>
          <FormControl
            as="input"
            name="subject"
            label="Subject"
            type="text"
            register={register}
            errors={errors}
            required={false}
            validationSchema={{
              maxLength: {
                value: 180,
                message: 'The Subject may not be longer than 180 characters',
              },
            }}
          />
        </InputWrapper>
        <span className={formError}>{errors?.subject?.message}</span>
      </div>
      <div className={wrapper}>
        <InputWrapper>
          <FormControl
            as="textarea"
            name="message"
            label="Message"
            register={register}
            errors={errors}
            required={true}
            validationSchema={{
              required: "Don't be shy! Write something",
              maxLength: MAX_MESSAGE_LENGTH,
            }}
            cols={30}
            rows={5}
          />
        </InputWrapper>
        <div>
          <span className={formError}>{errors?.message?.message}</span>
          {/* TODO: add svg line indicating the number of characters left. Next line is temporary */}
          <span>
            <ProgressBar charactersLeft={charactersLeft} />
          </span>
        </div>
      </div>
      <button className={formButton} type="submit">
        Send your message
      </button>
      {/* next line is temporary */}
      {showNotification && (
        <h3>Thank You. I will get back at you as soon as possible!</h3>
      )}
    </form>
  );
};

export default ContactForm;
