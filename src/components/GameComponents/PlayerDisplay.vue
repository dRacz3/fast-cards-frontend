<template>
  <div class="disable_selection">
    <md-card class="player_card" md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ displayed_name }}</div>
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
  },
  computed: {
    displayed_name() {
      return this.player_data.user.substring(0, 15);
    }
  }
};
</script>

<style scoped>
.player_card {
  border-radius: 50px;
  background: rgba(186, 251, 251, 0.315);
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
