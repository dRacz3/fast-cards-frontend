<template>
  <div>
    <div v-for="(entry, index) of rooms" :key="index">
      <room-card
        :room_data="entry"
        @onJoinRoomClicked="onJoinRoomClicked"
      ></room-card>
    </div>
    <md-button @click="onRefreshClicked"><md-icon>refresh</md-icon></md-button>
  </div>
</template>

<script>
import RoomCard from "./RoomCard";
export default {
  components: {
    "room-card": RoomCard,
  },
  props: {
    rooms: {
      required: true,
      type: Array,
    },
  },
  methods: {
    onRefreshClicked() {
      this.$emit("onRefreshClicked");
    },
    onJoinRoomClicked(room_name) {
      this.$emit("onJoinRoomClicked", room_name);
    },
  },
};
</script>

<style scoped>
.disable_selection {
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE10+/Edge */
  user-select: none;
}

.room-card {
  border: 2px solid black;
  padding: 15px;
  margin: 20px;
}
</style>