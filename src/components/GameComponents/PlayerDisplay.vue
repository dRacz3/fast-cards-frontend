<template>
  <div>
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
          <!-- <img src="player_data.avatar" alt="Player" /> -->
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
</style>
