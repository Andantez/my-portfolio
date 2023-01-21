import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { createMailTemplate, isValidFormData } from '../../lib/helpers';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const formErrors = isValidFormData(req.body);

  if (formErrors !== true) {
    return res.status(422).json({ status: 'invalid data', errors: formErrors });
  }

  try {
    const msg = createMailTemplate(req.body);
    await sgMail.send(msg);
    return res.status(200).json({
      status: 'success',
      message: 'Contact email sent successfully!',
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: 'failed', message: 'Internal server error' });
  }
}
