<template>
  <article>
    <section class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-screen text-gray-500">
          <h1 class="text-center text-5xl py-4">{{ t(menu.name) }}</h1>
          <div class="flex dark:text-gray-500 justify-center mt-2">
            <label for="language">{{ t('messages.changeLanguage') }} : </label>
            <select
              class="dark:bg-gray-900 mt-1 ml-2"
              id="language"
              v-model="activeLanguage.value"
              @change="changeLanguage"
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

// language
const activeLanguage = {
  value: locale.value,
};

// menu
const menu = {
  name: 'userMenus[1].value',
};

// event handler
const changeLanguage = () => {
  locale.value = activeLanguage.value;
};
</script>

<style></style>
