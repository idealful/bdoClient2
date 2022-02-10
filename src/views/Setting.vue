<template>
  <article>
    <section class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-screen">
          <h1 class="text-gray-500 text-center text-5xl py-4">{{ t('userMenus[1].value') }}</h1>
          <div class="flex dark:text-gray-500 justify-center mt-2">
            <label for="language">{{ t('messages.changeLanguage') }} : </label>
            <select
              class="dark:bg-gray-900 mt-1 ml-2"
              id="language"
              v-model="lang.value"
              @change="changeLanguage"
              autofocus
            >
              <option value="en">en</option>
              <option value="ko">ko</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
// i18n
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

import { reactive } from 'vue';

const lang = reactive({
  value: locale.value,
});

const changeLanguage = () => {
  locale.value = lang.value;
};
</script>

<style></style>
