import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: './',
  plugins: [basicSsl()],
  server: { host: true },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        1: '1/index.html',
        2: '2/index.html',
        3: '3/index.html',
      },
    },
  },
});
