import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      'components': '/src/components',
      'images': '/src/images',
      'icons': '/src/icons',
      'constants': '/src/constants',
      'utils': '/src/utils',
      'validator': '/src/validator',
    },
  },
});
