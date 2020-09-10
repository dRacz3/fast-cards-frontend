import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_token: null,
    socket: {
      isConnected: false,
      message: "",
      reconnectError: false
    }
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
    },
    SOCKET_ONOPEN(state, event) {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
      console.log("SOCKET_ONOPEN");
    },
    // eslint-disable-next-line no-unused-vars
    SOCKET_ONCLOSE(state, event) {
      state.socket.isConnected = false;
      console.log("SOCKET_ONCLOSE");
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event);
      console.log("SOCKET_ONERROR");
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message;
      console.log("SOCKET_ONMESSAGE " + message);
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.info(state, count);
      console.log("SOCKET_RECONNECT " + count);
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
      console.log("SOCKET_RECONNECT_ERROR " + state);
    }
  },
  actions: {
    sendMessage: function(context, message) {
      Vue.prototype.$socket.send(message);
    }
  },
  modules: {}
});
