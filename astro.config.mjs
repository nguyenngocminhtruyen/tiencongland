import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tiencongland.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  redirects: {
    '/du-an': '/projects',
    '/du-an/[...slug]': '/projects/[...slug]',
    '/chinh-sach-bao-mat': '/privacy-policy',
    '/dieu-khoan-su-dung': '/terms-of-use',
  },
});
