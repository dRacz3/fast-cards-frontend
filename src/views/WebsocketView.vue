<template>
  <div>
    <div v-if="is_connected">
      <!-- <h4>Socket is connected : {{ is_connected }}</h4> -->
      <md-field>
        <md-input v-model="text_input"></md-input>
        <md-button @click="sendMessage">Send <md-icon>mail</md-icon></md-button>
      </md-field>
      <div>
        <ul class="flex-container">
          <div v-for="(entry, index) of message_log" :key="index">
            <div v-if="entry">
              <md-content>
                {{ entry.sender }} : {{ entry.content }}
              </md-content>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <div v-else>
      <md-empty-state
        class="md-primary"
        md-icon="cloud_off"
        md-label="Connection looks broken with game server."
        md-description="."
      >
      </md-empty-state>
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
    text_input: null,
    message_log: [],
    message_listener: null,
    socket_event_listener: null,
    is_connected: false,
  }),
  components: {},
  props: {
    room_data: { required: true, type: Object },
  },
  mounted() {
    this.connect_to_socket();
  },
  destroyed() {
    backendSocket.$disconnect();
    console.log("Socket disconnecting");
    this.socket_url = "";
  },
  computed: {
    room_name() {
      if (this.room_data) {
        return this.room_data.room_name;
      }
      return "";
    },
  },

  methods: {
    connect_to_socket() {
      let api_token = this.$store.state.api_token;
      this.socket_url = get_full_ws_address(this.room_name, api_token);

      console.log(`Attempting to connect WS to url ${this.socket_url}`);
      backendSocket.$connect(this.socket_url);

      this.message_listener = new MessageListener(
        this.room_name,
        this,
        this.onNewMessage
      );

      this.socket_event_listener = new MessageListener(
        this.room_name,
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
      if (message) {
        if (message.sender === "SYSTEM") {
          this.$emit("broadcastReceivedFromServer");
        }
        this.message_log.push(message.message);
      }
    },

    sendMessage() {
      this.$store.dispatch("sendMessage", {
        message: this.text_input,
      });
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
          console.log("Fallback to default");
          break;
      }
    },
  },
};
</script>

<style scoped>
</style>
