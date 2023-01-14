import { useForm, SubmitHandler } from 'react-hook-form';
import { formContainer, inputWrapper, inputLabel, formInput, formButton } from './ContactForm.css';

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormInputs>();
  
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
          {...register('name')}
        />
      </div>
      <div className={inputWrapper}>
        <label className={inputLabel.required} htmlFor="email">
          Email
        </label>
        <input
          className={formInput.base}
          type="email"
          id="email"
          {...register('email')}
        />
      </div>
      <div className={inputWrapper}>
        <label className={inputLabel.required} htmlFor="subject">
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
          {...register('message')}
        ></textarea>
      </div>
      <button className={formButton} type="submit">Send your message</button>
    </form>
  );
};

export default ContactForm;
