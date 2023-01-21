export type FormInputs = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export type Error = {
  name: 'name' | 'email' | 'subject' | 'message';
  type: 'custom';
  message: string | undefined;
};
