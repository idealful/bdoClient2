import { createApp } from 'vue';
import App from './App.vue';

import './assets/css/index.css'; // tailwindcss

import router from './router'; // router
import store from './assets/js/store'; // vuex

import { createI18n } from 'vue-i18n';
import { en } from './locales/en';
import { ko } from './locales/ko';
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'ko', // set locale
  fallbackLocale: 'en', // set fallback locale
  useScope: 'global',
  messages: { en, ko }, // set locale messages
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');
