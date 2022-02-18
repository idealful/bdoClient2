<template>
  <article>
    <section class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-screen text-gray-500">
          <h1 class="text-center text-5xl py-4">{{ t(menu.name) }}</h1>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
// i18n
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// menu
const menu = {
  name: 'menu.main.menu2.name',
};
</script>

<style></style>
