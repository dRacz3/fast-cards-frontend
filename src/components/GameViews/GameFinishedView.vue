<template>
  <div>
    <div>
      <h1>This game has ended!</h1>
      <h2>The winner is : {{ player_ascending[0].username }}</h2>
    </div>
    <div>
      <div v-for="(entry, index) of player_ascending" :key="index">
        <player-display :player_data="entry"></player-display>
      </div>
    </div>
    <div>
      <!-- {{ room_data.other_players }} -->
    </div>
  </div>
</template>

<script>
import PlayerDisplay from "@/components/GameComponents/PlayerDisplay";

export default {
  data: () => ({}),
  props: {
    room_data: {
      required: true,
    },
  },
  components: {
    "player-display": PlayerDisplay,
  },
  methods: {},
  computed: {
    player_ascending() {
      const players = this.room_data.other_players;
      players.sort((a, b) => {
        return a.points < b.points ? 1 : -1;
      });
      return players;
    },
  },
};
</script>
