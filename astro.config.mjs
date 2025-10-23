// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
  integrations: [lenis(), react(), tailwind(),],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },

});