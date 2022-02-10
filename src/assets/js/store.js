import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate';

const store = createStore({
  state: {
    isDebug: true,
    screen: {
      mode: 'light',
      txt: 'Change light mode',
    },
    user: {
      isLogin: false,
      id: '',
      name: '',
      email: '',
      imgUrl: '',
      idToken: '',
    },
  },
  getters: {
    getScreenMode: (state) => {
      return state.screen.mode;
    },
    getScreenTxt: (state) => {
      return state.screen.txt;
    },
    user: (state) => {
      return state.user;
    },
  },
  mutations: {
    setScreenMode(state, value) {
      state.screen.mode = value;
    },
    setScreenTxt(state, value) {
      state.screen.txt = value;
    },
    user(state, value) {
      state.user = value;
    },
  },
  actions: {},
  plugins: [
    persistedstate({
      paths: ['screen.mode', 'screen.txt', 'user'],
    }),
  ],
});

export default store;
