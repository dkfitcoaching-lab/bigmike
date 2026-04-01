import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ifbbprobigmikeely.com',
  outDir: '../dist',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true
    }
  }
});
