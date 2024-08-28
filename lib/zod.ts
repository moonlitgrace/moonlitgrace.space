import { z } from 'zod';

export const zodNonEmptyString = (name: string) => {
  return z
    .string()
    .min(1, { message: `${name} cant be empty` })
    .trim();
};
