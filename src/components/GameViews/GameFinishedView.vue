<template>
  <div>
    <div>
      <div v-if="room_data.last_winners">
        <div v-if="room_data.last_winners.length > 1">
          <h3>It was a draw! The winners are:</h3>
        </div>
        <div v-else><h3>The winner is:</h3></div>
        <div v-for="(entry, index) of room_data.last_winners" :key="index">
          <h4>{{ entry.username }}, who has submitted:</h4>
          <submission-result-display
            :submission="entry.submission"
            :isPlayerAllowedToVote="false"
          ></submission-result-display>
        </div>
      </div>

      <h1>This game has ended, thanks for playing!</h1>
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
import SubmissionResultDisplay from "@/components/GameComponents/SubmissionResultDisplay.vue";

export default {
  data: () => ({}),
  props: {
    room_data: {
      required: true,
    },
  },
  components: {
    "player-display": PlayerDisplay,
    "submission-result-display": SubmissionResultDisplay,
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
