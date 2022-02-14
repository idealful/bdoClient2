<template>
  <article>
    <section class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-screen text-gray-500">
          <h1 class="text-center text-5xl py-4">{{ t('userMenus[0].value') }}</h1>
          <div class="">
            <div class="text-center">
              <span class="">{{ t('messages.useremail') }}:</span>
              <span class="pl-2">{{ user.email }}</span>
            </div>
            <div class="text-center">
              <span class="">{{ t('messages.username') }}:</span>
              <span class="pl-2">{{ user.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
// i18n
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// LifeCycle
import { onMounted } from 'vue';

onMounted(() => {});

// Vuex
import { useStore } from 'vuex';
const store = useStore();

// Reactive
import { reactive } from 'vue';

// user
const user = reactive(store.state.user);
</script>

<style></style>
