import { resolve } from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
  base: '/material_titi/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        practica: resolve(__dirname, 'practica/index.html'),
        // ciencias:    resolve(__dirname, 'ciencias/index.html'),
        // espanol:     resolve(__dirname, 'espanol/index.html'),
      },
    },
  },
};
