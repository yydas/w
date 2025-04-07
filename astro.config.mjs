import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://w-6e5.pages.dev',
  server: {
    host: '0.0.0.0',
  },
  content: {
    collections: {
      post: {
        type: 'content',
        directory: 'src/content/post',
      },
      project: {
        type: 'content',
        directory: 'src/content/project',
      },
    },
  },
  vite: {
    assetsInclude: ['**/*.csv']
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    }
  }
});