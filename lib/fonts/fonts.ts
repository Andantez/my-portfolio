import { Lora, Merriweather } from '@next/font/google';

export const lora = Lora({
  subsets: ['latin'],
});

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900', '300'],
});
