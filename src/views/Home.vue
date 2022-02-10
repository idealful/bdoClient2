<template>
  <article>
    <section class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-screen">
          <h1 class="text-gray-500 text-center text-5xl py-4">{{ t('mainMenus[0].value') }}</h1>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
// i18n
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style></style>
