import { defineConfig } from 'astro/config';

// https://astro.build/config
// TODO: Replace 'YOUR_USERNAME' with your GitHub username
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/wipi_website/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});

