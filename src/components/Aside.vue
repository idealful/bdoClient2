<template>
  <div class="flex fixed bottom-5 right-5">
    <a
      href="#"
      class="text-gray-500 hover:text-gray-700 dark:hover:text-white hover:cursor-pointer"
      @click="toggleScreenMode"
      :title="store.getters.getScreenTxt"
    >
      <span v-if="store.getters.getScreenMode === modeDark">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 28 28" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </span>
      <span v-else>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </span>
    </a>
    <a href="#app" class="text-gray-500 hover:text-gray-700 dark:hover:text-white hover:cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

// i18n
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import log from '../assets/js/log';

// ScreenMode
const modeLight = t('mode.light');
const modeDark = t('mode.dark');

const toggleScreenMode = () => {
  let modeLightOrDark = modeLight;
  let modeTxt = t('mode.lightTxt');
  if (store.getters.getScreenMode === modeLight) {
    modeLightOrDark = modeDark;
    modeTxt = t('mode.darkTxt');
  }
  store.commit('setScreenMode', modeLightOrDark);
  store.commit('setScreenTxt', modeTxt);

  log(store.state.isDebug, 'toggleScreenMode', store.getters.getScreenMode);
};
</script>

<style></style>
