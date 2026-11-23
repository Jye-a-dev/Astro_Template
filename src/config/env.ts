import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(5000),
  PUBLIC_SITE_URL: z.url().default('http://localhost:5000'),
  PUBLIC_API_BASE_URL: z.string().default('http://localhost:8000/api'),
});

const getRawEnv = () => {
  const isServer = typeof process !== 'undefined' && Boolean(process.env);
  return {
    PORT: isServer && process.env.PORT ? process.env.PORT : (import.meta.env.PORT ?? '5000'),
    PUBLIC_SITE_URL:
      (isServer && process.env.PUBLIC_SITE_URL) ||
      import.meta.env.PUBLIC_SITE_URL ||
      'http://localhost:5000',
    PUBLIC_API_BASE_URL:
      (isServer && process.env.PUBLIC_API_BASE_URL) ||
      import.meta.env.PUBLIC_API_BASE_URL ||
      'http://localhost:8000/api',
  };
};

export const env = envSchema.parse(getRawEnv());
