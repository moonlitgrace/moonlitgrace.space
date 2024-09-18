import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// Load environment variables from .env
config(); 

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    // Ensure DATABASE_URL is correctly loaded
    url: process.env.DATABASE_URL || '',
  },
  verbose: true,
  strict: true,
});
