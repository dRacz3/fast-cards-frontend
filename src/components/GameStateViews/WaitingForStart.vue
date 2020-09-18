<template>
  <div>
    <div v-if="this.players_in_session">
      <span>
        The following players in waiting for the game to start:
        {{ player_in_lobby }}
      </span>
      <br />
      <md-button class="md-raised" @click="step_game()"
        >I have waited enough! Let's start</md-button
      >
    </div>
    <div v-else>
      <md-progress-spinner
        :md-diameter="100"
        :md-stroke="10"
        md-mode="indeterminate"
      ></md-progress-spinner>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    session_name: {
      type: String,
      required: true
    },
    players_in_session: { required: true },
    // socket: {
    //   required: true
    // },
    step_game: { required: true, type: Function }
  },
  methods: {},
  computed: {
    player_in_lobby() {
      if (this.players_in_session) {
        return this.players_in_session.map(e => e.user);
      }
      return "";
    }
  }
};
</script>

<style></style>
