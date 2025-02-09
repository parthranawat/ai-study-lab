import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './configs/schema.js',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABSE_CONNECTION_STRING,
  },
});
