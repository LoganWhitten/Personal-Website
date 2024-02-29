import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), vue()]
});