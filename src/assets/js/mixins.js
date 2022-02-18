import axios from 'axios';
axios.defaults.baseURL = 'https://c79cbe29-db5f-4c2f-9d9e-295098c0b532.mock.pstmn.io';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
  data() {
    return {
      $baseURL: axios.defaults.baseURL,
    };
  },
  methods: {
    async $api(method = 'get', url, data) {
      return (
        await axios({
          method: method,
          url,
          data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
    $log(txt, which = 'unknown', isDebug = 'N', color = 'tomato') {
      const isObject = (str) => {
        try {
          if (typeof str === 'object') {
            return true;
          }
        } catch (e) {
          return false;
        }
      };

      if (isDebug) {
        txt = isObject(txt) ? JSON.stringify(txt, null, 2) : txt;
        console.log('%c%s', `color: ${color}`, `[${new Date().toISOString()}] ${which} : ${txt}`);
      }
    },
  },
};
