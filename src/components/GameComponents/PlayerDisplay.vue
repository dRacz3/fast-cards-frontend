<template>
  <div class="disable_selection">
    <md-card class="player_card" md-with-hover>
      <md-tooltip md-direction="left">{{
        this.player_data.username
      }}</md-tooltip>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ displayed_name }}</div>
          Points: {{ player_data.points }}
          <!-- Submissions: {{ player_data.submissions }} -->
        </md-card-header-text>

        <md-card-media>
          <!-- <img
            src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png"
            alt="Player"
          /> -->
          <div class="md-subhead" v-if="isTzar">
            TZAR <md-icon>star_rate</md-icon>
          </div>

          <div v-if="has_submitted_this_round">
            SUBMITTED <md-icon>done_outline</md-icon>
          </div>
        </md-card-media>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  components: {},
  props: {
    player_data: {
      required: true,
    },
    has_submitted_this_round: {
      type: Boolean,
    },
  },
  computed: {
    displayed_name() {
      return this.player_data.username.substring(0, 15);
    },
    isTzar() {
      return this.player_data.current_role === "TZAR";
    },
  },
};
</script>

<style scoped>
.player_card {
  border-radius: 50px;
  background: rgba(206, 247, 247, 0.315);
  width: 350px;
}

.disable_selection {
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE10+/Edge */
  user-select: none;
}
</style>
