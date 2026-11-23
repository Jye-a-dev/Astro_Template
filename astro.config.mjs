import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const port = Number(env.PORT) || 5000;

export default defineConfig({
  site: env.PUBLIC_SITE_URL || `http://localhost:${port}`,
  server: { port, host: true },
  preview: { port },
  vite: {
    plugins: [tailwindcss()],
  },
});
