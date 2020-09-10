<template>
  <div class="disable_selection">
    <md-card class="player_card" md-with-hover>
      <!-- {{ player_data }} -->
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ player_data.user }}</div>
          <div class="md-subhead" v-if="is_tzar">
            TZAR <md-icon>star_rate</md-icon>
          </div>
        </md-card-header-text>

        <md-card-media>
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png"
            alt="Player"
          />
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
      required: true
    },
    is_tzar: {
      default: false
    }
  }
};
</script>

<style scoped>
.player_card {
  max-width: 25em;
}

ul {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 10px;
  width: 100%;
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
