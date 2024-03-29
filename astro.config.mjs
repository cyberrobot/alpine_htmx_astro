import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';
import alpine from '@astrojs/alpinejs';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), alpine()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
