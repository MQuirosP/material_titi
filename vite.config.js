import { resolve } from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
  base: '/rioja/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main:        resolve(__dirname, 'index.html'),
        matematicas: resolve(__dirname, 'matematicas/index.html'),
        // ciencias:    resolve(__dirname, 'ciencias/index.html'),
        // espanol:     resolve(__dirname, 'espanol/index.html'),
      },
    },
  },
};
