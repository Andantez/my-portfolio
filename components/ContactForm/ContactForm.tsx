import { useForm, SubmitHandler } from 'react-hook-form';

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
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid' }}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name')} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" {...register('subject')} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols={30}
          rows={10}
          {...register('message')}
        ></textarea>
      </div>
      <button type="submit">Send your message</button>
    </form>
  );
};

export default ContactForm;
