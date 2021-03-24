<template>
  <div>
    <div v-if="!room_data">
      <h1>Welcome to room [{{ room_name }}]</h1>
      <md-field>
        <label>Room</label>
        <md-input v-model="room_name"></md-input>
      </md-field>
      <md-button @click="newRoom">New room</md-button>
      <md-button @click="joinRoom">Join</md-button>
    </div>

    <!-- Before the game  starts -->
    <div v-if="room_data.state === 'STARTING'">
      <h4>Game is in state:{{ this.room_data.state }}</h4>
      <md-button @click="startGame">Let's begin!</md-button>
      <!-- You -->
      <div>
        <player-display :player_data="player"></player-display>
      </div>
      <!-- Other players -->
      <div>
        <ul class="flex-container table-container">
          <div
            v-for="(entry, index) of this.room_data.other_players"
            :key="index"
          >
            <player-display :player_data="entry"></player-display>
          </div>
        </ul>
      </div>
    </div>

    {{ this.room_data }}
  </div>
</template>

<script>
import PlayerDisplay from "./PlayerDisplay";

export default {
  props: {
    startGameCallback: {
      required: true,
    },
    room_data: {
      type: Object,
      required: true,
    },
  },

  data: () => ({}),
  components: {
    "player-display": PlayerDisplay,
  },
  mounted() {},
  methods: {
    startGame() {
      this.$emit("startGameClicked");
    },
  },

  computed: {
    player() {
      return this.room_data.player;
    },
  },
};
</script>
