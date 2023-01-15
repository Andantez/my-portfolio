import { MAX_MESSAGE_LENGTH } from '../constVariables';

export const charsLeft = (v: string) =>
  MAX_MESSAGE_LENGTH - parseInt(v) < MAX_MESSAGE_LENGTH ||
  `${v.length} out of ${MAX_MESSAGE_LENGTH} characters left`;
