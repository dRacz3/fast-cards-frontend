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
    }
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
    SOCKET_ONOPEN: function SOCKET_ONOPEN(state, event) {
      _vue["default"].prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
      console.log("SOCKET_ONOPEN");
    },
    // eslint-disable-next-line no-unused-vars
    SOCKET_ONCLOSE: function SOCKET_ONCLOSE(state, event) {
      state.socket.isConnected = false;
      console.log("SOCKET_ONCLOSE");
    },
    SOCKET_ONERROR: function SOCKET_ONERROR(state, event) {
      console.error(state, event);
      console.log("SOCKET_ONERROR");
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE: function SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message;
      console.log("SOCKET_ONMESSAGE " + message);
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT: function SOCKET_RECONNECT(state, count) {
      console.info(state, count);
      console.log("SOCKET_RECONNECT " + count);
    },
    SOCKET_RECONNECT_ERROR: function SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
      console.log("SOCKET_RECONNECT_ERROR " + state);
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