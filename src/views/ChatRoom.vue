<template>
  <div>
    <h4>Socket is connected : {{ is_connected }}</h4>
    <md-field>
      <md-input v-model="chat_room_name"></md-input>
      <md-button @click="connect_to_socket()">Join</md-button>
    </md-field>
    <div>
      <ul class="flex-container">
        <div v-for="(entry, index) of message_log" :key="index">
          <md-content> {{ entry.sender }} : {{ entry.content }} </md-content>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { backendSocket } from "../main";
import { get_full_ws_address } from "../consts";
import { MessageListener, SocketEventTypes } from "../helpers/message";

export default {
  data: () => ({
    reconnect_timer: null,
    socket_url: "",
    chat_room_name: null,
    message_log: [],
    message_listener: null,
    socket_event_listener: null,
    is_connected: false,
  }),
  components: {},
  props: {},
  mounted() {},
  destroyed() {
    backendSocket.$disconnect();
  },

  methods: {
    connect_to_socket() {
      let api_token = this.$store.state.api_token;
      this.socket_url = get_full_ws_address(this.chat_room_name, api_token);

      console.log(`Attempting to connect WS to url ${this.socket_url}`);

      if (this.is_connected) {
        backendSocket.$disconnect();
      }
      backendSocket.$connect(this.socket_url);

      this.message_listener = new MessageListener(
        this.chat_room_name,
        this,
        this.onNewMessage
      );

      this.socket_event_listener = new MessageListener(
        this.chat_room_name,
        this,
        this.onNewSocketEvent
      );
      this.$store.commit("register_message_listener", this.message_listener);
      this.$store.commit(
        "register_socket_event_listeners",
        this.socket_event_listener
      );
    },

    onNewMessage(message) {
      console.log(`Chatroom got message: ${JSON.stringify(message)}`);
      this.message_log.push(message);
    },

    onNewSocketEvent(socketEvent) {
      switch (socketEvent.type) {
        case SocketEventTypes.SOCKET_ONOPEN:
          this.is_connected = true;
          break;
        case SocketEventTypes.SOCKET_ONCLOSE:
          this.is_connected = false;
          break;
        case SocketEventTypes.SOCKET_ONERROR:
          break;
        case SocketEventTypes.SOCKET_RECONNECT:
          this.is_connected = true;
          break;
        case SocketEventTypes.SOCKET_RECONNECT_ERROR:
          this.is_connected = false;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped></style>
