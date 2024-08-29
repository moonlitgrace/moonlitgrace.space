import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  SECRET_KEY: z.string(),
  ADMIN_PASSWORD: z.string(),
});

export const env = envSchema.parse(process.env);
