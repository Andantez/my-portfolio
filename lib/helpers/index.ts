import type { FormInputs } from '../types/form';

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
