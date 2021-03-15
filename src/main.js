import Vue from "vue";
//import VueSocketIOExt from "vue-socket.io-extended";
//import io from "socket.io-client";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import VueLodash from "vue-lodash";
import lodash from "lodash";

import VueNativeSock from "vue-native-websocket";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);
Vue.config.productionTip = false;

// name is optional
Vue.use(VueLodash, { name: "custom", lodash: lodash });

console.log();
Vue.use(VueNativeSock, "ws://127.0.0.1:8000/ws/chat/", {
  store: store,
  connectManually: true,
});

export const backendSocket = new Vue();

import ApiClient from "./libs/src/ApiClient";
import GameEngineApiApi from "./libs/src/api/GameEngineApiApi";
import RestAuthApi from "./libs/src/api/RestAuthApi";

export const apiclient = new ApiClient();

export const backendApi = new RestAuthApi(apiclient);
export const gameApi = new GameEngineApiApi(apiclient);

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
}).$mount("#app");
