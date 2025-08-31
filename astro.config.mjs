import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://o-isan.github.io/',
  base: '/',           // 👈 muy importante, se queda en '/' porque este repo es el "especial"
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind()],
});
