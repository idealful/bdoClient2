<template>
  <div :class="store.getters.getScreenMode" @click="documentClickEvent">
    <div class="min-h-full bg-white dark:bg-black">
      <header>
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0 text-gray-500">{{ t(messages.greeting) }}</div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <span>
                    <router-link
                      :to="t(messages.menuMain0Key)"
                      class="hover:cursor-pointer bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                    >
                      {{ t(messages.menuMain0Value) }}
                    </router-link>
                  </span>
                  <span>
                    <router-link
                      :to="t(messages.menuMain1Key)"
                      class="hover:cursor-pointer text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                    >
                      {{ t(messages.menuMain1Value) }}
                    </router-link>
                  </span>
                  <span>
                    <router-link
                      :to="t(messages.menuMain2Key)"
                      class="hover:cursor-pointer text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                    >
                      {{ t(messages.menuMain2Value) }}
                    </router-link>
                  </span>
                  <span>
                    <router-link
                      :to="t(messages.menuMain3Key)"
                      class="hover:cursor-pointer text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                    >
                      {{ t(messages.menuMain3Value) }}
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <div class="ml-3 relative">
                  <div v-show="!store.state.user.isLogin">
                    <router-link
                      :to="t(messages.menuMember0Key)"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >{{ t(messages.menuMember0Value) }}</router-link
                    >
                  </div>
                  <div v-show="store.state.user.isLogin">
                    <button
                      type="button"
                      class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">{{ t(messages.openUserMenus) }}</span>
                      <a href="#" @click="toggleIsUserMenu">
                        <img class="h-8 w-8 rounded-full" :src="store.state.user.imgUrl" :alt="store.state.user.email"
                      /></a>
                    </button>
                  </div>
                  <!-- profile, setting, logout -->
                  <div
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                    v-show="menu.isUserMenu"
                  >
                    <span>
                      <router-link
                        :to="t(messages.menuUser0Key)"
                        class="block px-4 py-2 text-sm text-gray-500 hover:text-white hover:bg-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                      >
                        {{ t(messages.menuUser0Value) }}
                      </router-link>
                    </span>
                    <span>
                      <router-link
                        :to="t(messages.menuUser1Key)"
                        class="block px-4 py-2 text-sm text-gray-500 hover:text-white hover:bg-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        {{ t(messages.menuUser1Value) }}
                      </router-link>
                    </span>
                    <span>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-500 hover:text-white hover:bg-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                        @click="logoutUser"
                      >
                        {{ t(messages.menuUser2Value) }}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden" @click="toggleIsMainMenuMobile">
              <button
                type="button"
                class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">{{ t(messages.openMainMenus) }}</span>
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <nav class="md:hidden" id="mobile-menu" v-show="menu.isMainMenuMobile">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <span>
              <router-link
                :to="t(messages.menuMain0Key)"
                class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                {{ t(messages.menuMain0Value) }}
              </router-link>
            </span>
            <span>
              <router-link
                :to="t(messages.menuMain1Key)"
                class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
                >{{ t(messages.menuMain1Value) }}
              </router-link>
            </span>
            <span>
              <router-link
                :to="t(messages.menuMain2Key)"
                class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
                >{{ t(messages.menuMain2Value) }}
              </router-link>
            </span>
            <span>
              <router-link
                :to="t(messages.menuMain3Key)"
                class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
                >{{ t(messages.menuMain3Value) }}
              </router-link>
            </span>
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="flex items-center px-5" v-show="store.state.user.isLogin">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="store.state.user.imgUrl" :alt="t(messages.myProfileImage)" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-gray-500">{{ store.state.user.name }}</div>
                <div class="text-sm font-medium leading-none text-gray-700">{{ store.state.user.email }}</div>
              </div>
            </div>
            <div class="mt-3 px-2 space-y-1">
              <div>
                <router-link
                  :to="t(messages.menuMember0Key)"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  v-show="!store.state.user.isLogin"
                  >{{ t(messages.menuMember0Value) }}</router-link
                >
              </div>
              <div v-show="store.state.user.isLogin">
                <div>
                  <router-link
                    :to="t(messages.menuUser0Key)"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >{{ t(messages.menuUser0Value) }}</router-link
                  >
                </div>
                <div>
                  <router-link
                    :to="t(messages.menuUser1Key)"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >{{ t(messages.menuUser1Value) }}</router-link
                  >
                </div>
                <div>
                  <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    @click="logoutUser"
                    >{{ t(messages.menuUser2Value) }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <router-view />
      </main>

      <aside>
        <Aside />
      </aside>

      <Footer />
    </div>
  </div>
</template>

<script setup>
// Reactive
import { reactive } from 'vue';

// Vuex
import { useStore } from 'vuex';
const store = useStore();

// Components
import Aside from './components/Aside.vue';
import Footer from './components/Footer.vue';

// log
import log from './assets/js/log';

// i18n
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// env
const env = import.meta.env;

// title
document.querySelector('title').textContent = env.VITE_APP_TITLE;

// menu
const menu = reactive({
  isUserMenu: false,
  isMainMenuMobile: true,
});

// messages
const messages = {
  greeting: 'messages.greeting',
  menuMain0Key: 'mainMenus[0].key',
  menuMain0Value: 'mainMenus[0].value',
  menuMain1Key: 'mainMenus[1].key',
  menuMain1Value: 'mainMenus[1].value',
  menuMain2Key: 'mainMenus[2].key',
  menuMain2Value: 'mainMenus[2].value',
  menuMain3Key: 'mainMenus[3].key',
  menuMain3Value: 'mainMenus[3].value',
  menuMember0Key: 'memberMenus[0].key',
  menuMember0Value: 'memberMenus[0].value',
  openUserMenus: 'messages.openUserMenus',
  menuUser0Key: 'userMenus[0].key',
  menuUser0Value: 'userMenus[0].value',
  menuUser1Key: 'userMenus[1].key',
  menuUser1Value: 'userMenus[1].value',
  menuUser2Key: 'userMenus[2].key',
  menuUser2Value: 'userMenus[2].value',
  openMainMenus: 'messages.openMainMenus',
  myProfileImage: 'messages.myProfileImage',
};

// event handler
const documentClickEvent = () => {
  isNotUserMenu();
};

const toggleIsUserMenu = (e) => {
  e.stopPropagation(); // 이벤트 버블링 방지
  menu.isUserMenu = !menu.isUserMenu;
  log(store.state.isDebug, 'toggleIsUserMenu', menu.isUserMenu);
};

const isNotUserMenu = () => {
  menu.isUserMenu = false;
};

const toggleIsMainMenuMobile = () => {
  menu.isMainMenuMobile = !menu.isMainMenuMobile;
  log(store.state.isDebug, 'toggleIsMainMenuMobile', menu.isMainMenuMobile);
};

const logoutUser = () => {
  try {
    store.commit('user', {
      isLogin: false,
      type: '',
      id: '',
      name: '',
      email: '',
      imgUrl: '',
      idToken: '',
    });

    log(store.state.isDebug, 'logout', !store.state.user.isLogin);

    window.gapi.auth2.getAuthInstance().disconnect();
  } catch (error) {
    console.error(error);
  }
};
</script>

<style></style>
