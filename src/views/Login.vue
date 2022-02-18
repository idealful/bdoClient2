<template>
  <article>
    <section class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-screen text-gray-500">
          <h1 class="text-center text-5xl py-4">{{ t(messages.menu) }}</h1>
          <h5 class="text-center py-2">{{ t(messages.socialLogin) }}</h5>
          <div class="text-center flex justify-center" id="google-signin-btn" v-show="!store.state.user.isLogin"></div>
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
  setClientIdByEnv();
});

// Vuex
import { useStore } from 'vuex';
const store = useStore();

// Mixin
import mixin from '../assets/js/mixins';
const { $api, $log } = mixin.methods;

// env
const env = import.meta.env;

// messages
const messages = {
  menu: 'memberMenus[0].value',
  socialLogin: 'messages.socialLogin',
};

// event handler
const setClientIdByEnv = () => {
  const metas = document.querySelectorAll('meta');
  const googleSignInClientId = Array.from(metas).filter((meta) => {
    return meta.name === 'google-signin-client_id';
  });

  const viteAppEnv = env.VITE_APP_ENV;

  if (viteAppEnv !== 'local') {
    googleSignInClientId[0].content = '594148934886-8r4mg69f4ol2iq5momgfp0b7smvi5m08.apps.googleusercontent.com';
  }

  $log(`${viteAppEnv}, ${googleSignInClientId[0].content}`, 'setClientIdByEnv', store.state.isDebug);
};

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

    const result = user.isLogin;
    $log(result, 'loginUser', store.state.isDebug);
  } catch (error) {
    console.error(error);
  }
};
</script>

<style></style>
