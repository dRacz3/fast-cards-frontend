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

    <md-divider></md-divider>
    <br />

    <!-- Before the game  starts -->
    <div v-if="room_data.state === 'STARTING'">
      <!-- <h4>Game is in state:{{ this.room_data.state }}</h4> -->
      <div v-if="this.room_data.other_players.length >= 2">
        <md-button @click="startGame" class="md-raised">Let's begin!</md-button>
      </div>
      <div v-else>Waiting for more players to join..</div>
      <!-- You -->
      <!--<div>
        <player-display :player_data="player"></player-display>
      </div> -->
      <!-- Other players -->
      <div>
        Players in the game:
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

    <!-- {{ this.room_data }} -->
  </div>
</template>

<script>
import PlayerDisplay from "@/components/GameComponents/PlayerDisplay";

export default {
  props: {
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
