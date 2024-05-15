import { createApp } from 'vue';
import App from './App.vue';
import 'modern-normalize';
import Vue3Lottie from 'vue3-lottie';
import router from 'router';

createApp(App).use(Vue3Lottie).use(router).mount('#app');
