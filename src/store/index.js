import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    developer_mode : true,
    api_token: null,
    logged_in_username: null,
    socket: {
      isConnected: false,
      message: "",
      reconnectError: false
    },
    event_callback: null,
    on_message_callback: null,
    message_log : []
  },
  mutations: {
    update_api_token(state, login_data) {
      state.logged_in_username = login_data.username;
      state.api_token = login_data.token;
      localStorage.setItem("api_token", state.api_token);
      localStorage.setItem("logged_in_username", state.logged_in_username);
    },
    initialiseStore(state) {
      state.api_token = localStorage.getItem("api_token") || null;
      state.logged_in_username =
        localStorage.getItem("logged_in_username") || null;
    },
    register_event_callback(state, event_callback) {
      state.event_callback = event_callback;
    },
    register_on_message_callback(state, on_message_callback) {
      state.on_message_callback = on_message_callback;
    },
    push_message_to_snackbar(state, message) {
      state.message_log.push(message);
      state.event_callback(message);
    },
    SOCKET_ONOPEN(state, event) {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
      console.log("SOCKET_ONOPEN");
      if (state.event_callback) {
        state.event_callback(event.data);
      }
    },
    // eslint-disable-next-line no-unused-vars
    SOCKET_ONCLOSE(state, event) {
      state.socket.isConnected = false;
      console.log("SOCKET_ONCLOSE");
      if (state.event_callback) {
        state.event_callback("Connection closed..." + JSON.stringify(event));
      }
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event);
      console.log("SOCKET_ONERROR");
      if (state.event_callback) {
        state.event_callback(`Error!: ` + JSON.stringify(event));
      }
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message;
      console.log("SOCKET_ONMESSAGE " + JSON.stringify(message));
      if (state.event_callback) {
        state.event_callback(message.data);
      }
      if (state.on_message_callback) {
        state.on_message_callback(JSON.parse(message.data).message);
      }
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.info(state, count);
      console.log("SOCKET_RECONNECT " + count);
      if (state.event_callback) {
        state.event_callback(`Reconnected! ${count}`);
      }
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
      console.log("SOCKET_RECONNECT_ERROR ");
      if (state.event_callback) {
        state.event_callback("Reconnection error...");
      }
    }
  },
  actions: {
    sendMessage: function(context, message) {
      Vue.prototype.$socket.send(message);
    }
  },
  modules: {}
});
