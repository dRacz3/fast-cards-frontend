<template>
  <div>
    <md-field>
      <md-input v-model="chat_room_name"></md-input>
      <md-button @click="connect_to_socket()">Join</md-button>
    </md-field>
  </div>
</template>

<script>
import { backendSocket } from "../main";
import { get_full_ws_address } from "../consts";

export default {
  data: () => ({
    reconnect_timer: null,
    socket_url: "",
    chat_room_name: null,
  }),
  components: {},
  props: {},
  mounted() {},

  methods: {
    connect_to_socket() {
      let api_token = this.$store.state.api_token;
      this.socket_url = get_full_ws_address(this.chat_room_name, api_token);

      console.log(`Attempting to connect WS to url ${this.socket_url}`);
      backendSocket.$connect(this.socket_url);
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 10px;
  width: 100%;
}

.flex-row-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
