import { defineConfig } from 'drizzle-kit';
// import { env } from '@/lib/env';

console.log(process.env.DATABASE_URL);

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
