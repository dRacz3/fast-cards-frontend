import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import VueNativeSock from 'vue-native-websocket';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import { isProduction } from './getenv';

Vue.use(VueMaterial);
Vue.config.productionTip = false;

let SERVER_ADDRESS = window.location.hostname;

let WS_ADDRESS;
if (isProduction()) {
  WS_ADDRESS = `wss://${SERVER_ADDRESS}/ws/chat/`;
  SERVER_ADDRESS = `https://${SERVER_ADDRESS}`;
} else {
  WS_ADDRESS = `ws://${SERVER_ADDRESS}:8000/ws/chat/`;
  SERVER_ADDRESS = `http://${SERVER_ADDRESS}:8000`;
}

Vue.use(VueNativeSock, WS_ADDRESS, {
  store: store,
  connectManually: true,
  format: 'json',
});

export const backendSocket = new Vue();

import { UserApi, ApiClient, CardsAgainstApi } from './libs/src/index';

export const apiclient = new ApiClient();
apiclient.basePath = SERVER_ADDRESS;
export const userApi = new UserApi(apiclient);
export const cardsAgainstApi = new CardsAgainstApi(apiclient);

export const pushMessageToSnackbar = (message) => {
  store.commit('push_message_to_snackbar', message);
};

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
}).$mount('#app');
