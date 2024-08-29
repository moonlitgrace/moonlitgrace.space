import { zodNonEmptyString } from '@/lib/zod';
import { z } from 'zod';

export const AuthSchema = z.object({
  username: zodNonEmptyString('username'),
  password: zodNonEmptyString('password'),
});

export type AuthFormState =
  | {
      errors?: {
        username?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type AuthFormData = z.infer<typeof AuthSchema>;
