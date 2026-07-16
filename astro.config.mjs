import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://tiencongland.com',

  // Old→new route redirects are handled by public/_redirects (Cloudflare Pages edge redirects).
  // Do NOT also declare them here: Cloudflare's Astro build preset auto-converts this `redirects`
  // key into its own _redirects rules and appends them after ours, producing duplicate/looping
  // rules that fail deployment ("Invalid _redirects configuration").
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],

  adapter: cloudflare()
});