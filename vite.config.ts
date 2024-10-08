import { resolve } from 'node:path';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    quasar(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
});
