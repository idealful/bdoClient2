import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch'); // prefetch 삭제
  },
});
