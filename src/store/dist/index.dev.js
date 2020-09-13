"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    api_token: null,
    socket: {
      isConnected: false,
      message: "",
      reconnectError: false
    },
    event_callback: null,
    on_message_callback: null
  },
  mutations: {
    update_api_token: function update_api_token(state, new_token) {
      state.api_token = new_token;
      localStorage.setItem("api_token", new_token);
    },
    initialiseStore: function initialiseStore(state) {
      var stored_token = localStorage.getItem("api_token");

      if (stored_token) {
        state.api_token = stored_token;
      }
    },
    register_event_callback: function register_event_callback(state, event_callback) {
      state.event_callback = event_callback;
    },
    register_on_message_callback: function register_on_message_callback(state, on_message_callback) {
      state.on_message_callback = on_message_callback;
    },
    push_message_to_snackbar: function push_message_to_snackbar(state, message) {
      state.event_callback(message);
    },
    SOCKET_ONOPEN: function SOCKET_ONOPEN(state, event) {
      _vue["default"].prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
      console.log("SOCKET_ONOPEN");

      if (state.event_callback) {
        state.event_callback(event.data);
      }
    },
    // eslint-disable-next-line no-unused-vars
    SOCKET_ONCLOSE: function SOCKET_ONCLOSE(state, event) {
      state.socket.isConnected = false;
      console.log("SOCKET_ONCLOSE");

      if (state.event_callback) {
        state.event_callback("Connection closed..." + event.reason);
      }
    },
    SOCKET_ONERROR: function SOCKET_ONERROR(state, event) {
      console.error(state, event);
      console.log("SOCKET_ONERROR");

      if (state.event_callback) {
        state.event_callback("Error!: " + event);
      }
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE: function SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message;
      console.log("SOCKET_ONMESSAGE " + message);

      if (state.event_callback) {
        state.event_callback(message.data);
      }

      if (state.on_message_callback) {
        state.on_message_callback(JSON.parse(message.data).message);
      }
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT: function SOCKET_RECONNECT(state, count) {
      console.info(state, count);
      console.log("SOCKET_RECONNECT " + count);

      if (state.event_callback) {
        state.event_callback("Reconnected! ".concat(count));
      }
    },
    SOCKET_RECONNECT_ERROR: function SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
      console.log("SOCKET_RECONNECT_ERROR ");

      if (state.event_callback) {
        state.event_callback("Reconnection error...");
      }
    }
  },
  actions: {
    sendMessage: function sendMessage(context, message) {
      _vue["default"].prototype.$socket.send(message);
    }
  },
  modules: {}
});

exports["default"] = _default;