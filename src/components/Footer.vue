<template>
  <footer class="pb-16 text-sm leading-6">
    <section class="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
      <article class="flex">
        <div class="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0 mt-5">
          <div class="lg:flex-none lg:w">
            <h2 class="font-semibold text-slate-900 dark:text-slate-100">{{ t(messages.menuTxt) }}</h2>
            <ul class="mt-3 space-y-2">
              <li>
                <router-link
                  :to="t(messages.menuMain0Key)"
                  class="hover:font-bold dark:hover:text-slate-200 dark:text-slate-500"
                  >{{ t(messages.menuMain0Value) }}</router-link
                >
              </li>
              <li>
                <router-link
                  :to="t(messages.menuMain1Key)"
                  class="hover:font-bold dark:hover:text-slate-200 dark:text-slate-500"
                  >{{ t(messages.menuMain1Value) }}</router-link
                >
              </li>
              <li>
                <router-link
                  :to="t(messages.menuMain2Key)"
                  class="hover:font-bold dark:hover:text-slate-200 dark:text-slate-500"
                  >{{ t(messages.menuMain2Value) }}</router-link
                >
              </li>
              <li>
                <router-link
                  :to="t(messages.menuMain3Key)"
                  class="hover:font-bold dark:hover:text-slate-200 dark:text-slate-500"
                  >{{ t(messages.menuMain2Value) }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article class="dark:text-gray-500 text-center mt-5 pt-5 hidden">Version : {{ env.VITE_APP_VERSION }}</article>
      <article class="dark:text-slate-500 text-center mt-5 pt-5">
        {{ t(messages.copyright, { now: new Date().getFullYear(), author: 'idealful@gmail.com' }) }}
      </article>
    </section>
  </footer>
</template>

<script setup>
// i18n
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// messages
const messages = {
  copyright: 'messages.copyright',
  menuTxt: 'messages.menuTxt',
  menuMain0Key: 'mainMenus[0].key',
  menuMain0Value: 'mainMenus[0].value',
  menuMain1Key: 'mainMenus[1].key',
  menuMain1Value: 'mainMenus[1].value',
  menuMain2Key: 'mainMenus[2].key',
  menuMain2Value: 'mainMenus[2].value',
  menuMain3Key: 'mainMenus[3].key',
  menuMain3Value: 'mainMenus[3].value',
  menuMember0Key: 'memberMenus[0].key',
};

// env
const env = import.meta.env;

console.log(`Version : ${env.VITE_APP_VERSION}`);
</script>

<style></style>
