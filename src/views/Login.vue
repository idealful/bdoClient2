<template>
  <article>
    <section class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="text-gray-500 text-center border-4 border-dashed border-gray-200 rounded-lg h-screen">
          <h1 class="text-5xl py-4">{{ t('memberMenus[0].value') }}</h1>
          <h5 class="py-2">{{ t('messages.socialLogin') }}</h5>
          <div class="flex justify-center" id="google-signin-btn" v-show="!store.state.user.isLogin"></div>
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

onMounted(() => {
  window.gapi.signin2.render('google-signin-btn', { onsuccess: loginUser });
});

// Vuex
import { useStore } from 'vuex';
const store = useStore();

import log from '../assets/js/log';

// event handler
const loginUser = (googleUser) => {
  try {
    const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;

    const user = {
      isLogin: true,
      type: 'google',
      id: profile.getId(), // Do not send to your backend! Use an ID token instead.
      name: profile.getName(),
      email: profile.getEmail(),
      imgUrl: profile.getImageUrl(),
      idToken: id_token,
    };

    store.commit('user', user);

    log(store.state.isDebug, 'login', user.isLogin);
  } catch (error) {
    console.error(error);
  }
};
</script>

<style></style>
