import Vue from "vue";
//import VueSocketIOExt from "vue-socket.io-extended";
//import io from "socket.io-client";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);
Vue.config.productionTip = false;

//const socket = io("http://127.0.0.1:8000");
//Vue.use(VueSocketIOExt, socket);

import ApiClient from "./libs/src/ApiClient";
import ApiApi from "./libs/src/api/ApiApi";
import GameEngineApiApi from "./libs/src/api/GameEngineApiApi";

export const apiclient = new ApiClient();

export const backendApi = new ApiApi(apiclient);
export const gameApi = new GameEngineApiApi(apiclient);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit("initialiseStore");
  }
}).$mount("#app");
