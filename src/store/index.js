import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_token: null
  },
  mutations: {
    update_api_token(state, new_token) {
      state.api_token = new_token;
      localStorage.setItem("api_token", new_token);
    },
    initialiseStore(state) {
      const stored_token = localStorage.getItem("api_token");
      if (stored_token) {
        state.api_token = stored_token;
      }
    }
  },
  actions: {},
  modules: {}
});
