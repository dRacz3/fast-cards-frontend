import Vue from "vue";
import VueMaterial from "vue-material";
//import VueSocketIOExt from "vue-socket.io-extended";
//import io from "socket.io-client";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import axios from "axios";

Vue.prototype.$http = axios;

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);
Vue.config.productionTip = false;

//const socket = io("http://127.0.0.1:8000");
//Vue.use(VueSocketIOExt, socket);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit("initialiseStore");
  }
}).$mount("#app");
