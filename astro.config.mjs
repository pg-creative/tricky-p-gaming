// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    optimizeDeps: {
      force: true
    },
    build: {
      target: 'esnext'
    },
    esbuild: {
      // Ensure esbuild service stays alive
      keepNames: true
    }
  }
});