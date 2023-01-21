import type { FormInputs, Error } from '../types/form';
import { REGEX } from '../constVariables';

export const createMailTemplate = (mailData: FormInputs) => {
  const { name, email, subject, message } = mailData;
  return {
    to: process.env.SEND_MAIL_TO!,
    from: process.env.SEND_MAIL_FROM!,
    subject: subject || 'Not specified',
    text: `You've got a new mail from ${name} and their email is: ${email}. Their message is: ${message}`,
    html: `<div><h3>You've got a new mail</h3>
      <p>Their details are</p>
      <ul>
        <li>Name: <strong>${name}</strong></li>
        <li>Email: <strong>${email}</strong></li>
        <li>Message: ${message}</li>
      </ul>
    </div>`,
  };
};

export const isValidFormData = (formData: FormInputs) => {
  const { name, email, message } = formData;

  const errors: Error[] = [
    {
      name: 'name',
      type: 'custom',
      message: name.length < 2 ? 'Please supply a valid name' : undefined,
    },
    {
      name: 'email',
      type: 'custom',
      message: REGEX.test(email)
        ? undefined
        : email.length === 0
        ? 'Please enter an email address'
        : 'Enter a valid email address e.g in the format user@domain.com',
    },
    {
      name: 'message',
      type: 'custom',
      message:
        message.length > 2500
          ? 'Maximum number of characters is 2500'
          : message.length === 0
          ? "Don't be shy! Write something"
          : undefined,
    },
  ];

  if (
    errors[0].message === undefined &&
    errors[1].message === undefined &&
    errors[2].message === undefined
  ) {
    return true;
  } else {
    return errors;
  }
};
