<template>
  <div>
    <md-card class="disable_selection room-card">
      <md-card-header>
        <div class="md-title">
          <h1>{{ room_data.room_name }}</h1>
        </div>
        <div>{{ room_data.state }}</div>
        <div class="md-subhead">Players: {{ room_data.player_count }}</div>
      </md-card-header>
      <md-card-actions>
        <md-button
          class="md-raised"
          @click="onJoinRoomClicked"
          :disabled="!isJoinable"
        >
          <md-icon>door_sliding</md-icon> Join game
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    room_data: {
      required: true,
      type: Object,
    },
  },
  methods: {
    onJoinRoomClicked() {
      this.$emit("onJoinRoomClicked", this.room_data.room_name);
    },
  },
  computed: {
    isJoinable() {
      return this.room_data.state !== "FINISHED";
    },
  },
};
</script>

<style scoped>
.room-card {
  border: 2px solid black;
  padding: 15px;
  margin: 20px;
}
</style>
