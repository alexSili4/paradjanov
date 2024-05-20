import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('swiper-'),
        },
      },
    }),
    svgLoader(),
  ],
  resolve: {
    alias: {
      components: '/src/components',
      images: '/src/images',
      icons: '/src/icons',
      constants: '/src/constants',
      utils: '/src/utils',
      validator: '/src/validator',
      animations: '/src/animations',
      views: '/src/views',
      router: '/src/router',
      fonts: '/src/fonts',
    },
  },
});
