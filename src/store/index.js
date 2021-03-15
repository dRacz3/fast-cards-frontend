import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { Message, SocketEvent, SocketEventTypes } from "../helpers/message"

function sendToListeners(payload, listeners)
{
  listeners.forEach(l => {
    l.callback(payload)
  });
}

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

    message_listeners: [],
    socket_event_listeners : [],

    event_callback_list: null,
    message_log: [],
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
      state.event_callback_list = event_callback;
    },


    register_message_listener(state, listener) {
      if (state.message_listeners.filter(l => l.listener_instance == listener.listener_instance).length == 0) {
        state.message_listeners.push(listener);
      }
    },
    remove_message_listener(state, listener_instance) {
      state.message_listeners = state.message_listeners(l => l != listener_instance);
    },


    register_socket_event_listeners(state, listener) {
      console.log(`register_socket_event_listeners - ${listener}`);
      if (state.socket_event_listeners.filter(l => l.listener_instance == listener.listener_instance).length == 0) {
        state.socket_event_listeners.push(listener);
      }
    },
    remove_socket_event_listeners(state, listener_instance) {
      state.socket_event_listeners = state.socket_event_listeners(l => l != listener_instance);
    },




    push_message_to_snackbar(state, message) {
      state.message_log.push(message);
      state.event_callback_list(message);
    },


    // Socket related mutations
    SOCKET_ONOPEN(state, event) {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
      sendToListeners(new SocketEvent(SocketEventTypes.SOCKET_ONOPEN, event), state.socket_event_listeners)
    },
    // eslint-disable-next-line no-unused-vars
    SOCKET_ONCLOSE(state, event) {
      state.socket.isConnected = false;
      console.log("SOCKET_ONCLOSE");
      sendToListeners(new SocketEvent(SocketEventTypes.SOCKET_ONCLOSE, event), state.socket_event_listeners)
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event);
      sendToListeners(new SocketEvent(SocketEventTypes.SOCKET_ONERROR, event), state.socket_event_listeners)
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.info(state, count);
      sendToListeners(new SocketEvent(SocketEventTypes.SOCKET_RECONNECT, count), state.socket_event_listeners)
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
      console.log("SOCKET_RECONNECT_ERROR ");
      sendToListeners(new SocketEvent(SocketEventTypes.SOCKET_RECONNECT_ERROR, null), state.socket_event_listeners)
    },


    // message is somewhat special, it has it's own handler list.
    SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message;
      console.log("SOCKET_ONMESSAGE " + JSON.stringify(message));
      if (state.event_callback_list) {
        state.event_callback_list(message);
      }
      if ("message" in message) {
        let relevant_listeners = state.message_listeners.filter(l => {
          return l.topic == message.topic
        })

        let msg = new Message(message.sender, message.topic, message.message);
        sendToListeners(msg, relevant_listeners)
      }
    },
  },
  actions: {
    sendMessage: function(context, message) {
      Vue.prototype.$socket.send(message);
    }
  },
  modules: {}
});
