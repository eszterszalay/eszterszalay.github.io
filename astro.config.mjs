import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://szalay-alt.github.io',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/eszterszalay.github.io' : '/',
  output: 'static',
  trailingSlash: 'always',
});
